<template>
  <div>
   
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Display Name" v-model="name" />
      <input type="email" required placeholder="Email :" v-model="email" />
      <input
        type="password"
        required
        placeholder="Password"
        v-model="password"
      />
      <button>Submit</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

import useSignup from "../composables/signup";
export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      console.log("i am running");
      await signup(name.value, email.value, password.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { name, email, password, handleSubmit, error };
  },
};
</script>

<style scoped>


</style>
