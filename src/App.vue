<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import FooterBar from './components/FooterBar.vue'
  import Styles from '@/assets/styles.css';

  export default {
    components: {
      NavBar,
      FooterBar,
      Styles,
    }
  }
</script>
