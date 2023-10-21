<template>
    <div class="home">
      <div class="main">
        <div class="about-container">
          <div class="main-heading">
            <h1>Administrator Login</h1>
          </div>
          <div class="about-other">
            <div class="about-left">
              <form @submit.prevent="login">
                <InputField label="Username" type="text" v-model:value="userName" required />
                <InputField label="Password" type="password" v-model:value="passWord" required />
                <div class="field">
                  <button class="button button1" type="submit" :disabled="isLoading">{{ isLoading ? 'Logging In...' : 'Login' }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios for making HTTP requests
  import { useRouter } from 'vue-router';
  import InputField from './InputField.vue';
  
  export default {
    components: {
      InputField,
    },
    data() {
      return {
        userName: '',
        passWord: '',
        isLoading: false,
      };
    },
    methods: {
      async login() {
        try {
          this.isLoading = true;
          
          // Send login credentials to the Express server
          const response = await axios.post('http://localhost:3000/api/login', {
            userName: this.userName,
            passWord: this.passWord,
          });
  
          if (response.data.success) {
            alert("Login successful!");
            const router = this.$router;
            router.push({ path: "/" });
          } else {
            alert("Login failed. Please check your username and password.");
          }
        } catch (error) {
          console.error('Login failed:', error);
          alert("Login failed. Please check your username and password.");
        } finally {
          this.isLoading = false;
        }
      }
    }
  }
  </script>