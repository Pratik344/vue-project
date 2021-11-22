<template>
<Navbar/>
<Login/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Login,
  }
}
</script>


