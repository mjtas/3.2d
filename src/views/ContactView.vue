<template>
  <div class="home">
    <div class="main">
      <div class="about-container">
        <div class="main-heading">
          <h1>Contact Me</h1>
        </div>
        <div class="about-other">
          <div class="about-left">
            <ul class="contact-text">
              <li class="main-li">
                <label for="user-name">Name:</label><br>
                <input type="text" id="user-name" name="user-name" v-model="userName"><br>
                <label for="user-email">Email Address:</label><br>
                <input
                  type="email"
                  id="user-email"
                  name="user-email"
                  placeholder="you@example.com"
                  :class="{ 'invalid': emailInvalid }"
                  @input="validateEmail"
                  v-model="userEmail"
                  required
                >
                <span v-if="emailInvalid && emailTouched" class="error-message"><br>Invalid email format</span><br>
                <textarea class="message-input" id="user-message" name="user-message" rows="4" cols="50" v-model="userMessage" required></textarea><br>
                <button type="button" class="button button1" @click="submitForm" :disabled="!isFormValid">Send</button>
              </li>
            </ul>
            <div class="main-image">
              <img class="contact-image" src="../assets/contact.png" alt="Message">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      userName: '',
      userMessage: '',
      emailInvalid: false,
      emailTouched: false,
      emailsReceived: [],
  }
  },
  computed: {
    isFormValid() {
      return !this.emailInvalid && this.userMessage;
    },
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      this.emailInvalid = !emailRegex.test(this.userEmail);
      this.emailTouched = true;
    },

    submitForm() {
      if (this.isFormValid) {
        // Form for questions about workshops is submitted
        // Handle form submission here
        console.log('Name:', this.userName);
        console.log('Email:', this.userEmail);
        console.log('Message:', this.userMessage);

        // Clear form fields
        this.userName = '';
        this.userEmail = '';
        this.userMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.invalid {
  border-color: red;
}

.error-message {
  color: red;
}
</style>