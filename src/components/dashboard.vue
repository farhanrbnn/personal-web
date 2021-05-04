<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="lg" type="light" id="navbar">
         <b-navbar-brand href="#">Farhan Rabbaanii</b-navbar-brand>
         <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
         <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">About</b-nav-item>
              <b-nav-item href="#">Portofolio</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid>
      <b-row>
        <b-col class="d-flex align-items-center pr-0">
          <div>
            <h1 id="greetings">Hello there, <br> my name is Farhan. I'm a Front-End Developer.</h1>
          </div>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <img id="img" v-bind:src="require('@/assets/farhan.png')" width="757" height="921">
        </b-col>
      </b-row>
    </b-container>
    <b-container id="about-me" fluid>
      <h2>About Me</h2>
      <b-row class="about-row">
        <b-col class="d-flex align-items-center">
          <h2>Who am I in a brief.</h2>
        </b-col>
        <b-col>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h2>
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
  #about-me {
    padding-right: 100px;
    padding-left: 100px;
    margin-top: 103px;
  }

  #greetings {
    text-align: left;
    font-weight: bold;
    font-size: 50px;
  }

  #navbar {
    background-color: white !important;
  }

  #footer {
    margin-top: 140px;
  }

  #contact {
    margin-top: 50px;
  }

  #test {
    margin-left: 20px;
    font-size: 25px;
  }

  #router {
    color: black;
    font-size: 20px;
  }

</style>