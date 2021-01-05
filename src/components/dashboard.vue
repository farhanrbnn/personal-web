<template>
  <div id="navbar">
    <div>
      <b-navbar align="center" type="dark" variant="dark">
        <img v-b-toggle.sidebar-variant v-bind:src="require('@/assets/hamburger.png')" width="32" height="32">
        <b-sidebar id="sidebar-variant" shadow>
          <router-link to="/"><p id="router">Dashboard</p></router-link>
          <router-link to="projects"><p id="router">Projects</p></router-link>
        </b-sidebar>
        <b-navbar-brand id="test" href="#">Dashboard</b-navbar-brand>
      </b-navbar>
    </div>
    <b-container id="dashboard" fluid="sm">
      <h2>Welcome To My Page !</h2>
      <img id="img-profile" v-bind:src="require('@/assets/farhan.jpg')" width="200">
      <h3 id="info">{{text}}</h3>
      <div id="contact">
        <h3>Reach Me Out</h3>
        <b-row id="contact" class="justify-content-md-center">
            <b-col cols="2">
              <a href="https://github.com/farhanrbnn">
                <img v-bind:src="require('@/assets/github.png')">
              </a>
            </b-col>
            <b-col cols="2">
              <a href="mailto:farhanrbnn@gmail.com">
                <img v-bind:src="require('@/assets/email.png')" width="64" height="64">
              </a>
            </b-col>
          </b-row>
        </div>
        <div id="footer">
          <p>Copyright Farhan &copy; 2021</p>
        </div>
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

  #img-profile {
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  #footer {
    margin-top: 140px;
  }

  #dashboard {
    margin-top: 100px;
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