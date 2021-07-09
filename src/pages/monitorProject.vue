<template>
	<div id="monitorProject">
    <b-container class="title">
      <b-row>
        <b-col class="d-flex justify-content-start" cols="4">
          <h1>Covid-19 Monitoring Web</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <b-carousel
          id="carousel-1"
          :interval="3000"
          controls
          indicators
          background="#dadada"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          >
          <b-carousel-slide :img-src="require('@/assets/monitoring/monitoring.png')"></b-carousel-slide>
          <b-carousel-slide :img-src="require('@/assets/monitoring/monitor2.png')"></b-carousel-slide>
       </b-carousel>

        </b-col>
      </b-row>
    </b-container>
    <b-container class="content">
      <b-row>
        <b-col>
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam deserunt? Sunt quis ipsa rerum eligendi nulla laudantium et, quia dolor! Eaque, perspiciatis quo. Quia dicta exercitationem nobis aperiam beatae.</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <h3>Tech Stack</h3>
          <b-row>
            <b-col class="mt-3" v-for="(val, idx) in tech" :key="idx" cols="2">
              <img fluid :src="val.img" :id="val.id" :alt="val.alt">
               <b-tooltip :target="val.id" triggers="hover">
                {{val.tooltip}}
              </b-tooltip>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mt-4 mb-4">
        <b-col>
          <h3>Live Demo</h3>
          <a href="https://covid19-data-monitor.web.app/" target="_blank"><p class="demo"> https://covid19-data-monitor.web.app/ </p></a>
        </b-col>
      </b-row>
    </b-container>
	</div>
</template>

<script>
export default {
	name: 'monitorProject',
  data () {
    return {
      tech: [
        {
          img: require('@/assets/vue.png'),
          tooltip: 'VueJS',
          id: 'vuejs-logo',
          alt: 'vuejs logo'
        },
        {
          img: require('@/assets/bootstrap.png'),
          tooltip: 'Bootstrap',
          id: 'bootstrap-logo',
          alt: 'bootstrap logo'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font-weight: bold;
}

h3, p {
  text-align: left;
}

h3 {
  color: #888888;
}

a {
  text-align: left;
}

.title {
  padding-top: 40px;
}

.content {
  padding-top: 20px;

}

.demo {
  font-size: 20px;
}

</style>