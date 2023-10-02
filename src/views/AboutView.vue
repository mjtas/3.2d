<template>
  <div class="home">
    <div class="main">
      <div class="about-container">
        <div class="main-heading">
          <h1>About Me</h1>
        </div>
        <div class="about-other">
          <div class="about-left">
            <ul class="about-text">
              <li class="main-li">I am starting a new career in software development after a successful first career as an employment lawyer.</li>
              <li class="main-li">As a specialist negotiator, I have achieved excellent results for clients by analysing the issues and concerns underlying disputes, critically evaluating information, generating innovative solutions to problems, communicating effectively in high-pressure situations, and quickly adapting to changing circumstances.</li>
              <li class="main-li">My analytical, problem-solving and communication skills, together with my passion for software development and my strong academic background, will make me a valuable member of a software development team.</li>
          </ul>
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
