<template>
<section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 class="font">Login</h1>

                    <form action="" class="box" onsubmit="return false">
                        <div class="field">
                            <label for="" class="label">Email</label>
                            <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" v-model="loginForm.email" required />
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Password</label>
                            <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" v-model="loginForm.password" required />
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="checkbox">
                                <input type="checkbox" required v-model="loginForm.checkBox" v-on:click="checkCheckbox()" />
                                Privacy & Polices
                            </label>
                        </div>
                        <div class="field">
                            <button class="button is-success" v-on:click="checkLogin()">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                email: "",
                password: "",
                checkBox: false,
            }
        }
    },
    methods: {
        checkLogin() {
            console.log(this.loginForm.checkBox)
            if (this.loginForm.email === 'demo@gmail.com' && this.loginForm.password === '12345' && this.loginForm.checkBox === true || this.loginForm.email === 'samcom@gmail.com' && this.loginForm.password === '123' && this.loginForm.checkBox === true || this.loginForm.email === 'samcomtechnobrains@gmail.com' && this.loginForm.password === 'sam123@' && this.loginForm.checkBox === true) {
                // console.log("Login Successfully")
                localStorage.setItem("email", this.loginForm.email);
                console.log('localStorage: ', localStorage);
                Swal.fire(
                    'Good job!',
                    'Login Successfully',
                    
                )

            } else {
                localStorage.removeItem("email");
                console.log('localStorage: ', localStorage);
                Swal.fire(
                    'Error!',
                    'Login Failed',
                )
            }

        },
        checkCheckbox() {
            if (this.loginForm.checkBox === false) {
                Swal.fire(
                    'Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.',
                    '1. YOUR AGREEMENT By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.',
                )
            }
        }
    }
};
</script>

<style scoped>
.font {
    font-size: xx-large;
    padding-bottom: 5px;
}

body {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
