<template>
  <div class="con">
    <div class="messageBox">
      <div v-if="error">{{ error }}</div>
      <div  v-if="documents">
        <div v-for="doc in documents" :key="doc.id">
          
          <p class="name">{{ doc.name }}</p>
          <p class="message">{{ doc.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
export default {
  setup() {
    const { error, documents } = getCollection("message");
    console.log("asd", documents.value);
    return { error, documents };
  },
};
</script>

<style scoped>
.con{
  background: #ffffff;
  padding: 30px 20px;
}
 .name{
   font-weight: bold;
   margin-right: 6px;
   color: rgb(99, 96, 96);
   border-bottom: 1px solid rgb(221, 218, 218);
  
 }
.message{
font-size: 13px;
margin: 18px 0px;
}

</style>
