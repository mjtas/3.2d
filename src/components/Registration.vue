<template>
  <div class="home">
    <div class="main">
      <div class="about-container">
        <div class="main-heading">
          <h1>Administrator Registration</h1>
        </div>
        <div class="about-other">
          <div class="about-left">
            <form @submit.prevent="register">
              <InputField label="Username" type="text" v-model="userName" required />
              <InputField label="Password" type="password" v-model="passWord" required />
              <div class="field">
                <button type="submit" class="button button1" :disabled="isLoading">{{ isLoading ? 'Registering...' : 'Register' }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    async register() {
      try {
          this.isLoading = true;
          // Send the request with loggedIn set to true
          const response = await axios.post('http://localhost:3000/register', {
            userName: this.userName,
            passWord: this.passWord,
          });
          alert(response.data.message); // Display the response message from the server
          const router = this.$router;
          router.push({ path: "/" });
        
      } catch (error) {
        console.error('Registration failed:', error);
        alert("Registration failed. Please try again later.");
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>