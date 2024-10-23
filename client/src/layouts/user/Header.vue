<template>
    <header class="bg-[#1e293b] p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-white text-2xl font-bold flex gap-3">
          <img
            class="w-30 h-10 mb-2"
            src="https://img.freepik.com/premium-vector/pet-shop-cute-puppy-logo-design_680355-30.jpg"
          />
          <div class="mt-1 ml-4">PetShop</div>
        </div>
  
        <!-- Navigation -->
        <nav class="hidden md:flex gap-6">
          <a href="#" class="text-white hover:text-gray-200">Home</a>
          <a href="#" class="text-white hover:text-gray-200">Shop</a>
          <a href="#" class="text-white hover:text-gray-200">Services</a>
          <a href="#" class="text-white hover:text-gray-200">About Us</a>
          <a href="#" class="text-white hover:text-gray-200">Contact</a>
        </nav>
  
        <!---Login Register-->
        <div class="flex gap-5 items-center">
          <router-link to="/login" class="text-white">Đăng Nhập</router-link>
  
          <div class="flex gap-2 items-center">
            <i class="fa-solid fa-user" style="color: White"></i>
            <div>Phanhkiu</div>
          </div>
        </div>
  
        <!-- Search bar and Cart -->
        <div class="flex items-center gap-4">
          <!-- Search Bar -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search for products..."
              class="p-2 rounded-lg w-64"
            />
            <button class="absolute right-2 top-2 text-gray-600">🔍</button>
          </div>
  
          <!-- Shopping Cart -->
          <div class="relative">
            <a href="#" class="text-white text-xl"> 🛒 </a>
            <!-- Cart Badge -->
            <span
              class="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 text-center"
            >
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup></script>
  
  <style scoped>
  header {
    background-color: #38bdf8;
    /* Tailwind color for a nice green shade */
  }
  
  input[type="text"] {
    border: 1px solid #ccc;
    padding: 8px;
  }
  
  input[type="text"]:focus {
    outline: none;
    border-color: #86efac;
  }
  
  nav a {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  .relative input {
    padding-right: 30px;
  }
  
  .relative button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .relative a {
    position: relative;
  }
  
  .relative span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    padding: 4px;
    border-radius: 50%;
    font-size: 10px;
  }
  </style>
  