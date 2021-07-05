<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="lg" type="light" id="navbar">
         <b-navbar-brand href="#"><strong>Farhan Rabbaanii</strong></b-navbar-brand>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><p id="router" class="mb-0 mt-0">Home</p></b-nav-item>
            <b-nav-item><a href="#test" id="router" class="mb-0 mt-0">About</a></b-nav-item>
            <b-nav-item><p id="router" class="mb-0 mt-0">Work</p></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container id="home">
      <b-row>
        <b-col class="d-flex align-items-center pr-0">
          <div>
            <h1 id="greetings">Hello there, <br> my name is Farhan. I'm a Software Engineer.</h1>
          </div>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <img id="img" v-bind:src="require('@/assets/farhan.png')">
        </b-col>
      </b-row>
    </b-container>
    <div id="test">
    <b-container id="about-me" fluid>
      <h1><strong>About Me</strong></h1>
      <b-row class="about-row">
        <b-col class="d-flex align-items-center justify-content-center">
          <h2 class="light-grey-text">Who am I in a brief.</h2>
        </b-col>
        <b-col>
          <h2 style="text-align: justify;">
            I am a Front-End Developer currently working at tech company. I have many interest such as full-stack web developing, machine learning and computer vision. I love to learn something new and always learning to enhance my skill in software development.
          </h2>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col class="d-flex align-items-center justify-content-center">
          <h2 class="light-grey-text">Technologies that i capable of.</h2>
        </b-col>
         <b-col>
           <b-row>
             <b-col>
              <img id="tooltip-python" v-bind:src="require('@/assets/python.png')">
             </b-col>
             <b-tooltip target="tooltip-python" triggers="hover">
                Python
              </b-tooltip>
             <b-col>
              <img id="tooltip-js" v-bind:src="require('@/assets/javascript.png')">
             </b-col>
             <b-tooltip target="tooltip-js" triggers="hover">
                JavaScript
              </b-tooltip>
             <b-col>
              <img id="tooltip-mongodb" v-bind:src="require('@/assets/mongodb.png')">
             </b-col>
             <b-tooltip target="tooltip-mongodb" triggers="hover">
                MongoDB
              </b-tooltip>
           </b-row>
            <b-row class="mt-5">
             <b-col>
              <img id="tooltip-vue" v-bind:src="require('@/assets/vue.png')">
             </b-col>
             <b-tooltip target="tooltip-vue" triggers="hover">
                VueJS
              </b-tooltip>
             <b-col>
              <img id="tooltip-node" v-bind:src="require('@/assets/nodejs.png')">
             </b-col>
             <b-tooltip target="tooltip-node" triggers="hover">
                NodeJS
              </b-tooltip>
             <b-col>
              <img id="tooltip-sql" v-bind:src="require('@/assets/mysql.png')">
             </b-col>
             <b-tooltip target="tooltip-sql" triggers="hover">
                MySQL
              </b-tooltip>
           </b-row>
           <b-row class="mt-5">
             <b-col>
              <img id="tooltip-git" v-bind:src="require('@/assets/git.png')">
             </b-col>
             <b-tooltip target="tooltip-git" triggers="hover">
                Git
              </b-tooltip>
             <b-col>
              <img id="tooltip-linux" v-bind:src="require('@/assets/linux.png')">
             </b-col>
             <b-tooltip target="tooltip-linux" triggers="hover">
                Linux
              </b-tooltip>
             <b-col>
              <img id="tooltip-flask" v-bind:src="require('@/assets/flask.png')">
             </b-col>
             <b-tooltip target="tooltip-flask" triggers="hover">
                Flask
              </b-tooltip>
           </b-row>
        </b-col>
      </b-row>
    </b-container>
    </div>
    <b-container id="portofolio" fluid>
      <h1><strong>My Work</strong></h1>
      <b-row>
        <b-col>
          <img v-bind:src="require('@/assets/nodata.svg')" class="mt-5" width="300" height="300">
          <h3 class="mt-3">Will be update soon.</h3>
          <h3 class="mt-3">while wait, feel free to visit my <span><a href="https://github.com/farhanrbnn" target="_blank" id="github">GitHub </a></span>profile.</h3>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="footer" class="mb-0" fluid>
      <b-row class="pb-5 pt-5">
        <b-col class="d-flex justify-content-start">
          <h3 id="footer-text" class="pl-5">Farhan Rabbaanii</h3>
        </b-col>
        <b-col cols="4">
          <b-row>
            <b-col  class="d-flex justify-content-end">
              <a href="https://github.com/farhanrbnn" target="_blank">
                <img v-bind:src="require('@/assets/github.png')">
              </a>
            </b-col>
            <b-col>
              <a href="https://www.linkedin.com/in/farhan-rabbaanii-8b5383176/" target="_blank">
                <img v-bind:src="require('@/assets/linkedin.png')">
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'edit',
    data () {
      return {
        text: "Hello, my name is Farhan Rabbaanii. i'm computer engineering fresh graduate from BINUS University. I have intereset in full-stack web development, machine learning and computer vision.",
      }
    }
  }
</script>
<style scoped>
  a {
    color: white;
    font-size: 20px;
  }
  .about-row {
    margin-top: 100px;
  }

  .light-grey-text {
    color: #8888;
  }

  #about-me {
    padding-right: 120px;
    padding-left: 120px;
    margin-top: 103px;
  }

  #footer {
    background-color: black;
  }

  #greetings {
    text-align: left;
    font-weight: bold;
    font-size: 40px;
  }

  #github {
    color: #2c3e50;
    font-size: 1.75rem;
  }

  #portofolio {
    margin-top: 220px;
  }

  #footer-text {
    color: white;
  }

  #navbar {
    background-color: white !important;
    border-bottom: 1px solid #dadada;
  }

  #footer {
    margin-top: 140px;
  }

  #home {
    margin-top: 100px;
  }

  #contact {
    margin-top: 50px;
  }

  #about-me {
    margin-top: 235px;
  }

  #test {
    margin-left: 20px;
    font-size: 25px;
  }

  #router {
    color: #999999;
    margin-top: 10px;
    font-size: 20px;
  }

</style>