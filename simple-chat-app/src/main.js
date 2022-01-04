import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// Firebase
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBs9MOT4BD-FdnE1rgWCXz9sC5aM3G8tZE',
  authDomain: 'isjuku-simple-chat-app.firebaseapp.com',
  projectId: 'isjuku-simple-chat-app'
});

Vue.prototype.$firebase = firebase;
Vue.prototype.$auth = firebase.auth();
Vue.prototype.$db = firebase.firestore();

new Vue({
  render: h => h(App)
}).$mount('#app');
