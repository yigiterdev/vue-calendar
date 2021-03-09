import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(VueTextareaAutosize);
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: "vue-calender-cbe54",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});
export const db = firebase.firestore();
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
