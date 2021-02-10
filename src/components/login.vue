<template>
  <div >
   
    <input type="text" required placeholder="Email :" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
   
    <button>Submit</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    
    const email = ref("");
    const password = ref("");
    return { email, password };
  },
};
</script>

<style scoped>
</style>
