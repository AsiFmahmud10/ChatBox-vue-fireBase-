<template>
  <div>
    <Nav />
    <Window />
    <MessageBox />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import MessageBox from "../components/chatForm";
import getUser from "../composables/user.js";
import { useRouter } from "vue-router";
import { watch } from "vue";
import Window from "../components/chatWindow";
export default {
  components: {
    Nav,
    MessageBox,
    Window,
  },
  setup() {
    const router = useRouter();
    const user = getUser();

    //generally setup function runs once .SO if we want to do something when user change we need to use watch
    //https://www.youtube.com/results?search_query=watch+effect+vue  (tutorial)

    watch(user, () => {
      console.log("watching");
      if (!user.value) {
        router.push({ name: "Home" });
      }
    });
  },
};
</script>

<style scoped>
div {
  width: 65%;
  min-width:400px;
  margin: auto;
}
</style>
