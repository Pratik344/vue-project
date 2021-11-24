<template>
<div class="box">
    <div class="field">
        <label class="label">First Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="Input First Name" v-model="form.firstName">
        </div>
    </div>
    <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
            <input class="input" type="Last Name" placeholder="Input Last Name" v-model="form.lastName">
        </div>
    </div>
    <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input class="input" type="Email" placeholder="Input Email" v-model="form.email">
        </div>
    </div>
    <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
            <input class="input" type="Phone Number" placeholder="Input Phone Number" v-model="form.phoneNumber">
        </div>
    </div>
    <br />
    <div class="field">
        <label class="label">Date Of Birth</label>
        <div class="control">
            <input type="date" v-model="form.birthDate">
        </div>
    </div>
    <br />
    <span class="is-size-6">
        Skill
    </span>
    <div class="field">
        <div class="control">
            <div class="select">
                <select v-model="form.skill">
                    <option>React</option>
                    <option>Vue</option>
                </select>
            </div>
        </div>
    </div>
    <br />
    <span class="is-size-6">
        Gender
    </span>
    <div class="field mr-auto">
        <div class="radio">
            <label class="Male">
                <input type="radio" name="Male" value="Male" v-model="form.Gender">
                Male
            </label>
            <label class="radio mr-auto">
                <input type="radio" name="FeMale" value="FeMale" v-model="form.Gender">
                FeMale
            </label>
        </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
        <div class="control">
            <button class="button is-link" v-on:click="submitForm()">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Register",
    data() {
        return {

            form: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                birthDate: '',
                skill: '',
                Gender: '',
            }
        }
    },
    methods: {

        async submitForm() {
            // POST request using axios with async/await
            const response = await axios.post("http://localhost:3001/posts",this.form);
            this.from.id = response.data.id;
        }

    }
}
</script>
