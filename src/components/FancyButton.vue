<template>
    <div class="button-container">
        <div class="button-con">
            <div class="button-left">
                <div class="button-text">Languages: Python, C#, C++, HTML/CSS, Javascript and NodeJS</div>
                <div class="button-text">Frameworks: Vue3 and Express</div>
            </div>
            <button class="button button2" @click="goToProjects">View Projects</button>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push('/projects'); // Navigate to projects route
    },
  },
};
</script>