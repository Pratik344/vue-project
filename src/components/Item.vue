<template>
<div class="col-md-3">
    <div class="card">
        <img :src="img" :alt="title" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <h4 class="card-title">{{ author }}</h4>
            <div class="card-text">₹{{ price}}</div>
            <div class="row justify-content-end">
                <button class="btn btn-primary" @click="addToCart(itemList)">Add to cart</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Item",
    props: ['id', 'title', 'author', 'img', 'price','quantity', 'itemList'],
  
    methods: {
    addToCart(itemList) {
        // console.log('itemList: ', itemList);
        // console.log('id: ', id);
      this.$store.dispatch('addToCart', itemList);
    },
  },
}
</script>
