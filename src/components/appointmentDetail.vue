<template>
<div class="container bcontent" v-for="doctor in dList" :key="doctor.id">
    <br />

    <div class="card" style="width: 1500px;height:1500px">
        <div class="row no-gutters">
            <div class="col-sm-5" style="display: flex;">
                <img class="rounded-circle z-depth-5" :src="doctor.img" alt="Suresh Dasari Card">
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                    <span style="display: flex;justify-content: end;font-size: x-large;font-style: oblique;font-weight: bolder;">$ {{doctor.charge}}</span>
                    <h1 class="card-title" style="font-size: x-large;font-style: oblique;font-weight: bolder;">Name : {{doctor.name}}</h1>
                    <p class=" card-text" style="font-size: x-large;font-style: oblique;font-weight: bolder;">Designation : {{doctor.designation}}</p>
                    <label for="rating-inline" style="font-size: x-large;font-style: oblique;font-weight: bolder;">Rating:</label>
                    <star-rating starSize=50 :rating="doctor.rating" :read-only="true"></star-rating>
                    <br />

                </div>
            </div>
        </div>
        <hr style="height:5px; width:100%; border-width:5; color:black; background-color:black">
        <appointmentDate/>
    </div>
</div>
<br />
</template>

<script>
import StarRating from 'vue-star-rating'
import appointmentDate from './appointmentDate.vue'
export default {
    name: "appointmentDetail",
    components: {
        StarRating,
        appointmentDate,
    },
    computed: {
        doctorList() {
            return this.$store.getters.doctorList
        },
        dList() {
            return this.$store.getters.dList
        }
    }
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
