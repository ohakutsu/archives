<template>
  <section class="chat-form">
    <div class="chat-form__user mb-4">
      <p class="mb-1">
        <img class="chat-form__user_img" :src="user.photoURL" />
        <span class="chat-form__user_name">{{ user.displayName }}</span>
      </p>
      <b-button variant="outline-warning" @click="$emit('logout')">ログアウト</b-button>
    </div>
    <b-form-textarea class="mb-2" v-model="edittingMessage" placeholder="メッセージを入力" rows="4"></b-form-textarea>
    <b-button class="chat-form__send-button" @click="clickSendButton" variant="outline-primary">送信</b-button>
  </section>
</template>

<script>
export default {
  name: "ChatForm",
  props: {
    user: Object
  },
  data() {
    return {
      edittingMessage: ""
    };
  },
  methods: {
    clickSendButton() {
      if (this.edittingMessage !== "") {
        this.$emit("sendMessage", this.edittingMessage);
        this.edittingMessage = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-form {
  .chat-form__user {
    .chat-form__user_img {
      width: 30px;
    }
    .chat-form__user_name {
      margin-left: 10px;
    }
  }

  .chat-form__send-button {
    width: 100%;
  }
}
</style>
