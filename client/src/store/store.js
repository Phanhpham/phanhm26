import { createStore } from "vuex";
import { users } from "./modules/user";

export const store = createStore({
  modules: {
    user: users,
  },
});

// store.js
export default createStore({
  state: {
    products: [
      { id: 1, name: 'Cat Food', category: 'Cats', price: 25000, image: 'https://i.pinimg.com/enabled_lo/564x/0e/41/9e/0e419e1a2ce297150371a4c885973475.jpg' },
      { id: 2, name: 'Dog Food', category: 'Dogs', price: 12000, image: 'https://i.pinimg.com/enabled_lo/564x/06/91/3e/06913e7d0b2c9fff86c8e71f1ba1dbcf.jpg' },
      { id: 3, name: 'Dog Toy', category: 'Dogs', price: 30000, image: 'https://i.pinimg.com/enabled_lo/564x/32/dc/5a/32dc5ae68be64ae4ed325a04208e3aed.jpg' },
      { id: 4, name: 'Fish Tank', category: 'Fish', price: 500000, image: 'https://i.pinimg.com/564x/15/8f/39/158f39d0d7b72d91da4c33c923e44410.jpg' }
    ]
  },
  mutations: {
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    deleteProduct(state, id) {
      state.products = state.products.filter(product => product.id !== id);
    }
  }
})

