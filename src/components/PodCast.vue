<!-- @format -->

<template>
  <div class="podcast" @mousemove="handleMouseMove" :style="podcastStyle">
    <h1>Podcast Title</h1>
    <p>Description of the podcast.</p>
    <transition name="fade" mode="out-in">
      <component :is="currentComponent" @sendMessage="handleSendMessage" />
    </transition>
    <PaperPlane
      v-if="showPaperPlane"
      :class="{ shrink: isShrinking }"
      :style="paperPlaneStyle" />
    <!-- 信箱圖標 -->
    <div ref="mailbox" class="mailbox">
      <img src="/mailbox-icon.png" alt="Mailbox" />
    </div>
  </div>
</template>

<script>
  import Textarea from "./TextArea.vue";
  import PaperPlane from "./PaperPlane.vue";

  export default {
    name: "Podcast",
    components: {
      Textarea,
      PaperPlane,
    },
    data() {
      return {
        currentComponent: "Textarea",
        showPaperPlane: false,
        isShrinking: false,
        paperPlaneStyle: {
          position: "absolute",
          left: "0px",
          top: "0px",
          transition: "transform 0.5s",
          zIndex: 3,
        },
        paperPlaneSize: {
          width: 80,
          height: 80,
        },
        podcastStyle: {
          backgroundColor: "#FFFACD",
          textAlign: "center",
          margin: "0",
          minHeight: "100vh",
          height: "auto",
          zIndex: 1,
          transition: "background-color 0.5s ease",
          padding: "20px",
        },
      };
    },
    methods: {
      handleSendMessage(message, event) {
        this.currentComponent = ""; // 切換到 PaperPlane 組件
        this.showPaperPlane = true; // 顯示紙飛機

        // 設置紙飛機初始位置為滑鼠當前的位置，使紙飛機的中心對齊滑鼠
        this.paperPlaneStyle.left = `${
          event.clientX - this.paperPlaneSize.width / 2
        }px`;
        this.paperPlaneStyle.top = `${
          event.clientY - this.paperPlaneSize.height / 2
        }px`;
        this.podcastStyle.backgroundColor = "#FFE4B5";
      },
      handleMouseMove(event) {
        if (this.showPaperPlane && this.paperPlaneSize) {
          // 更新紙飛機位置，使其中心對齊滑鼠位置
          this.paperPlaneStyle.left = `${
            event.clientX - this.paperPlaneSize.width / 2
          }px`;
          this.paperPlaneStyle.top = `${
            event.clientY - this.paperPlaneSize.height / 2
          }px`;
          this.checkIfNearMailbox(event.clientX, event.clientY);
        }
      },
      checkIfNearMailbox(mouseX, mouseY) {
        const mailbox = this.$refs.mailbox;
        if (mailbox) {
          const rect = mailbox.getBoundingClientRect();
          const mailboxCenterX = rect.left + rect.width / 2;
          const mailboxCenterY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(mouseX - mailboxCenterX, 2) +
              Math.pow(mouseY - mailboxCenterY, 2)
          );
          if (distance < 50) {
            // 如果飛機靠近信箱，則觸發投遞
            this.deliverPaperPlane();
            this.podcastStyle.backgroundColor = "#FFFACD"; // 回到原始背景色
          }
        }
      },
      deliverPaperPlane() {
        this.isShrinking = true; // 啟動縮小動畫
        setTimeout(() => {
          this.showPaperPlane = false; // 隱藏紙飛機
          this.isShrinking = false; // 重置縮小狀態
          this.currentComponent = "Textarea"; // 回到 Textarea
        }, 500); // 動畫結束後回到 Textarea
      },
    },
  };
</script>

<style scoped>
  /* 信箱樣式 */
  .mailbox {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  /* 縮小動畫 */
  .shrink {
    animation: shrink 0.5s forwards;
  }

  @keyframes shrink {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(0);
      opacity: 0;
    }
  }

  .fade-enter-active {
    animation: fadeIn 0.7s;
  }

  .fade-leave-active {
    animation: fadeIn 0.7s reverse;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      rotate: 0;
    }

    to {
      opacity: 1;
      rotate: 360deg;
    }
  }
</style>
