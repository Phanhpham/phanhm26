<template>
  <div class="container mx-auto p-5">

    <!-- Category Section -->
    <section class="mb-3">
      <h2 class="text-2xl font-bold mb-5">CATEGORIES</h2>
      <div class="flex gap-2">
        <div v-for="category in categories" :key="category.id" @click="selectCategory(category)"
             class="w-32 ml-28 bg-blue-400 rounded-lg hover:bg-blue-600 cursor-pointer text-center">
          <p class=" h-9 font-semibold text-white flex items-center justify-center">{{ category.name }}</p>
        </div>
      </div>
    </section>

    <!-- Product Section -->
    <section class="py-10 bg-gradient-to-b from-white to-blue-100">
  <h2 class="text-4xl font-bold text-center text-blue-700 mb-16">Our Products</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 lg:px-20">
    <div 
      v-for="product in filteredProducts" 
      :key="product.id" 
      class="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
    >
      <!-- Product Image -->
      <div class=" w-full h-64 ounded-lg">
        <img :src="product.image" alt="" 
             class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-lg">
        <!-- Overlay for hover effect -->
        <div>
          <button 
            @click="addToCart(product)"
            class="text-white bg-blue-400 py-2 px-4 mt-24 ml-7 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product Info -->
      <div class="mt-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{{ product.name }}</h3>
        <p class="text-xl text-gray-500 mt-2">{{ formatPrice(product.price) }}</p>
      </div>
    </div>

  </div>

   <!-- Services Start -->
   <div class="container-fluid py-5 mt-10">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-8 ml-72" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Services</h6>
                <div class="flex gap-1 items-center">
                  <h1 class="display-5 text-uppercase mb-0">Our Excellent Pet Care Service</h1>
                <img class="w-24 h-20 mt-10 mr-4" src="https://i.pinimg.com/564x/fa/e3/f4/fae3f42c8986094a9b9322e72832541f.jpg"/>
                </div>
                >
            </div>
            <div class="row g-5">
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4 rounded-lg">
                        <img class="w-24 h-20" src="https://i.pinimg.com/564x/45/e2/f6/45e2f6b12280a4451c3e7762468edca4.jpg"/>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Boarding</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4 rounded-lg">
                       <img class="w-24 h-20" src="https://i.pinimg.com/564x/07/67/33/0767334e929e2308e35fdf2cc62b4a98.jpg"/>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Feeding</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4 rounded-lg">
                      <img class="w-24 h-20" src="https://i.pinimg.com/564x/c3/34/25/c3342566d75a85e495e5310143849769.jpg"/>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Grooming</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="service-item bg-light d-flex p-4 rounded-lg">
                       <img class="w-24 h-20" src="https://i.pinimg.com/564x/95/db/ec/95dbec5dfc5329d744b9c0c18cc93caf.jpg"/>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Training</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    <!-- Services End -->

</section>

  <!-- Offer Start -->
  <div class="container-fluid bg-offer my-5 py-5 bg-[url('https://i.pinimg.com/enabled_lo/564x/40/ef/c5/40efc51bb4ad2e6ccd8ee1372fc23ef5.jpg')] object-cover bg-no-repeat bg-center bg-cover">
        <div class="container py-5">
            <div class="row gx-5 justify-content-start">
                <div class="col-lg-7">
                    <div class="border-start border-5 border-dark ps-5 mb-5">
                        <h6 class="text-dark text-uppercase">Special Offer</h6>
                        <h1 class="display-5 text-uppercase text-white mb-0">Save 50% on all items your first order</h1>
                    </div>
                    <p class="text-black mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                    <div class="btn btn-light py-md-3 px-md-5 me-3">Shop Now</div>
                    <div class="btn btn-outline-light py-md-3 px-md-5">Read More</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Offer End -->

     <!-- Team Start -->
     <div class="container-fluid py-5 bg-blue-100">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-7 ml-72" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Team Members</h6>
                <h1 class="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
            </div>
            <div class="owl-carousel team-carousel position-relative" style="padding-right: 25px;">
              <div class="flex gap-10">
                   <div class="team-item">
                    <div class="position-relative overflow-hidden">
                        <img class="w-64 h-80" src="https://i.pinimg.com/enabled_lo/564x/7e/ef/e6/7eefe6a8de14a9f6d950eae6e2e97494.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light text-center p-4">
                        <h5 class="text-uppercase">John Mattaham</h5>
                        <p class="m-0">Designation</p>
                    </div>
                </div>
                <div class="team-item">
                    <div class="position-relative overflow-hidden">
                        <img class="w-64 h-80" src="https://i.pinimg.com/enabled_lo/564x/7f/b7/56/7fb756260e4a7c7129f3de8881ae9624.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light text-center p-4">
                        <h5 class="text-uppercase">LyLy Jenifer</h5>
                        <p class="m-0">Designation</p>
                    </div>
                </div>
                <div class="team-item">
                    <div class="position-relative overflow-hidden">
                        <img class="w-64 h-80" src="https://i.pinimg.com/enabled_lo/564x/d9/73/3f/d9733f745f491dd00419b5e15da579a9.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light text-center p-4">
                        <h5 class="text-uppercase">Briliant Mika</h5>
                        <p class="m-0">Designation</p>
                    </div>
                </div>
                <div class="team-item">
                    <div class="position-relative overflow-hidden">
                        <img class="w-64 h-80" src="https://i.pinimg.com/564x/96/84/b4/9684b491d7bd403bc4b1f47532fa8424.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light text-center p-4">
                        <h5 class="text-uppercase">Mary Mask</h5>
                        <p class="m-0">Designation</p>
                    </div>
                </div>
                <div class="team-item">
                    <div class="position-relative overflow-hidden">
                        <img class="w-64 h-80" src="https://i.pinimg.com/564x/31/89/f8/3189f8696fbb350d42b196a9d766be78.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light text-center p-4">
                        <h5 class="text-uppercase">Ji Hoon and Hari</h5>
                        <p class="m-0">Designation</p>
                    </div>
                </div>
                
              </div>
             
            </div>
        </div>
   
    </div>
    <!-- Team End -->
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const categories = ref([
  { id: 1, name: 'Dogs' },
  { id: 2, name: 'Cats' },
  { id: 3, name: 'Birds' },
  { id: 4, name: 'Fish' }
]);

const products = ref([
  { id: 1, name: 'Cat Food', category: 'Cats', price: 25000, image: 'https://i.pinimg.com/enabled_lo/564x/0e/41/9e/0e419e1a2ce297150371a4c885973475.jpg' },
  { id: 2, name: 'Dog Food', category: 'Dogs', price: 12000, image: 'https://i.pinimg.com/enabled_lo/564x/06/91/3e/06913e7d0b2c9fff86c8e71f1ba1dbcf.jpg' },
  { id: 3, name: 'Dog Toy', category: 'Dogs', price: 30000, image: 'https://i.pinimg.com/enabled_lo/564x/32/dc/5a/32dc5ae68be64ae4ed325a04208e3aed.jpg' },
  { id: 4, name: 'Fish Tank', category: 'Fish', price: 500000, image: 'https://i.pinimg.com/564x/15/8f/39/158f39d0d7b72d91da4c33c923e44410.jpg' },
  { id: 5, name: 'Cat Toy', category: 'Cats', price: 150000, image: 'https://i.pinimg.com/564x/bf/50/45/bf504529372b7466ddbc760b63881271.jpg' },
  { id: 6, name: 'Bird Statue', category: 'Birds', price: 520000, image: 'https://i.pinimg.com/564x/e6/c8/4a/e6c84a357ec65a75fe122b2897032d4f.jpg' },
  { id: 7, name: 'Bird Cage', category: 'Birds', price: 100000, image: 'https://i.pinimg.com/564x/8f/72/2b/8f722bde93d88816a9da141515a16ea6.jpg' },
  { id: 8, name: 'Aquarium Lamp', category: 'Fish', price: 200000, image: 'https://i.pinimg.com/736x/ec/ea/2c/ecea2c1f09cd5d2c961ac439cbcf284f.jpg' }

]);

// format price
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};


const selectedCategory = ref(null);

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(product => product.category === selectedCategory.value.name);
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const addToCart = (product) => {
  console.log(`Added ${product.name} to cart`);
};
</script>


<style>

</style>