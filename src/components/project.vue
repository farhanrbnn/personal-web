<template>
  <div id="project">
    <div>
     <b-navbar align="center" type="dark" variant="dark">
        <img v-b-toggle.sidebar-variant v-bind:src="require('@/assets/hamburger.png')" width="32" height="32">
        <b-sidebar id="sidebar-variant" shadow>
          <router-link to="/"><p id="router">Dashboard</p></router-link>
          <router-link to="projects"><p id="router">Projects</p></router-link>
        </b-sidebar>
        <b-navbar-brand id="test" href="#">Projects</b-navbar-brand>
      </b-navbar>
    </div>
    <b-container id="content" fluid="sm">
      <b-row class=" mb-5 d-flex justify-content-md-center">
        <b-col v-for="list in content" :key="list.title" sm="8" class="mt-3">
          <b-card>
            <div>
              <h5>{{list.title}}</h5>
              <p id="repo-detail">{{list.detail}}</p>
              <b-button :href="list.link">Repository</b-button>
              <b-button class="mx-2" v-if="list.demo" :href="list.demo">Demo</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data () {
      return {
        content: [
        {
          title: 'Face Recognition with Head Pose Challenge',
          detail: 'this is for door lock access system using raspberry pi and face recognition for the "key"',
          link:'https://github.com/farhanrbnn/face-recognition-with-headpose-challenge'
        },
        {
          title: 'Homepage App',
          detail :'inspired from momentum extension for google chrome',
          link: 'https://github.com/farhanrbnn/homepage-app'
        },
        {
          title: 'Detik News Scraper',
          detail: 'Scraping news info like news title, author, and release date from detik.com',
          link: 'https://github.com/farhanrbnn/detik-news-scraper'
        },
        {
          title: 'Liveness Detection',
          detail: 'method for prevent spoofing in face recognition',
          link: 'https://github.com/farhanrbnn/liveness-detection'
        },
        {
          title: 'Covid-19 Monitor',
          detail: 'application for monitoring Covid-19 cases in global and Indonesia',
          link: 'https://github.com/farhanrbnn/covid19-monitor',
          demo: 'https://covid19-data-monitor.web.app/'
        }
        ]
      }
    }
  }
</script>
<style scoped>
  #repo-detail {
    border-bottom: 1px solid  gray;
  }
  #test {
    margin-left: 20px;
    font-size: 25px;
  }

  #content {
    margin-top: 50px;
  }

  #router {
    color: black;
    font-size: 20px;
  }

  #sidebar-variant {
    width: 180px;
  }
  
</style>