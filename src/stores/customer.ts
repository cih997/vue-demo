import { ref } from 'vue'
import { defineStore } from 'pinia'
import Stripe from '@/types/stripe'

export const useCustomerStore = defineStore('customer', () => {
  let customers: Stripe[] = []
  const customer = ref(customers)

  function getCustomers() {
    const model = new Stripe()
    model.getCustomers((body) => {
      customer.value = body.data;
    }, () => {})
  }

  return {
    customer, getCustomers
  }
})