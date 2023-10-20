<template>
    <div class="blog">
      <div v-for="post in blogPosts" :key="post._id">
        <BlogPost :post="post"/>
      </div>
  
      <!-- Add form for adding new posts -->
      <div v-if="currentLogIn">
        <h2>Add New Blog Post</h2>
        <form @submit.prevent="addPost">
          <InputField label="Title:" v-model="title" :required="true" />
          <InputField label="Content:" v-model="content" :required="true" />
          <button class="button button1" type="submit">Add Post</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import BlogPost from '../components/BlogPost.vue';
  import InputField from '../components/InputField.vue';
  
  export default {
    components: {
      InputField,
      BlogPost
    },
    data() {
      return {
        currentLogIn: false,
        blogPosts: [],
        title: '',
        content: ''
        }
    },
    methods: {
      async checkLoginStatus() {
        try {
          const response = await axios.get('http://localhost:3000/api/login-status');
          this.currentLogIn = response.data.loggedIn;
        } catch (error) {
          console.error('Error checking login status', error);
        }
    },
      async fetchBlogPosts() {
        try {
          const response = await axios.get('http://localhost:3000/api/blogposts');
          this.blogPosts = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async addPost() {
        try {
            const response = await axios.post('http://localhost:3000/api/blogposts', {
            title: this.title,
            content: this.content,
            });
            // After successfully adding the post to the database,
            // update the local state with the new post
            this.blogPosts.push(response.data);
            // Clear the input fields after successful addition
            this.title = '';
            this.content = '';
        } catch (error) {
            console.error('Error adding post:', error);
        }
      }
    },
    created() {
        this.checkLoginStatus();
        this.fetchBlogPosts(); // Fetch existing blog posts when the component is created
    }
  };
  </script>
  