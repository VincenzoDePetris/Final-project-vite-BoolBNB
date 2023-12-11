<script>
import HouseCard from "./HouseCard.vue";
import axios from "axios";
import { store } from "../../data/store";
import AppLoader from "../AppLoader.vue";

export default {
  data() {
    return {
      houses: [],
      extras: [],

      pagination: {
        links: null,
      },
      isLoading: false,
    };
  },

  components: { HouseCard, AppLoader },

  methods: {
    fetchCards(uri = store.api.baseUrl + "houses") {
      this.isLoading = true;
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          this.houses = response.data.data.map((house) => {
            // Limita la lunghezza della descrizione a 100 caratteri
            house.description =
              house.description.length > 50
                ? house.description.substring(0, 50) + "..."
                : house.description;
            return house;
          });

          this.pagination.links = response.data.links;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchCards();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div class="container my-4">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <!-- Adjust the number of columns based on screen size -->
      <HouseCard v-for="house in houses" :house="house" :key="house.id" />
    </div>
    <nav
      class="my-4"
      aria-label="Page navigation example"
      v-if="pagination.links && pagination.links.length > 3"
    >
      <ul class="pagination justify-content-center">
        <li
          v-for="link in pagination.links"
          :key="link.url"
          @click="fetchCards(link.url)"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
