<!-- @format -->

<template>
  <div class="about-us">
    <h1>About Us</h1>
    <h2>團隊成員介紹</h2>
    <div class="carousel">
      <div
        class="carousel__inner"
        :style="{ transform: `rotateY(${angle}deg)` }">
        <div
          v-for="(person, index) in team"
          :key="person.name"
          class="carousel__item">
          <Profile
            :picture_url="person.picture_url"
            :name="person.name"
            :desc="person.desc" />
        </div>
      </div>
      <!-- 控制按鈕 -->
      <button @click="rotateCarousel(1)" class="control_button left"><</button>
      <button @click="rotateCarousel(-1)" class="control_button right">
        >
      </button>
    </div>
    <p>
      我們的Podcast團隊來自成大，成員背景多樣，擁有不同的專長與興趣，但我們都為了共同的目標努力——藉由Podcast的方式，讓更多人對大學有更深入的了解——這也是我們的核心理念。在大學期間，我們發現校園中有許多好玩、有趣且充滿挑戰性的事物，但並非每位學生都能掌握這些資訊或有機會參與其中。資訊的缺乏和經驗傳遞的斷層，常讓學生在學業、社團、打工和生活規劃等方面感到困惑或錯失機會。
      我們相信這個專案能幫助學生輕鬆找到所需的資源和資訊，將精力集中在更有意義的活動上，如參加社團、探索興趣或發展學業，從而在大學生活中更加主動積極，為未來職涯奠定堅實的基礎。藉由這些努力，我們希望讓大學的每一天都成為學生成長探索的精彩旅程。
    </p>
    <p>
      我們提出這個計畫，源自於對Podcast的熱愛和分享經驗的熱心。敬堯對Podcast充滿興趣，推動我們探索這個領域的潛力；鈺蘋希望透過分享學習與生活經驗來幫助更多同學；而紹銘則希望在多媒體的實作中累積經驗，在軟體應用上充實自己。
      我們的核心理念在於「縮小資訊不對等的差距」，致力於資源透明化。許多高中生在進入大學後，因為缺乏取得資訊的途徑，容易陷入舒適圈中，難以突破。這並非因為他們缺乏意願，而是因為缺少適當的指引和啟發。因此，我們希望透過經驗分享，讓年輕人更了解學業、社團、打工、旅遊等各類資訊，激勵他們勇於探索未來的可能性，創造一個平等且友善的學習環境，促進青年心靈的成長。
      在大學期間，我們發現資訊搜尋困難，學生間的經驗傳承也逐漸斷裂。許多新生對於所讀科系缺乏深入了解，不清楚未來的發展方向，甚至對學校的資源知之甚少。這些資訊的流通經常依賴人際關係，導致資訊傳遞不均，部分重要訊息可能只掌握在少數人手中。
      為了縮短這個資訊差距，我們計劃透過Podcast來改變現狀。我們將收集並分享與大學生生活息息相關的內容，幫助每位學生輕鬆獲取有用的資訊，無需再為尋找資源而煩惱。希望藉此不僅讓資訊更公平地傳播，也讓學生擁有同等的機會探索未來的可能性，找到屬於自己的方向和價值。
    </p>
  </div>
</template>

<script>
  import Profile from "./Profile.vue";

  export default {
    name: "AboutUs",
    components: {
      Profile,
    },
    data() {
      return {
        angle: 0, // 旋轉角度
        team: [
          {
            picture_url: "https://via.placeholder.com/100",
            name: "阮紹銘",
            desc: "成大電機系大四的學生，對網頁開發和影片剪輯有著濃厚的興趣。參與這個計畫讓我有機會提升技能，同時能在實際項目中磨練自己。對於Podcast，我特別希望能多邀請業界講師，分享他們在職場中的經驗與故事，讓我們的聽眾更深入了解未來的職涯方向。",
          },
          {
            picture_url: "https://via.placeholder.com/100",
            name: "林敬堯",
            desc: "來自成大機械大三。平時最愛聽Podcast，看看不同人的生活經歷或是輕鬆有趣的聊天主題。大學裡我深感搜尋和驗證大學資料的辛苦和麻煩，工程系的背景給了我解決問題的動力和想法。我相信成大學生的精力和心思有更有價值的發揮方式，而不是白白被設計不良的網站和模糊資料說明耽誤，藉由聽Podcast的方式尋找學校資訊不再麻煩而痛苦。",
          },
          {
            picture_url: "https://via.placeholder.com/100",
            name: "曾鈺蘋",
            desc: "我是成大電機系大四的曾鈺蘋，動機是希望以有趣的方式分享新知給青年。我喜歡挑戰自我，經常踏出舒適圈，活潑的個性讓我結識許多朋友，並激發出不同的創新想法。在這次計畫中，我負責蒐集資訊並擔任串流平台的主持以及公關，確保活動順利推展。",
          },
        ],
      };
    },
    methods: {
      rotateCarousel(direction) {
        const totalItems = this.team.length;
        const rotateAngle = 360 / totalItems; // 每個圖片的旋轉角度
        this.angle += direction * rotateAngle; // 更新旋轉角度
      },
    },
  };
</script>

<style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 600px;
    perspective: 1000px; /* 給3D效果一個視角深度 */
    margin: 0 auto;
    overflow: hidden;
  }

  .carousel__inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d; /* 保持3D轉換 */
    transition: transform 1s ease;
  }

  .carousel__item {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden; /* 隱藏背面 */
    transform-origin: center;
    border-radius: 10px; /* 圓角邊框 */
    background-color: #fffacd; /* 背景色：白色 */
  }

  .carousel__item:nth-child(1) {
    transform: rotateY(0deg) translateZ(300px); /* 將圖片1放置在正面 */
  }

  .carousel__item:nth-child(2) {
    transform: rotateY(120deg) translateZ(300px); /* 圓柱體上第二張圖片 */
  }

  .carousel__item:nth-child(3) {
    transform: rotateY(240deg) translateZ(300px); /* 圓柱體上第三張圖片 */
  }

  .control_button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ffb96d;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 16px;
    z-index: 5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 輕微陰影 */
  }

  .left {
    left: 10px;
  }

  .right {
    right: 10px;
  }
  .about-us {
    padding: 20px;
    text-align: center;
    background: #fffacd;
  }
  .about-us h2 {
    font-size: 1.5em;
  }
  .about-us h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .about-us p {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .control_button:hover {
    background-color: #d94a38; /* 按鈕 hover 效果：深橘紅色 */
  }
</style>
