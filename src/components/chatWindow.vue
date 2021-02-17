<template>

  <div class="con">
    <div v-if="error">{{ error }}</div>
    <div class="messageBox" ref="height">
       <div  v-if="documents" >
        <div v-for="doc in documents" :key="doc.id">
          
          <p class="name">{{ doc.name }}</p>
          <p class="message">{{ doc.message }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { onUpdated, ref } from 'vue';
import getCollection from "../composables/getCollection";

export default {
  setup() {

    const height = ref(null)
    const { error, documents } = getCollection("message");

 //onScroll Efferct    
    onUpdated(()=>{
    height.value.scrollTop = height.value.scrollHeight
    })

  return { error, documents, height };
  },
};
</script>

<style >

.con{
  background: #ffffff;
  padding: 30px 20px;
  padding-right:0px ;
  border: 1px solid rgb(214, 213, 213);

}
 .name{
   font-weight: bold;
   margin-right: 6px;
   color: rgb(99, 96, 96);
   border-bottom: 1px solid rgb(235, 231, 231);
  
 }
.message{
font-size: 13px;
margin: 18px 0px;
}

.messageBox{
  width: 100%;
 max-height: 535px;
overflow: auto;
}

</style>
