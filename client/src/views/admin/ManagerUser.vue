<template>
  <div class="m-5">
    <div class="bg-white p-5 rounded-lg h-screen">
      <h1 class="font-bold text-[20px]">Manager User</h1>

      <!-- Search bar --->
      <div class="mt-4">
        <input
          type="text"
          v-model="searchQuery"
          @input="handleSearch"
          placeholder="Search by username or email"
          class="border p-2 rounded w-full"
        />
      </div>
      <div>
        <!--- Sort form --->
        <select
          v-model="selectedSort"
          @change="handleSort"
          class="border p-2 rounded w-1/3 mt-2"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">STT</th>
              <th scope="col" class="px-6 py-3">UserName</th>
              <th scope="col" class="px-6 py-3">Avatar</th>
              <th scope="col" class="px-6 py-3">Phone Number</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in listUser"
              :key="user.id"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ (currentPage - 1) * usersPerPage + index + 1 }}
              </th>
              <td class="px-6 py-4">
                {{ user.username }}
              </td>
              <td class="px-6 py-4">
                <img class="w-6" :src="user.avatar" />
              </td>
              <td class="px-6 py-4">
                {{ user.phoneNumber }}
              </td>
              <td class="px-6 py-4">
                {{ user.email }}
              </td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="toggleUserStatus(user.id)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {{ user.status ? "Bỏ Chặn" : "Chặn" }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const searchQuery = ref("");
const selectedSort = ref("");
const currentPage = ref(1);
const usersPerPage = 2; // Chỉ định số người dùng trên mỗi trang là 2

const listUser = computed(() => store.state.user.users);
console.log(222222, listUser);

// Tính toán tổng số trang
const totalPages = computed(() =>
  Math.ceil(filteredUsers.value.length / usersPerPage)
);

// Tính toán người dùng được phân trang
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage;
  const end = start + usersPerPage;
  return filteredUsers.value.slice(start, end);
});

// Tìm kiếm và lọc người dùng
const handleSearch = () => {
  console.log(111111111, searchQuery.value);
  store.dispatch("searchUsers", searchQuery.value);
};

// sap xep ng dung
const handleSort = () => {
  store.dispatch("sortUsers", selectedSort.value);
};

// Dispatch action
onMounted(() => {
  store.dispatch("getUser");
});

// Thay đổi trang
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return; // Không cho phép chuyển tới trang ngoài giới hạn
  currentPage.value = page;
};

const toggleUserStatus = (userId) => {
  const user = store.state.user.users.find((u) => u.id === userId);
  if (user) {
    const newStatus = user.status ? false : true; // Đổi trạng thái từ chặn sang bỏ chặn hoặc ngược lại
    store.dispatch("updateUserStatus", { id: userId, status: newStatus }); // Gọi action để cập nhật trạng thái
  }
};
</script>

<style></style>
