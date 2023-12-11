<script>
import HouseFeaturedList from "../components/houses/HouseFeaturedList.vue";

export default {
  components: { HouseFeaturedList },
};
</script>

<template>
  <h1>Cerca qui la tua casa dei sogni!</h1>
  <h3>Case in evidenza</h3>

  <HouseFeaturedList />
</template>

<style lang="scss" scoped>
h3 {
  margin: 1.5rem 0;
}
</style>
