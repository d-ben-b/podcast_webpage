<!-- @format -->

<template>
  <div class="home">
    <h1>Welcome to the Podcast Webpage</h1>
    <p>This is the home page of our podcast website.</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: "Hello, welcome to our podcast!",
      };
    },
  };
</script>

<style scoped>
  .home {
    padding: 20px;
    height: 100vh;
    text-align: center;
    background: #fffacd;
  }

  h1 {
    font-size: 2em;
    color: #333;
  }

  p {
    font-size: 1.2em;
    color: #666;
  }
</style>
