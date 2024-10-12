<!-- @format -->

<template>
  <div class="topnavi">
    <button class="naviButton" @click="activeComp = 'home'">Home</button>
    <button class="naviButton" @click="activeComp = 'about-us'">
      About Us
    </button>
    <button class="naviButton" @click="activeComp = 'podcast'">podcast</button>
  </div>

  <!-- <transition name="page-change" mode="out-in">
    <component :is="activeComp" :key="activeComp" />
  </transition> -->
  <div>hi123</div>
  <component :is="activeComp" :key="activeComp" />
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        activeComp: "home",
      };
    },
  };
</script>

<style scoped>
  template {
    color: #b5226e;
  }
  /* 導航樣式 */
  .topnavi {
    display: flex;
    background-color: #333;
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  .naviButton {
    float: left;
    display: block;
    background-color: black;
    color: #dbd8e3;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font: bold 12px/30px, sans-serif;
  }

  .naviButton:hover {
    background-color: #ddd;
    color: black;
  }
  .page-change-enter-active {
    animation: fadeIn 0.7s;
  }
  .page-change-leave-active {
    animation: fadeIn 0.7s reverse;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
