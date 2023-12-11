<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import { store } from "../../data/store";

export default {
  data() {
    return {
      showDetails: false,
      extras: [],
      store,
      isSearchPage: false,
    };
  },
  props: { house: Object },
  components: { RouterLink },
  computed: {
    userLatitude() {
      return store.addressSearch.latitude; // Ottenere la latitudine dell'utente dallo store
    },
    userLongitude() {
      return store.addressSearch.longitude; // Ottenere la longitudine dell'utente dallo store
    },
  },
  methods: {
    calculateDistance() {
      const houseLatitude = this.house.latitude; // Latitudine della casa
      const houseLongitude = this.house.longitude; // Longitudine della casa

      const userLatitude = store.addressSearch.latitude; // Latitudine dell'utente dallo store
      const userLongitude = store.addressSearch.longitude; // Longitudine dell'utente dallo store

      function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Raggio della Terra in chilometri
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distanza in chilometri
        return distance;
      }

      // Funzione per convertire gradi in radianti
      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }

      const distance = getDistanceFromLatLonInKm(
        houseLatitude,
        houseLongitude,
        userLongitude,
        userLatitude
      );
      console.log(houseLatitude);
      console.log(houseLongitude);
      console.log(userLongitude);
      console.log(userLatitude);

      return distance.toFixed(2); // Restituire la distanza con due cifre decimali
    },
  },
  created() {
    this.isSearchPage = this.$route.name === "search";
    // Fai qualcosa con isSearchPage, come ad esempio impostare una variabile nel data
    if (this.isSearchPage) {
      this.isSearchPage = true;
    }
  },
};
</script>

<template>
  <div class="col">
    <div
      class="card justify-content-between border-0 position-relative"
      @mouseover="showDetails = true"
      @mouseleave="showDetails = false"
    >
      <router-link
        :to="{ name: 'house-detail', params: { id: house.id } }"
        class="to-detail"
      >
        <img
          :src="
            house.cover_image ==
            'http://localhost:8000/storage/https://placehold.co/600x400'
              ? 'https://placehold.co/600x400'
              : house.cover_image
          "
          class="card-img-top rounded-4"
          alt="..."
        />
        <h4 class="card-title mt-2">{{ house.title }}</h4>
        <p>
          {{ house.description }}
        </p>
        <div v-if="isSearchPage">
          <p>Distanza: {{ calculateDistance() }} km</p>
        </div>

        <div class="filters d-lg-flex">
          <ul class="d-flex fs-5">
            <li class="mx-2 extras">
              <div>
                <font-awesome-icon icon="fa-solid fa-bed" />
              </div>
              <div>
                {{ house.beds }}
              </div>
            </li>
            <li class="mx-2 extras">
              <font-awesome-icon icon="fa-solid fa-couch" /> {{ house.rooms }}
            </li>
            <li class="mx-2 extras">
              <font-awesome-icon :icon="['fas', 'bath']" />
              {{ house.bathrooms }}
            </li>
          </ul>

          <ul
            class="d-flex flex-wrap extra-list justify-content-end align-items-start"
          >
            <li
              class="mx-1 badge my-2 extras"
              v-for="extra in house.extras"
              :style="{ backgroundColor: extra.color }"
            >
              <font-awesome-icon :icon="extra.icon_vue" />
            </li>
            <!-- <li
            class="mx-1 badge"
            v-for="extra in house.extras"
            :style="{ color: extra.color }"
            >
            <font-awesome-icon :icon="extra.icon_vue" />
            </li> -->
          </ul>
        </div>
        <!-- <div class="card-overlay" v-show="showDetails">
          <transition name="fade">
            <p class="card-text">{{ house.description }}</p>
          </transition> -->
        <!-- codice per aggiungere bottone -->
        <!-- <transition name="slide-fade">
            <router-link
              :to="{ name: 'house-detail', params: { id: house.id } }"
              class="btn"
            >
              Vedi il dettaglio
            </router-link>
          </transition> -->
        <!-- </div> -->
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 250px;
}

.to-detail {
  color: black;
  text-decoration: none;
}

.btn {
  background-color: #ff385c;
  color: white;
}

.extras {
  width: 20%;
}

.extra-list {
  width: 50%;
}

.filters {
  display: none;
  justify-content: space-between;
}
.card-overlay {
  max-height: 100%;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
  transition: opacity 0.5s ease;
  opacity: 0;
  width: 100%;
}

.card-overlay h4 {
  margin-bottom: 10px;
}

.card-overlay p {
  margin-bottom: 15px;
}

.card-overlay:hover {
  opacity: 1;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
