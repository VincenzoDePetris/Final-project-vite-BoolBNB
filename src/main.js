import App from "./App.vue";
import "./assets/scss/style.scss";

// IMPORT ROUTER
import { router } from "./router";

// IMPORT BOOTSTRAP
import * as bootstrap from "bootstrap";

// IMPORT FONTAWSOME
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

// import loader
import AppLoader from "./components/AppLoader.vue";
import { createApp } from "vue";

library.add(
  faUserSecret,
  faKitchenSet,
  faWifi,
  faSeedling,
  faSquareParking,
  faTv,
  faPersonSwimming,
  faWind,
  faWater,
  faToilet,
  faBath,
  faCouch,
  faBed,
  faSpinner,
  faGithub,
  faCarSide
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("AppLoader", AppLoader)
  .mount("#app");
