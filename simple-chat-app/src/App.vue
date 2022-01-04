<template>
  <div id="app">
    <b-container>
      <h1 class="title my-3">簡易チャットアプリ</h1>
      <b-row v-if="user">
        <b-col class="mb-3" cols="12" md="8">
          <chat-logs :messages="messages"></chat-logs>
        </b-col>
        <b-col class="mb-3" cols="12" md="4">
          <chat-form @logout="logout" @sendMessage="sendMessage" :user="user"></chat-form>
        </b-col>
      </b-row>
      <p v-else class="login-button">
        <b-button @click="login" variant="outline-primary">ログイン</b-button>
      </p>
    </b-container>
  </div>
</template>

<script>
import ChatForm from "./components/ChatForm.vue";
import ChatLogs from "./components/ChatLogs.vue";

export default {
  name: "app",
  components: {
    ChatForm,
    ChatLogs
  },
  data() {
    return {
      user: null,
      messages: []
    };
  },
  methods: {
    login() {
      let provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$auth.signInWithPopup(provider).then(() => {});
    },
    logout() {
      this.$auth.signOut();
    },
    sendMessage(edittingMessage) {
      const user = this.$auth.currentUser;
      const data = {
        userId: user.uid,
        userName: user.displayName,
        userPhotoURL: user.photoURL,
        text: edittingMessage,
        createdAt: new Date()
      };
      this.$db
        .collection("messages")
        .add(data)
        .then(() => {});
    }
  },
  mounted() {
    this.$auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
    this.$db
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot(querySnapshot => {
        this.messages = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          this.messages.push(data);
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 3rem;
}
.login-button {
  margin: 10px;
  text-align: center;
}
</style>
