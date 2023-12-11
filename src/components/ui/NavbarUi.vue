<script>
import SearchBox from "./SerchBoxUi.vue";

export default {
  data() {
    return {};
  },
  components: { SearchBox },
  methods: {},
};
</script>

<template>
  <nav class="navbar bg-light py-4">
    <div class="container-fluid position-relative">
      <a class="navbar-brand" href="http://localhost:5173/">
        <img src="public\NavLog.png" alt="" class="logo" />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <SearchBox />
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse position-absolute user"
        id="navbarNav"
      >
        <!-- Sposta il dropdown sotto al bottone del toggle -->
        <ul class="navbar-nav">
          <div
            class="nav-link drop-link"
            aria-labelledby="navbarDropdown"
            id="navbarDropdown"
          >
            <a class="dropdown-item mb-2" href="http://localhost:5173/"
              >HomePage</a
            >
            <a class="dropdown-item mb-2" href="http://localhost:8000/login"
              >Login</a
            >
            <a class="dropdown-item" href="http://localhost:8000/register"
              >Register</a
            >
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.user {
  right: 10px;
  top: 60px;
}
.drop-link {
  background-color: whitesmoke;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 5px 10px 15px 3px #4a266a;
}
.logo {
  @media screen and (min-width: 100px) {
    width: 140px;
  }
  @media screen and (min-width: 600px) {
    width: 150px;
  }
  @media screen and (min-width: 740px) {
    width: 200px;
  }
  @media screen and (min-width: 800px) {
    width: 300px;
  }
}
.btn-cerca {
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  background-color: #4a266a;
  color: whitesmoke;
  padding: 8px 15px;
  border-radius: 20px;
}
.btn-cerca:hover {
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  background-color: #ae85d1;
  color: black;
  padding: 8px 15px;
  border-radius: 20px;
}
</style>
