# Vue Calendar
I made this project to learn Vue. This project includes Vue, Firebase, Vuetify. original version of the [project](https://github.com/jsfanatik/vuestacks-calendar-vue-firebase)

### You can look at original version of project made by [jsfanatik](https://github.com/jsfanatik/vuestacks-calendar-vue-firebase)
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
### Setting Up Firebase

1. Set up a new project in Firebase with Database enabled.
2. Implement the following Firebase SDK scripts in main.js:

```
import firebase from "firebase";
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();
```

