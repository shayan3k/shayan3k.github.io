<template>
  <main>
    <client-only>
      <FireParticles
        color="#DCBA8F"
        :particles-number="100"
        shape-type="star"
        :particle-size="3"
        movement-direction="top"
        lines-color="#dedede"
        :line-linked="false"
        :move-speed="0.75"
      />
    </client-only>
    <div class="container">
      <div class="imgName">
        <div class="borderCircleParent">
          <SVGAnimation />
          <!-- <svganimation-component></svganimation-component> -->
        </div>
        <div class="textContainer">
          <h1 class="title">Hi, I'm SHAYAN!</h1>
          <div class="introText">
            <p>
              An energetic, imaginative and savvy
              <b class="uppercase">full-stack web developer</b>
            </p>
          </div>
          <div class="mt-5 neonButton_wrapper">
            <a
              :href="this.resume"
              class="neonButton rounded no-underline hover:no-underline"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <font-awesome-icon
                :icon="['fa', 'download']"
                class="neonButton_icon"
              />
              Download Resume
            </a>
          </div>
          <div class="mt-5 neonButtonHTML_wrapper">
            <a
              href="/resume"
              class="neonButtonHTML rounded no-underline hover:no-underline"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <font-awesome-icon
                :icon="['fa', 'code']"
                class="neonButtonHTML_icon"
              />
              HTML version
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  layout: "MainLayout",

  components: {
    "svganimation-component": () => import("@/components/SVGAnimation.vue"),
  },

  head() {
    return {
      title: "SHAYAN MOTALEBI - Home Page",
    };
  },
  data() {
    return {
      resume: "https://shayan3k.github.io/resume.pdf",
    };
  },
});
</script>

<style lang="scss" scoped>
// variables
$first-btn-color: #d49e0a;
$second-btn-color: #9752eb;

main {
  padding: 2rem 1.5rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto !important;
}

.CVButton {
  z-index: 1;
}

.imgName {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}

.headerImage {
  max-width: 20rem;
}

.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-left: 2rem;
}

.introText {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 1.3px;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
}

.card {
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
}

@media (max-width: 800px) {
  .imgName {
    flex-direction: column;
    align-items: center;
  }
  /* .imgName div {
    border: 1px solid red;
  } */
  .headerImage {
    max-width: 13rem;
  }
  .textContainer {
    margin-left: 0;
  }
  .textContainer {
    /* font-weight: 300; */
    font-size: 16px;
  }
  .introText {
    line-height: 20px;
    letter-spacing: 1px;
  }
  .title {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

////////////////
// First Neon Button
////////////////
.neonButton_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  text-align: center;
  flex-direction: column;
}

.neonButton {
  position: absolute;
  display: inline-block;
  padding: 20px 30px;
  margin: 40px 0;
  color: $first-btn-color;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  @media (max-width: 600px) {
    max-width: 300px;
  }
  -webkit-box-reflect: below 10px
    linear-gradient(
      transparent,
      transparent,
      rgba(0, 0, 0, 0.13333333333333333)
    );

  .neonButton_icon {
    path {
      color: $first-btn-color;
    }
  }
}

.neonButton:link,
.neonButton:active {
  color: $first-btn-color;
}
.neonButton:hover {
  background: $first-btn-color;
  color: #050801;
  box-shadow: 0 0 5px $first-btn-color, 0 0 25px $first-btn-color,
    0 0 50px $first-btn-color, 0 0 200px $first-btn-color;

  .neonButton_icon {
    path {
      color: #ffffff;
    }
  }
}
.neonButton span {
  position: absolute;
  display: block;
}

.neonButton span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $first-btn-color);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.neonButton span:nth-child(2) {
  top: -100%;
  right: 0;
  height: 100%;
  width: 2px;
  background: linear-gradient(180deg, transparent, $first-btn-color);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.neonButton span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $first-btn-color);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.neonButton span:nth-child(4) {
  left: 0;
  bottom: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(90deg, transparent, $first-btn-color);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

////////////////
// Second Neon Button
////////////////
.neonButtonHTML_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  text-align: center;
  flex-direction: column;
}

.neonButtonHTML {
  position: absolute;
  display: inline-block;
  padding: 20px 30px;
  margin: 40px 0;
  color: $second-btn-color;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  @media (max-width: 600px) {
    max-width: 300px;
  }
  -webkit-box-reflect: below 10px
    linear-gradient(
      transparent,
      transparent,
      rgba(0, 0, 0, 0.13333333333333333)
    );

  .neonButtonHTML_icon {
    path {
      color: $second-btn-color;
    }
  }
}

.neonButtonHTML:link,
.neonButtonHTML:active {
  color: $second-btn-color;
}
.neonButtonHTML:hover {
  background: $second-btn-color;
  color: #050801;
  box-shadow: 0 0 5px $second-btn-color, 0 0 25px $second-btn-color,
    0 0 50px $second-btn-color, 0 0 200px $second-btn-color;

  .neonButtonHTML_icon {
    path {
      color: #ffffff;
    }
  }
}
.neonButtonHTML span {
  position: absolute;
  display: block;
}

.neonButtonHTML span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $second-btn-color);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.neonButtonHTML span:nth-child(2) {
  top: -100%;
  right: 0;
  height: 100%;
  width: 2px;
  background: linear-gradient(180deg, transparent, $second-btn-color);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.neonButtonHTML span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $second-btn-color);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.neonButtonHTML span:nth-child(4) {
  left: 0;
  bottom: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(90deg, transparent, $second-btn-color);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
