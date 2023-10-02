<template>
<div class="navbar-container">
    <div class="navbar">
      <div class="navbar-text">
        <ul class="navbar-ul">
          <router-link to="/" class="router">Home</router-link> 
          <router-link to="/about" class="router">About</router-link> 
          <router-link to="/projects" class="router">Projects</router-link> 
          <router-link to="/contact" class="router">Contact</router-link>
        </ul>
      </div>
    </div>
</div>
</template>
  
<script>
export default {
  data() {
    return {
      displayNavLinks: false,
    };
  },
  methods: {
    toggleNav() {
      this.displayNavLinks = !this.displayNavLinks;
    },
  },
};
</script>