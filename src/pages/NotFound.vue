<script>
export default {
  data() {
    return {
      title: "404",
    };
  },
};
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center text-center"
  >
    <div class="d-flex flex-column justify-content-center">
      <h1 class="my5">{{ title }}</h1>
      <router-link :to="{ name: 'homepage' }">
        <button type="button" class="btn btn-primary">
          Torna alla homepage
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 600px;
}
</style>
