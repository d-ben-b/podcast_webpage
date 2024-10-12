<!-- @format -->

<template>
  <div class="about-us">
    <h1>About Us</h1>
    <div class="slideshow-container">
      <button @click="slideshow">Hit me</button>
      <TransitionGroup name="switch" tag="div">
        <profile
          v-for="(person, index) in team"
          :key="person.name"
          :picture_url="person.picture_url"
          :name="person.name"
          :desc="person.desc"
          class="slide"
          :class="{ active: currentIndex === index }"></profile>
      </TransitionGroup>
    </div>

    <p>
      Welcome to our podcast webpage! We are passionate about bringing you the
      best content.
    </p>
    <p>
      Our team consists of experienced podcasters who love to share their
      knowledge and insights on various topics.
    </p>
    <p></p>
  </div>
</template>

<script>
  import profile from "./Profile.vue";
  export default {
    name: "AboutUs",
    components: {
      profile: profile,
    },
    data() {
      return {
        currentIndex: 0,
        team: [
          {
            picture_url: "https://via.placeholder.com/100",
            name: "Podcast Team",
            desc: "We are passionate about bringing you the best content.",
          },
          {
            picture_url: "https://via.placeholder.com/110",
            name: "Podcast Team",
            desc: "We are passionate about bringing you the best content.",
          },
          {
            picture_url: "https://via.placeholder.com/120",
            name: "Podcast Team",
            desc: "We are passionate about bringing you the best content.",
          },
        ],
      };
    },
    methods() {
      return {
        slideshow() {
          this.currentIndex = (this.currentIndex + 1) % this.team.length;
          console.log(this.currentIndex);
        },
      };
    },
  };
</script>

<style scoped>
  .slideshow-container {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 200px;
  }

  .slide {
    min-width: 100%;
    transition: transform 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  .slide.active {
    opacity: 1;
    position: relative;
  }
  .section {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: mandatory;
    width: 100%;
  }
  .section__item {
    scroll-snap-align: start;
    width: 100%;
    background: #2ab020;
  }
  .about-us {
    padding: 20px;
    text-align: center;
  }

  .about-us h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .about-us p {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
</style>
