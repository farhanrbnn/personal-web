<template>
  <div id="app">
    <b-navbar sticky toggleable="lg" type="light" id="navbar">
         <b-navbar-brand href="#"><strong><router-link class="router" to="/">Farhan Rabbaanii</router-link></strong></b-navbar-brand>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item><p id="router" class="mb-0 mt-0">Home</p></b-nav-item>
            <b-nav-item><a href="#test" v-on:click="scrollToDiv()" id="router" class="mb-0 mt-0">About</a></b-nav-item>
            <b-nav-item><p id="router" class="mb-0 mt-0">Work</p></b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view/>
     <b-container id="footer" class="mb-0" fluid>
      <b-row class="pb-5 pt-5">
        <b-col class="d-flex justify-content-start">
          <h3 id="footer-text" class="pl-5">Farhan Rabbaanii</h3>
        </b-col>
        <b-col cols="4">
          <b-row>
            <b-col  class="d-flex justify-content-end">
              <a href="https://github.com/farhanrbnn" target="_blank">
                <img v-bind:src="require('@/assets/github.png')" alt="github icon">
              </a>
            </b-col>
            <b-col>
              <a href="https://www.linkedin.com/in/farhan-rabbaanii-8b5383176/" target="_blank">
                <img v-bind:src="require('@/assets/linkedin.png')" alt="linkedin icon">
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="copyright">© 2021 by Farhan Rabbaanii. All Rights Reserved</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::selection {
  color: white;
  background: black;
}

 #navbar {
    background-color: white !important;
    border-bottom: 1px solid #dadada;
  }

.router {
    color: black;
  }

  .copyright {
    color: white;
  }

  .router:hover {
    color: black;
    text-decoration: none;
  }

#footer {
    background-color: black;
  }

#footer-text {
    color: white;
}

</style>
