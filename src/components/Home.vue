<template>
<table class="table is-striped" id="example">
    <thead>
        <tr>
            <th >Id </th>
            <th @click="sorting({email})">Email</th>
            <th @click="sorting({first_name})">First Name</th>
            <th @click="sorting({last_name})">Last Name</th>
            <th>Avatar</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.email}}</td>
            <td>{{item.first_name}}</td>
            <td>{{item.last_name}}</td>
            <td><img class="img" :src="item.avatar" /></td>
        </tr>
    </tbody>

</table>

<VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="onPageClick($event)" />
</template>

<script>
import axios from 'axios';
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
// import Swal from 'sweetalert2';

export default {
    name: "Home",
    data() {
        return {
            list: [],
            currentPage: 1,
            perPage: 6,
            total: 12,
            order:"ASC"

        }
    },
    components: {
        VueTailwindPagination,
    },
    mounted() {

        this.fetchUserData();
    },
    updated() {
        this.fetchUserData();
    },
    methods: {
        onPageClick(event) {
            console.log('event: ', event);

            this.currentPage = event;
            // console.log('this.currentPage: ', this.currentPage);
        },
        async fetchUserData() {
            // console.log('localStorage.email: ', localStorage.email);
            if (localStorage.length === 0) {
                console.log('localStorage.email: ', localStorage.email);

            } else {
                // console.log(this.page);
                // console.log('this.currentPage: ', this.currentPage);
                var response = await axios.get(`https://reqres.in/api/users?page=${this.currentPage}`);
                // console.warn(response.data.data);
                this.list = response.data.data
            }

        },
        sorting(col){
            if(this.order==="ASC"){
                const stored=[...this.list].sort((a,b)=>
                    a[col].toString().toLowerCase()>b[col].toLowerCase()?1:-1
                );
                this.list=stored;
                console.log('this.list: ', this.list);
                this.order="DEC"
            }
        }
      

    }
}
</script>

<style scoped>
.img {

    height: 48px;
    width: 48px;
    border: 2px solid;
    border-radius: 50px;

}

body {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

;
</style>
