<template>
<div class="field">
    <label class="label">Search</label>
    <div class="control">
        <input class="input" type="Search" placeholder="Search" v-model="filter" />
    </div>
</div>
<table class="table is-striped" id="example">
    <thead>
        <tr>
            <th>Id </th>
            <th @click="sort('firstName')">First Name</th>
            <th @click="sort('lastName')">Last Name</th>
            <th @click="sort('email')">Email</th>
            <th>Phone Number</th>
            <th>BirthDate</th>
            <th>Skill</th>
            <th>Gender</th>
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        <tr v-for="item in sortedList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.firstName}}</td>
            <td>{{item.lastName}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phoneNumber}}</td>
            <td>{{item.birthDate}}</td>
            <td>{{item.skill}}</td>
            <td>{{item.Gender}}</td>
            <div class="buttons">
                <button class="button is-danger" @click="deleteUser(item.id)">Delete</button>
                <button class="button is-success" @click="updateUser(item.id)">Update</button>
            </div>
        </tr>
    </tbody>

</table>

<VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="onPageClick($event)" />
</template>

<script>
import axios from 'axios';
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
export default {
    name: "Display",
    data() {
        return {
            list: [],
            currentPage: 1,
            perPage: 10,
            total: 50,
            currentSort: 'id',
            currentSortDir: 'asc',
            filter: '',
            search: '',

        }
    },
    components: {
        VueTailwindPagination,
      
    },
    created: function () {
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
                var response = await axios.get("http://localhost:3001/posts");
                // console.warn(response.data);
                this.list = response.data
            }

        },
        sort: function (s) {
            //if s == current sort, reverse
            if (s === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = s;
        },
        async deleteUser(userId) {
            await axios.delete(`http://localhost:3001/posts/${userId}`)
                .then(response => {
                    console.log('response: ', response);
                    let i = this.list.map(data => data.id).indexOf(userId);
                    this.list.splice(i, 1)
                });
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
        filteredRows: function () {
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
