<script>
import HouseCard from "./HouseCard.vue";
import MessageForm from "./MessageForm.vue";
import axios from "axios";
import { store } from "../../data/store";
import AppLoader from "../AppLoader.vue";

export default {
  data() {
    return {
      house: {},
      extras: {},
      gallery: [],
      map: null,
      marker: null,
      error: {
        hasError: false,
        message: "",
      },
      isLoading: false,
    };
  },

  components: { HouseCard, MessageForm, AppLoader },

  methods: {
    fetchDetail(uri = store.api.baseUrl + "houses/") {
      this.isLoading = true;
      axios
        .get(uri + this.$route.params.id)
        .then((response) => {
          console.log(response);
          this.house = response.data;
          this.extras = response.data.extras;
          this.gallery = response.data.galleries;
          console.log(this.gallery);

          // Inizializzazione della mappa TomTom
          this.initMap();
        })
        // controllo degli errori
        .catch((error) => {
          this.$router.push({ name: "not-found" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // funzione che importa la mappa
    initMap() {
      const mapContainer = this.$refs.mapContainer;

      this.map = tt.map({
        key: "0rTLHeC6A9vwS6HFMZTV1xEuCF56dTTt",
        container: mapContainer,
        style: "tomtom://vector/1/basic-main",
        center: [
          parseFloat(this.house.longitude),
          parseFloat(this.house.latitude),
        ],
        zoom: 13,
      });
    },
  },

  computed: {
    descriptionChunks() {
      const description = this.house.description || "";
      const chunkSize = 100;

      // Use a regular expression to match every 50 characters
      const regex = new RegExp(`.{1,${chunkSize}}`, "g");

      // Split the description into chunks
      return description.match(regex) || [];
    },
  },

  created() {
    this.fetchDetail();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div class="container fluid">
    <h1 class="my-4">{{ house.title }}</h1>
    <div class="p-4 mt-2">
      <div class="row">
        <div class="col-md-12">
          <img :src="house.cover_image" alt="" class="img-fluid rounded-4" />
        </div>
      </div>
    </div>

    <h3>Galleria:</h3>
    <div class="gallery_container row gap-2 row-cols-1 row-cols-lg-4 g-lg-3">
      <div v-for="images in gallery" class="img-container col">
        <img
          :src="'http://localhost:8000/storage/' + images.image"
          class="img-thumbnail rounded-4"
          alt=""
        />
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <div class="">
        <div class="fs-4 my-3 text-truncate">
          <strong>Descrizione:</strong>

          <p class="description">
            <span v-for="chunk in descriptionChunks" :key="chunk"
              >{{ chunk }}<br
            /></span>
          </p>
        </div>
        <div class="fs-5">
          <b>Proprietario:</b>
          {{ house.user && house.user.name }}
          {{ house.user && house.user.last_name }}
        </div>
        <div class="fs-5"><b>Indirizzo:</b> {{ house.address }}</div>
      </div>
    </div>

    <div class="row mt-5">
      <h3>Dettaglio Appartamento:</h3>
      <div class="col-6">
        <div class="fs-5"><b>Numero di stanze:</b> {{ house.rooms }}</div>
        <div class="fs-5"><b>Metri quadri:</b> {{ house.sq_meters }}</div>
        <div class="fs-5"><b>Numero di letti:</b> {{ house.beds }}</div>
        <div class="fs-5"><b>Numero di bagni:</b> {{ house.bathrooms }}</div>
      </div>
    </div>

    <div class="row my-5">
      <h3>Servizi Aggiuntivi:</h3>
      <div class="col-12 flex-wrap d-flex mt-3">
        <div
          v-for="extra in extras"
          class="d-flex flex-column mt-3 align-items-center"
        >
          <div class=""><font-awesome-icon :icon="extra.icon_vue" /></div>
          <div class="col-12 mx-4 text-center">
            <span class="badge" :style="{ backgroundColor: extra.color }">{{
              extra.name
            }}</span>
          </div>
        </div>
      </div>
      <div class="">
        <!-- Mappa incorporata -->
        <div ref="mapContainer" class="map-container"></div>
      </div>
    </div>
    <div class="col-12 mt-3 border rounded-4 p-2">
      <MessageForm :houseId="house.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.description {
  max-width: 100%;
  white-space: pre-line;
}

.map-container {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  position: relative;
}

.img-container > img {
  max-height: 90%;
  width: 100%;
  padding: 0;
}
</style>
