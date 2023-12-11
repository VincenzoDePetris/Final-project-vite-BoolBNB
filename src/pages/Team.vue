<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Marcos Zacarias",
          image: "url_dell_immagine_1.jpg",
          link: "https://github.com/MarcosZacarias?tab=repositories",
        },
        {
          id: 2,
          title: "Stefano Mela",
          image: "url_dell_immagine_2.jpg",
          link: "https://github.com/StefanoMela",
        },
        {
          id: 3,
          title: "Vincenzo de Petris",
          image: "/vincenzo.jpeg",
          link: "https://github.com/VincenzoDePetris?tab=repositories",
        },
        {
          id: 4,
          title: "Alessio Guglielmino",
          image: "/alessio.png",
          link: "https://github.com/AlessioGuglielmino?tab=repositories",
        },
        {
          id: 5,
          title: "Felice Tamburrano",
          image: "url_dell_immagine_5.jpg",
          link: "https://github.com/Catiflam?tab=repositories",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="card-container d-flex">
    <div v-for="card in cards" :key="card.id" class="card">
      <img :src="card.image" alt="Card Image" class="card-image" />
      <a :href="card.link" class="card-link"
        >{{ card.title }} <font-awesome-icon icon="fa-brands fa-github" />
      </a>
    </div>
  </div>
  <div class="d-flex animated flex-column">
    <!-- <img class="w-25" src="public\thats.PNG" alt="" />
    <img class="w-25" src="public\tittyBig.png" alt="" /> -->
    <img class="ufo" src="public\tittyComplete.png" alt="" />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  margin: 16px;
  text-align: center;
  width: 14rem;
}

.card-image {
  height: 200px;
  margin: 0 auto;
  border-radius: 4px;
  margin-bottom: 8px;
}
.fixed-card {
  animation: none;
}
.card-link {
  color: #4a266a;
  text-decoration: none;
  font-weight: bold;
}

.card-link:hover {
  text-decoration: underline;
}

/* ANIMAZIONE */

.animated {
  white-space: nowrap;
  overflow: hidden;
  animation: scroll 12s linear infinite;
}
.ufo {
  width: 300px;
}

/* Definisci l'animazione */
@keyframes scroll {
  0% {
    transform: translateX(-270%);
  }
  100% {
    transform: translateX(300%);
  }
}
</style>
