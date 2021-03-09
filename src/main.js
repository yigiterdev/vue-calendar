import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(VueTextareaAutosize);
firebase.initializeApp({
  apiKey: "AIzaSyCr7zAy7Y-RbxEH_xSSJOqy-uhQcxyAyB0",
  authDomain: "vue-calender-cbe54.firebaseapp.com",
  databaseURL: "https://vue-calender-cbe54-default-rtdb.firebaseio.com",
  projectId: "vue-calender-cbe54",
  storageBucket: "vue-calender-cbe54.appspot.com",
  messagingSenderId: "256418914062",
  appId: "1:256418914062:web:f88b0d5a604c1ed9e6c15f",
});
export const db = firebase.firestore();
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
