<script>
import NavbarUi from "./components/ui/NavbarUi.vue";
import Footer from "./components/ui/Footer.vue";
import { RouterView } from "vue-router";

export default {
  components: { NavbarUi, RouterView, Footer },
};
</script>

<template>
  <NavbarUi />
  <div class="container my-4 d-flex flex-column align-items-center">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<style></style>
