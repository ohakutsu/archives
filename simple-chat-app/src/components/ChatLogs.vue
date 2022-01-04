<template>
  <section class="chat-logs">
    <div class="chat-logs__items">
      <div class="chat-logs__items-item mb-1" v-for="(message, index) in messages" :key="index">
        <p class="mb-0">
          <img class="chat-logs__items-item_img" :src="message.userPhotoURL" />
          <span class="chat-logs__items-item_username">{{ message.userName }}</span>
        </p>
        <p class="chat-logs__items-item_text mb-0">{{ message.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChatLogs",
  props: {
    messages: Array
  }
};
</script>

<style lang="scss" scoped>
.chat-logs__items {
  padding: 10px;
  height: 400px;
  overflow: auto;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.chat-logs__items-item {
  .chat-logs__items-item_img {
    width: 15px;
  }
  .chat-logs__items-item_username {
    margin-left: 5px;
    color: #808080;
  }
  .chat-logs__items-item_text {
    padding: 3px 10px;
    display: inline-block;
    background-color: lightblue;
    border-radius: 10px;
    font-size: 1.2rem;
  }
}
</style>