<template>
<div class="field">
    <label class="label">Search</label>
    <div class="control">
      <input class="input" type="Search" placeholder="Search" v-model="filter"/>
    </div>
  </div>
<table class="table is-striped" id="example">
    <thead>
        <tr>
            <th>Id </th>
            <th @click="sort('email')">Email</th>
            <th @click="sort('first_name')">First Name</th>
            <th @click="sort('last_name')">Last Name</th>
            <th>Avatar</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in filteredRows" :key="item.id">
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
// import Swal from 'sweetalert2';
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
            currentSort: 'id',
            currentSortDir: 'asc',
            filter: '',
            search: '',

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
        sort: function (s) {
            //if s == current sort, reverse
            if (s === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = s;
        },

    },
    computed: {
        sortedList: function () {
            return this.list.slice().sort((a, b) => {
                let modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
        },
        filteredRows() {
            return this.sortedList.filter(row => {
                const employees = row.email.toString().toLowerCase();
                const department = row.first_name.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return department.includes(searchTerm) ||
                    employees.includes(searchTerm);
            });
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
