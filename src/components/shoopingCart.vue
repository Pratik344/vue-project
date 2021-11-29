<template>
<MDBBtn color="primary" aria-controls="staticBackdropLabel" @click="staticBackdrop = true">
    Cart {{numInCart}}
</MDBBtn>

<MDBModal id="staticBackdrop" tabindex="-1" labelledby="staticBackdropLabel" v-model="staticBackdrop" staticBackdrop>
    <MDBModalHeader>
        <MDBModalTitle id="staticBackdropLabel"> Shopping Cart </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
        <table class="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.price}}</td>
                    <td>
                        <div class="myButton">
                            <button @click="decrement(item)">-</button>

                            <input type="TEXT" size="50px" NAME="email" :value="item.quantity" disabled />
                            <button @click="increment(item)">+</button>
                        </div>

                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" @click="removeFromCart(index)"> &times;</button>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <th>{{ total}}</th>
                </tr>
            </tbody>
        </table>
    </MDBModalBody>
    <MDBModalFooter>
        <MDBBtn color="secondary" @click="staticBackdrop = false"> Close </MDBBtn>
        <MDBBtn color="primary"> Understood </MDBBtn>
    </MDBModalFooter>
</MDBModal>
</template>

<script>
import {
    ref
} from 'vue';
import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
} from 'mdb-vue-ui-kit';
export default {
    name: "shoppingCart",
    setup() {
        const staticBackdrop = ref(false);

        return {
            staticBackdrop,
        };
    },
    components: {
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBBtn,
    },
    data() {
        return {
            modal: "",
        }
    },
    computed: {
        inCart() {
            return this.$store.getters.inCart;
        },
        numInCart() {
            return this.inCart.length;
        },
        cart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.productList.find((forSaleItem) => {
                    return cartItem === forSaleItem;
                });
            });
        },
        total() {
            return this.cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
        },

    },
    methods: {
        increment(item) {
            console.log('item: ', item);
            this.$store.dispatch('increment', item)
        },
        removeFromCart(index) {
            // console.log('index: ', index);
            this.$store.dispatch('removeFromCart', index);
        },
        decrement(item){
            this.$store.dispatch('decrement',item);
        },
    }
}
</script>

<style scoped>
myButton {
    border: 2px solid;
    width: 50px;
    align-content: start;
    text-align-last: center;
}
</style>
