<script setup lang="ts">
import { ref } from "vue";
import Stripe from "@/types/stripe";
import ViewCustomers from "@/components/ViewCustomers.vue";
import { useCustomerStore } from '@/stores/customer'

const isLoading = ref(false)
const customers = ref(new Array<Stripe>(0))

const getStripeCustomers = () => {
  isLoading.value = true
  let model = new Stripe()
  model.getCustomers(
    (data) => {
      customers.value = data.data.map( (customer: any) => ({
          id: customer.id,
          name: customer.name,
          email: customer.email
        }) as Stripe[]);
      isLoading.value = false
    },
    (err) => isLoading.value = false)
}

const setStore = () => {
  useCustomerStore().getCustomers()
}

setStore()
getStripeCustomers()
</script>

<template>
  <button @click="getStripeCustomers" :disabled="isLoading">Fetch Stripe Customers</button>
  <div v-if="!isLoading">
    <ViewCustomers />
  </div>
  <p v-else>Loading...</p>
</template>
