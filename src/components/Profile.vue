<!-- @format -->

<template>
  <div class="container" v-show="true">
    <img :src="picture_url" alt="" />
    <div class="name">{{ name }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: {
      picture_url: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/150",
      },
      desc: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  };
</script>
