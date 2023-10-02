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
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" v-model="name"><br>
                <label for="user_email">Email Address:</label><br>
                <input type="email" id="user_email" name="email" placeholder="you@example.com" v-model="email" required><br>
                <label for="message">Your enquiry:</label><br>
                <!-- Use textarea for the message input -->
                <textarea class="message-input" id="message" name="message" rows="4" cols="50" v-model="message"></textarea><br>
                <button type="button" class="button button1" @click="submitForm">Send</button>
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
 

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const emailsReceived = ref([]);

const submitForm = () => {
  if (message.value) {
    emailsReceived.value.push({ name: name.value, email: email.value, message: message.value });
    console.log('Emails Received:', emailsReceived.value);
  }

  // Clear form fields and checkboxes
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>
    
