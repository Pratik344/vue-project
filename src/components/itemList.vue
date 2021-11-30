<template>
<div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <shoppingCart/>
      </div>
    </div>
    <div class="row">
        
        <Item v-for="item in productList.slice(0,cPage)" :key="item.id" :id="item.id" :title="item.title" :img="item.img" :price="item.price" :author="item.author" :quantity="item.quantity" :itemList="item" @changePage="changePage($event)"/>

   </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import shoppingCart from './shoopingCart.vue';
export default {
    name: "itemList",
    data() {
      return {
        cPage:8
      }
    },
   computed: {
    productList() { return this.$store.getters.productList; },
    inCart() { return this.$store.getters.inCart; },
  },
    components: {
        Item,
        shoppingCart,
    },
    methods:{
    changePage:function(page)
    {
      console.log(this.page)
      this.page=page;
      this.cPage=page
      if(this.cPage===500)
      {
        this.cPage=8
      }
    },
}
}
</script>
