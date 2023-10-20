<template>
  <div>
    <div v-if="!currentLogIn && !hasAdmin">
      <Registration @registration-success="handleRegistrationSuccess" />
    </div>
    <div v-else-if="!currentLogIn">
      <LogIn @login-success="handleLoginSuccess" />
    </div>
    <div v-else>
      <LogOut @logout-success="handleLogoutSuccess" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Registration from '../components/Registration.vue';
import LogIn from '../components/LogIn.vue';
import LogOut from '../components/LogOut.vue';

export default {
  components: {
    LogIn,
    LogOut,
    Registration,
  },
  data() {
    return {
      currentLogIn: false,
      hasAdmin: false,
    };
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
    async checkSize() {
      try {
        const response = await axios.get('http://localhost:3000/check-db-size');
        this.hasAdmin = response.data.hasAdmin;
      } catch (error) {
        console.error('Error checking database size', error);
      }
    },
    handleRegistrationSuccess() {
      this.currentLogIn = true;
    },
    handleLoginSuccess() {
      this.currentLogIn = true;
    },
    handleLogoutSuccess() {
      this.currentLogIn = false;
    },
  },
  created() {
    // Check login status and admins in the database when the component is created
    this.checkLoginStatus();
    this.checkSize();
  },
};
</script>
