<template>
  <div class="home">
    <div class="main">
      <div class="main-container">
        <div class="main-heading fadeInUp">
          <h1>MJ Bickel</h1>
          <h2>Software Engineer Intern</h2>
        </div>
        <div class="main-other">
          <div class="main-left">
            <ul class="main-text">
              <li class="main-li">Penultimate year computer science student</li>
              <li class="main-li">Former lawyer with excellent analytical and problem solving skills</li>
              <li class="main-li">Passionate about building software to optimise everything</li>
          </ul>
          <div class="main-image">
            <img class="avatar" src="../assets/logo.png" alt="Avatar">
          </div>
        </div>
      </div>
      <FancyButton />
    </div>
  </div>
</div>
</template>
<script>
import FancyButton from '../components/FancyButton.vue';
export default {
  components: {
    FancyButton,
  },
}
</script>


