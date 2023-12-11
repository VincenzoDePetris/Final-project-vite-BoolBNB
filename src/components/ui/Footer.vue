<script>
export default {
  data() {
    return {
      currentDateTime: this.getCurrentDateTime(),
    };
  },
  mounted() {
    // SI AGGIORNA OGNI SECONDO
    setInterval(() => {
      this.currentDateTime = this.getCurrentDateTime();
    }, 1000);
  },
  methods: {
    getCurrentDateTime() {
      var currentDate = new Date();
      var anno = currentDate.getFullYear();
      var mese = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      var giorno = currentDate.getDate().toString().padStart(2, "0");
      var ore = currentDate.getHours().toString().padStart(2, "0");
      var minuti = currentDate.getMinutes().toString().padStart(2, "0");
      var secondi = currentDate.getSeconds().toString().padStart(2, "0");

      var dateTimeString =
        anno +
        "-" +
        mese +
        "-" +
        giorno +
        " " +
        ore +
        ":" +
        minuti +
        ":" +
        secondi;
      return dateTimeString;
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Assistenza</h5>
          <ul>
            <li><a href="#">Centro Assistenza</a></li>
            <li><a href="#">Antidiscriminazione</a></li>
            <li><a href="#">Supporto alla disabilità</a></li>
            <li><a href="#">Opzioni di cancellazione</a></li>
            <li><a href="#">Segnala problema nel quartiere</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Ospitare</h5>
          <ul>
            <li><a href="#">Apri un BoolBnb</a></li>
            <li><a href="#">BoolCover per gli host</a></li>
            <li><a href="#">Risorse per gli host</a></li>
            <li><a href="#">Forum della community</a></li>
            <li><a href="#">Ospitare responsabilmente</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>BoolBnb</h5>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Nuove funzionalità</a></li>
            <li><a href="#">Opportunità di lavoro</a></li>
            <li><a href="#">Gift card</a></li>
            <li><a href="#">Soggiorni con BoolBnB.org</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6 text-center">
        <p>
          &copy; 2023 BoolBnb, Inc. | Scegli una valuta: € (EUR) |
          {{ currentDateTime }}
        </p>
      </div>
      <div class="col-md-6 text-center">
        <a class="btn-team" href="http://localhost:5173/Team">Team 6</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
}

.footer h5 {
  color: #343a40;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li a {
  color: #4a266a;
  text-decoration: none;
}

.footer ul li a:hover {
  text-decoration: underline;
  color: #ae85d1;
}

.btn-team {
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  background-color: #4a266a;
  color: whitesmoke;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
}
.btn-team:hover {
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  background-color: #ae85d1;
  color: black;
  padding: 8px 15px;
  border-radius: 20px;
}
</style>
