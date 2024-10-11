<!-- @format -->

<template>
  <div class="comment-box">
    <textarea v-model="message" placeholder="想說的話..." required></textarea>
    <button @click="$emit('sendMessage', message, $event)">送出</button>
  </div>
</template>

<script>
  export default {
    name: "Textarea",
    data() {
      return {
        message: "",
      };
    },
  };
</script>

<style scoped>
  .comment-box {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平置中 */
    width: 100%;
    margin: 20px auto;
  }

  textarea {
    width: 200px;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px; /* 增加間距以避免和按鈕重疊 */
    resize: none; /* 可選，禁止調整文本框大小 */
  }

  button {
    padding: 10px 20px;
    background-color: #372dc4;
    color: white;
    border-radius: 25px;
    border: none; /* 可選，移除默認邊框 */
    cursor: pointer; /* 可選，增加手型指標效果 */
    z-index: 2;
  }
</style>
