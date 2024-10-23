<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">Create Account</h1>

      <!-- Name Input -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" placeholder="Enter your name" v-model="name" />
        <p v-if="nameError" class="text-red-500 text-xs italic">{{ nameError }}</p>
      </div>

      <!-- Email Input -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="email" placeholder="Enter your email" v-model="email" />
        <p v-if="emailError" class="text-red-500 text-xs italic">{{ emailError }}</p>
      </div>

      <!-- Password Input -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="Enter your password" v-model="password" />
        <p v-if="passwordError" class="text-red-500 text-xs italic">{{ passwordError }}</p>
      </div>

      <!-- Confirm Password Input -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">Confirm Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword" type="password" placeholder="Confirm your password" v-model="confirmPassword" />
        <p v-if="confirmPasswordError" class="text-red-500 text-xs italic">{{ confirmPasswordError }}</p>
      </div>

      <!-- Register Button -->
      <div class="flex items-center justify-center">
        <button
          @click="validateForm"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
     
        </button>
      </div>

      <!-- Login Link -->
      <p class="text-center text-gray-500 text-sm mt-4">
        Already have an account? 
        <router-link to="/login" class="text-blue-500 hover:underline">Login here</router-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

const validateForm = () => {
  nameError.value = '';
  emailError.value = '';
  passwordError.value = '';
  confirmPasswordError.value = '';

  if (!name.value) {
    nameError.value = 'Please enter your name.';
  }
  
  if (!email.value || !validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email.';
  }

  if (!password.value) {
    passwordError.value = 'Please enter your password.';
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match.';
  }

  if (!nameError.value && !emailError.value && !passwordError.value && !confirmPasswordError.value) {
    // thong bao thanh cong
    alert('Đăng ký thành công !');
  }
};

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/i;
  return re.test(String(email).toLowerCase());
};
</script>

<style></style>
