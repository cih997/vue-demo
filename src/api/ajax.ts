import axios from "axios";
export default axios.create({
  baseURL: import.meta.env.VITE_STRIPE_API_ROOT,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_STRIPE_KEY,
  },
})