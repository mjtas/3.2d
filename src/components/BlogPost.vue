<template>
  <div class="about-other">
    <h2>{{ post.title }}</h2>
    <div class="about-left">
            <ul class="about-text">
              <li class="main-li">{{ post.content }}</li>
          </ul>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
  };
  </script>