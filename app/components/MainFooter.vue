<template>
  <footer class="footer">
    <div class="copyright">©Shayan3k - {{ new Date().getFullYear() }}</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 100vh;
  /* padding: 0 1.5rem; */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  padding: 2rem 1.5rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-transform: uppercase;
  /* width: 100%; */
  /* height: 7rem; */
  /* font-weight: 400; */
  /* position: relative; */
  /* padding: 0 0 0 15px; */
  /* border: 1px solid red */
  /* background: linear-gradient(180deg, rgba(50, 50, 51, 1) 9%, rgba(50, 50, 51, 0.8) 85%, rgba(50, 50, 51, 0.7) 100%); */
}

.navContainer {
  display: flex;
  justify-content: flex-end;
  /* justify-content: center; */
  /* border: 1px solid aliceblue; */
}

.nav {
  /* display: flex; */
  /* justify-content: space-around; */
  margin-top: 3rem;
  /* padding-bottom: 1rem; */
  /* border: 1px solid aliceblue; */
}

.nav a {
  /* font-size: 1rem; */
  margin: 0 2rem;
}

.header a:hover {
  text-decoration: none;
}

.box {
  width: 200px;
  height: 200px;
  background: #eee;
  border: 1px solid #333;
  float: left;
  margin-right: 10px;
}

.underline {
  height: 1px;
  background: #ffffff;
  transition: all 0.3s ease;
}

.spotLight {
  /* height: 10px; */
  /* margin-bottom: 5px; */
  /* background: white; */
  /* border-color: white; */
  /* border-radius: 50%; */
  /* box-shadow: 0 0 7px 5px rgb(224, 243, 255); */
  /* position: absolute; */
  /* left: 0; */
  /* bottom: 0; */
  /* transition: all 0.5s ease; */
  /* animation: sinus 0.5s linear 0s infinite; */
}

/* 
@keyframes sinus {
    0% {
        box-shadow: 0 0 9px 5px white;
    }
    50% {
        box-shadow: 0 0 10px 5px white;
    }
    100% {
        box-shadow: 0 0 9px 5px white;
    }
} */

.glowing-border:focus {
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
}

.backToHome {
  margin: 3rem 0 0;
}

.footer {
  display: flex;
  justify-content: space-around;
  /*  align-items: space-around; */
  /* border-top: 1px solid #656669; */
  border-top: 1px solid #4b4d57;
  padding: 50px;
  width: 100%;
  max-height: 10vh;
  /* margin-top: 50px; */
}

.copyright {
  font-family: "Montserrat";
  color: white;
}

@media screen and (max-width: 800px) {
  /* .container {
        padding: 0 1.5rem;
    } */
  /* .main {
        padding-top: 2rem;
    } */
  .header {
    /* width: 100%; */
    /* height: 7rem; */
    /* font-weight: 400; */
    /* display: block; */
    /* justify-content: flex-end; */
    /* position: relative; */
    padding-left: 0;
    /* text-transform: uppercase; */
    /* border-bottom: 1px solid #4B4D57; */
    margin: 0 1.5rem;
  }
  .navContainer {
    display: block;
    justify-content: flex-end;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
    /* margin-bottom: 0.5rem; */
  }
  .nav a {
    /* margin-top: 4rem; */
    /* font-size: 14px; */
    margin: 0;
  }
  .spotLight {
    /* height: 0.3rem; */
    /* width: 2rem; */
    /* margin-bottom: 5px; */
    /* background: white; */
    /* border-color: white; */
    /* border-radius: 50%; */
    /* box-shadow: 0 0 7px 5px rgb(224, 243, 255); */
    /* position: absolute; */
    /* left: 0; */
    /* bottom: 0; */
    /* transition: all 0.5s ease; */
  }
}

@media screen and (max-width: 350px) {
  .nav a {
    font-size: 13px;
  }
}

/* .footer img {
    margin-left: 0.5rem;
}

.footer a {
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* 
.projWrapper {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-content: flex-start;
} */
</style>
