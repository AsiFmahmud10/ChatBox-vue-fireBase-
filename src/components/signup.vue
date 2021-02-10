<template>
  <div>
    <input type="text" required placeholder="Display Name" v-model="name" />
    <input type="text" required placeholder="Email :" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Submit</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    return { name, email, password };
  },
};
</script>

<style scoped>
</style>
