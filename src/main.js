import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

// Import Font Awesome stuff
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser, faMarker, faList, faExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// datepicker
import VueDatePicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

// Add icons to the library
library.add(faUser, faMarker, faList, faExclamation)

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component("VueDatePicker", VueDatePicker)

app.use(createPinia())
app.use(router)

app.mount("#app")
