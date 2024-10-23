import { getAllUser, searchUser, sortUser, updateStatus } from "@/api/user";

export const users = {
  state: {
    users: [],
  },
  mutations: {
    getAllUser: (state, user) => {
      state.users = user;
    },
    updateStatus: (state, payload) => {
      const findIndex = state.users.findIndex((user) => user.id === payload.id);
      if (findIndex !== -1) {
        state.users[findIndex].status = payload.status;
      }
    },
    searchItem: (state, payload) => {
      state.users = payload;
    },
    sortItem: (state, payload) => {
      state.users = payload;
    },
  },
  actions: {
    getUser: async ({ commit }) => {
      const response = await getAllUser();
      commit("getAllUser", response);
    },
    updateUserStatus: async ({ commit }, status) => {
      const response = await updateStatus(status);
      commit("updateStatus", response);
    },
    searchUsers: async ({ commit }, search) => {
      const response = await searchUser(search);
      commit("searchItem", response);
    },
    sortUsers: async ({ commit }, sort) => {
      const response = await sortUser(sort);
      commit("sortItem", response);
    },
  },
};
