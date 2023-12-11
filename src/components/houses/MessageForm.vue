<script>
import { RouterLink } from "vue-router";
import axios from "axios";
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      banner: false,
      formErrors: {},

      formField: {
        house_id: "",
        email: "",
        name: "",
        text: "",
      },

      messageSent: false,
      success: false,
      loading: false,
      error: {
        message: "",
        state: false,
      },
    };
  },
  props: { houseId: Number },

  methods: {
    sendMessage() {
      //   if (!this.formField.email || !this.formField.name || !this.formField.text)
      //     return;

      this.messageSent = true;
      this.loading = true;
      this.success = false;
      this.error.status = false;

      const data = {
        house_id: this.houseId,
        email: this.formField.email,
        name: this.formField.name,
        text: this.formField.text,
      };

      console.log(data);

      axios
        .post("http://localhost:8000/api/message", {
          params: data,
        })
        .then((response) => {
          console.log(response);
          if (response.data.errors) {
            this.banner = true;
            this.formErrors = response.data.errors;
            console.log(this.formErrors);
          } else {
            this.success = true;
            this.banner = false;
          }
        })
        .catch((error) => {
          this.error.state = true;
          this.error.message = error.message;
        })
        .finally(() => {
          this.loading = false;
          this.formField.email = "";
          this.formField.name = "";
          this.formField.text = "";
        });
    },
  },
};
</script>

<template>
  <!-- {{ console.log(houseId) }} -->
  <div v-if="messageSent && success" class="alert alert-success">
    Messaggio inviato !
  </div>

  <!-- <div v-if="messageSent && loading" class="alert alert-warning">
    Invio in corso
  </div> -->

  <div v-if="messageSent && error.status" class="alert alert-danger">
    {{ error.message }}
  </div>

  <form @submit.prevent="submitForm">
    <div>
      <h5 class="mb-4">invia un messaggio al propietario</h5>
      <div v-if="banner" class="alert alert-danger" role="alert">
        <ul>
          <li v-for="error in formErrors">
            <strong>{{ error[0] }}</strong>
          </li>
        </ul>
      </div>

      <div class="row row-cols-4 flex-column">
        <div class="w-100">
          <label for="formfield-email" class="form-label">E-mail*</label>
          <input
            v-model="formField.email"
            type="email"
            required
            class="form-control"
            id="formfield-email"
            placeholder="Inserisci la tua E-mail"
          />
        </div>
        <div class="my-3 w-100">
          <label for="formfield-name" class="form-label">Nome*</label>
          <input
            v-model="formField.name"
            type="text"
            required
            class="form-control"
            id="formfield-name"
            placeholder="Inserisci il tuo Nome"
          />
        </div>
        <div class="w-100">
          <label for="formfield-message" class="form-label">Messaggio*</label>
          <textarea
            v-model="formField.text"
            class="form-control"
            required
            id="formfield-message"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div class="">
        <button class="btn btn-success my-3" @click="sendMessage()">
          Invia Messaggio
        </button>
        <div class="small fst-italic text-secondary">
          Sono contrassegnati con * i dati obbligatori.
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.small {
  font-size: 14px;
}
</style>
