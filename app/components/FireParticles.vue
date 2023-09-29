<template>
  <div
    :id="id"
    class="particles-js"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :movementDirection="movementDirection"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
/* eslint-disable */

export default {
  props: {
    color: {
      type: String,
      default: "#dedede",
    },
    particleOpacity: {
      type: Number,
      default: 1.0,
    },
    particlesNumber: {
      type: Number,
      default: 80,
    },
    shapeType: {
      type: String,
      default: "circle",
    },
    particleSize: {
      type: Number,
      default: 4,
    },
    linesColor: {
      type: String,
      default: "#dedede",
    },
    linesWidth: {
      type: Number,
      default: 1,
    },
    lineLinked: {
      type: Boolean,
      default: true,
    },
    lineOpacity: {
      type: Number,
      default: 0.4,
    },
    linesDistance: {
      type: Number,
      default: 150,
    },
    moveSpeed: {
      type: Number,
      default: 3,
    },
    movementDirection: {
      type: String,
      default: "bottom-left",
    },
    hoverEffect: {
      type: Boolean,
      default: false,
    },
    hoverMode: {
      type: String,
      default: "grab",
    },
    clickEffect: {
      type: Boolean,
      default: false,
    },
    clickMode: {
      type: String,
      default: "push",
    },
  },
  data() {
    return {
      id: "particles-instance-" + Math.floor(Math.random() * 5000),
    };
  },
  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticleJS(
        this.color,
        this.particleOpacity,
        this.particlesNumber,
        this.shapeType,
        this.particleSize,
        this.linesColor,
        this.linesWidth,
        this.lineLinked,
        this.lineOpacity,
        this.linesDistance,
        this.moveSpeed,
        this.movementDirection,
        this.hoverEffect,
        this.hoverMode,
        this.clickEffect,
        this.clickMode
      );
    });
  },
  methods: {
    initParticleJS(
      color,
      particleOpacity,
      particlesNumber,
      shapeType,
      particleSize,
      linesColor,
      linesWidth,
      lineLinked,
      lineOpacity,
      linesDistance,
      moveSpeed,
      movementDirection,
      hoverEffect,
      hoverMode,
      clickEffect,
      clickMode
    ) {
      particlesJS(this.id, {
        particles: {
          number: { value: 400, density: { enable: true, value_area: 3000 } },
          color: { value: "#f8c543" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 3 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 2,
            random: true,
            anim: { enable: true, speed: 5, size_min: 0, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 7.8914764163227265,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "bubble" },
            onclick: { enable: false, mode: "repulse" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #160001;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

div[id^="particles-instance-"] {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: -1 !important;
}
</style>
