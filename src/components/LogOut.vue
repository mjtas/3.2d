<template>
    <div class="home">
      <div class="main">
        <div class="about-container">
          <div class="main-heading">
            <h1>Administrator Logout</h1>
          </div>
          <div class="about-other">
            <div class="about-left">
              <button class="button button1" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios for making HTTP requests
  
  export default {
    methods: {
      async logout() {
        try {
          const response = await axios.post('http://localhost:3000/logout', {
            userName: this.userName,
          });
          if (response.data.success) {
            alert("Logout successful!");
            const router = this.$router;
            router.push({ path: "/" }); // Redirect to the home page after successful logout
          } else {
            alert("Logout failed. Please try again.");
          }
        } catch (error) {
          console.error('Logout failed:', error);
          alert("Logout failed. Please try again.");
        }
      }
    }
  }
  </script>
  