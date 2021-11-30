<template>
<div class="container bcontent" v-for="doctor in doctorList" :key="doctor.id">
  <br/>

    <div class="card" style="width: 500px;">
        <div class="row no-gutters">
            <div class="col-sm-5" style="display: flex;">
                <img class="rounded-circle z-depth-5" :src="doctor.img" alt="Suresh Dasari Card">
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                    <span style="display: flex;justify-content: end;">$ {{doctor.charge}}</span>
                    <h5 class="card-title">{{doctor.name}}</h5>
                    <p class="card-text">{{doctor.designation}}</p>

                    <label for="rating-inline">Inline rating:</label>
                    <!-- <star-rating :rating="3.8" :read-only="true" :increment="0.01"> -->

                    <star-rating starSize=20 :rating="doctor.rating" :read-only="true"></star-rating>

                    <br />
                    <button class="btn btn-primary"  @click="addToDoctorList(doctor)">Book Appointment</button>
                </div>
            </div>
        </div>
    </div>
</div>
<br/>
</template>

<script>
// import { mdbRating } from "mdbvue";
import Swal from 'sweetalert2';
import StarRating from 'vue-star-rating'
export default {
    name: "doctorData",
    components: {
        //   mdbRating
        StarRating,
    },
    computed:{
        doctorList(){return this.$store.getters.doctorList},
        dList(){return this.$store.getters.dList}
    },
    methods: {
       addToDoctorList(doctor) {
            if (localStorage.length === 0) {
                Swal.fire(
                    'Error!',
                    'Please Login First',

                )
                this.$router.push('/Login');
            } else {
                // console.log('itemList: ', itemList);
                // console.log('id: ', id);
                this.$store.dispatch('addToDoctorList', doctor);
            }
        },
    },
}
</script>

<style scoped>
body {
    font-family: 'Raleway', sans-serif;
}

.custom-text {
    font-weight: bold;
    font-size: 1.9em;
    border: 1px solid #cfcfcf;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    color: #999;
    background: #fff;
}
</style>
