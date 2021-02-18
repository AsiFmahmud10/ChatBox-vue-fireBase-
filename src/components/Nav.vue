<template>
  <nav v-if="user">
    <div class="flex">
      <p>Hi {{ user.displayName }}</p>
      <!-- <p>{{user.email}}</p> -->
      <button class="button" @click="handleClick">Log Out</button>
    </div>
  </nav>
</template>

<script>
import { useLogout } from "../composables/logout";
import getUser from "../composables/user.js";
import { watch } from "vue";
export default {
  setup(props, context) {
    const { error, logOut } = useLogout();
    const user = getUser();
    const handleClick = async () => {
      await logOut();
    };

    return { handleClick, error, user };
  },
};
</script>

<style>
nav {
  background: rgba(236, 234, 234, 0.911);
   margin: auto;
  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0);
  border: 0px;
  width: inherit;
  min-width: 400.19px;
}
nav p {
  color: #444;
  font-weight: bold;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  color: rgb(255, 10, 10);
  background: #f2f2f2;
  padding: 6px 10px;
  font-weight: bold;
  border: 1px solid rgb(248, 16, 62);
  border-radius: 15px;
  margin-right: 7px;
  text-decoration: none;
}
.button:hover {
  color: #f2f2f2;
  padding: 6px 10px;
  font-weight: bold;
  background: rgb(248, 11, 58);
  border: 1px solid rgb(150, 148, 148);
  border-radius: 15px;
  margin-right: 7px;
  text-decoration: none;
}
</style>
