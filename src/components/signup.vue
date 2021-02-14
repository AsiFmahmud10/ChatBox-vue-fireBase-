<template>
  <div>
     <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Display Name" v-model="displayName" />
      <input type="email" required placeholder="Email :" v-model="email" />
      <input
        type="password"
        required
        placeholder="Password"
        v-model="password"
      />
      {{displayName}}{{email}}
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
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      
      await signup( displayName.value, email.value, password.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style scoped>


</style>
