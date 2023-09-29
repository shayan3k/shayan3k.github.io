<template>
  <main class="main">
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

    <div>
      <div class="contact mt-5">
        <a :href="'mailto:' + this.email" class="links">
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="padding-right: 0.5rem; fill: #f0bb75"
          >
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
            ></path>
          </svg>
          <h4 class="headingSm">{{ this.email }}</h4></a
        ><a :href="'tel:' + this.phone_number" class="links"
          ><svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="padding-right: 0.5rem; fill: #f0bb75"
          >
            <path
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            ></path>
          </svg>
          <h4 class="headingSm forIconText">{{ this.phone_number }}</h4></a
        ><a :href="this.github" target="_blank" class="links"
          ><svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="padding-right: 0.5rem; fill: #f0bb75"
          >
            <path
              d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
            ></path>
          </svg>
          <h4 class="headingSm forIconText">GitHub</h4></a
        ><a :href="this.linkedin" target="_blank" class="links"
          ><svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="padding-right: 0.5rem; fill: #f0bb75"
          >
            <path
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            ></path>
          </svg>
          <h4 class="headingSm forIconText">LinkedIn</h4></a
        >
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
  layout: "MainLayout",
  head() {
    return {
      title: "SHAYAN MOTALEBI - Contact Page",
    };
  },

  data() {
    return {
      email: "ShayaN3k@gmail.com",
      github: "https://github.com/shayan3k",
      linkedin: "https://www.linkedin.com/in/shayan-motalebi/",
      phone_number: process.env.NUXT_PUBLIC_PHONE_NUMBER,
    };
  },
});
</script>

<style lang="scss" scoped>
/* local styles */

main {
  padding: 2rem 1.5rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-section-title {
  font-size: 2rem;
  text-align: center;
}
.MuiSvgIcon-root {
  width: 100px;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.heading2XL {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXL {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.headingSm {
  margin: 0;
}

.forIconText {
  display: flex;
  align-items: center;
}

.borderCircleParent {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.borderCircle {
  /* border-radius: 9999px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact {
  line-height: 35px;
  letter-spacing: 1.5px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  /* color: #999 */
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.8px;
}

.errorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mt-5 {
  margin-top: 50px;
}
</style>
