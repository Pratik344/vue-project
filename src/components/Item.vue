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
import Swal from 'sweetalert2'
// import itemList from './itemList.vue'
export default {
    name: "Item",
    data() {
        return {
            page: 8
        }
    },
    components:{
        // itemList,
    },
    props: ['id', 'title', 'author', 'img', 'price', 'quantity', 'itemList'],
    created() {
        window.addEventListener("scroll", this.onscroll);
    },
    unmounted() {
        window.addEventListener("scroll", this.onscroll);
    },

    methods: {
        addToCart(itemList) {
            if (localStorage.length === 0) {
                Swal.fire(
                    'Error!',
                    'Please Login First',

                )
                this.$router.push('/Login');
            } else {
                // console.log('itemList: ', itemList);
                // console.log('id: ', id);
                this.$store.dispatch('addToCart', itemList);
            }
        },
        // handleScroll() {
        //     console.log(window.scrollY);
        // },

        onscroll: function () {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                this.scrollToEnd();
            }
        },
        scrollToEnd() {

            console.log('this.page: ', this.page);
            this.page = this.page + 4
            this.$emit("changePage",this.page)

        },

    },
}
</script>
