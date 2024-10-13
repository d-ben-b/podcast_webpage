<!-- @format -->

<template>
  <div class="profile-container">
    <img :src="picture_url" alt="" class="profile-image" />
    <div class="profile-info">
      <h3>{{ name }}</h3>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: {
      picture_url: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .profile-container {
    display: flex;
    border: 5px solid #ffffff; /* 邊框樣式 */
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 陰影效果 */
    text-align: center;
    width: 60%; /* 根據需要調整寬度 */
    height: 250px; /* 根據需要調整高度 */
    background: #ffc196;
  }

  .profile-image {
    width: 150px;
    border-radius: 10px; /* 圖片的圓角效果 */
    margin-bottom: 10px;
    margin-right: 15px;
  }
  .profile-info h3 {
    font-size: 1.2em;
    margin-top: 15px;
    color: #6b4226;
  }

  .profile-info p {
    color: #6b4226;
    font-size: 1em;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "Noto Sans CJK TC", monospace;
  }
</style>
