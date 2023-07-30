<script setup lang="ts">
import { computed } from "vue";

import { useCustomerStore } from '@/stores/customer'

const store = useCustomerStore()
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// @todo Firebase onSnapshot to keep data offline

const customers = computed(() => {
  return store.customer;
});

const setStore = () => {
  useCustomerStore().getCustomers()
}

setStore()
</script>

<template>
  <div>
    <h2>Customers List</h2>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.name }} - {{ customer.email }}
      </li>
    </ul>
  </div>
</template>