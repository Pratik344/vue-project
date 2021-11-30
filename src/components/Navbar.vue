<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <router-link to="/Display" class="navbar-item">
                Home
            </router-link>

            <router-link to="/itemList" class="navbar-item">
                Shopping Cart
            </router-link>

            <router-link to="/appointment" class="navbar-item">
                Appointment
            </router-link>

            <!-- <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div> -->
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <router-link to="/Register" class="button is-primary">
                        <strong>Sign up</strong>
                    </router-link>
                    <a to="/Register" class="button is-light" v-on:click="logout()">
                        Log Out
                    </a>
                    <router-link to="/Login" class="button is-light">
                        Log in
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: "Navbar",
    methods: {
        logout() {
            localStorage.clear();
            // console.log(localStorage);
            Swal.fire(
                    'Error!',
                    'Please Login First',
                ),
                this.$router.push('/Login');

        }
    }
};
</script>
