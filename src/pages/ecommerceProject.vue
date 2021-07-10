<template>
	<div id="ecommerceProject">
    <b-container class="title">
      <b-row>
        <b-col class="d-flex justify-content-start" cols="4">
          <h1>E-Commerce Website</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <b-carousel
          id="carousel-1"
          :interval="2500"
          controls
          indicators
          background="#dadada"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          >
          <b-carousel-slide :img-src="require('@/assets/ecommerce/Capture1.png')"></b-carousel-slide>
          <b-carousel-slide :img-src="require('@/assets/ecommerce/Capture2.png')"></b-carousel-slide> 
          <b-carousel-slide :img-src="require('@/assets/ecommerce/Capture3.png')"></b-carousel-slide>
          <b-carousel-slide :img-src="require('@/assets/ecommerce/Capture4.png')"></b-carousel-slide> 

       </b-carousel>

        </b-col>
      </b-row>
    </b-container>
    <b-container class="content mt-4">
      <b-row>
        <b-col>
          <h3>Description</h3>
          <p>{{description}}</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <h3>Tech Stack</h3>
          <b-row>
            <b-col class="d-flex align-items-center mt-3" v-for="(val, idx) in tech" :key="idx" cols="2">
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
          <p class="demo">still on development</p>
        </b-col>
      </b-row>
    </b-container>
	</div>
</template>

<script>
export default {
	name: 'ecommerceProject',
  data () {
    return {
      description: "I created this project for my practice to learn CRUD application. This e-commerce web is not a marketplace, it's just for one shop only. This web just has a very basic feature of an e-commerce website. ",
      tech: [
        {
          img: require('@/assets/vue.png'),
          tooltip: 'VueJs',
          id: 'vuejs-logo',
          alt: 'vuejs logo'
        },
        {
          img: require('@/assets/bootstrap.png'),
          tooltip: 'Bootstrap',
          id: 'bootstrap-logo',
          alt: 'bootstrap logo'
        },
        {
          img: require('@/assets/nodejs.png'),
          tooltip: 'NodeJS',
          id: 'nodejs-logo',
          alt: 'nodejs logo'
        },
        {
          img: require('@/assets/mongodb.png'),
          tooltip: 'MongoDB',
          id: 'mongodb-logo',
          alt: 'mongodb logo'
        },
        {
          img: require('@/assets/express.png'),
          tooltip: 'Express',
          id: 'express-logo',
          alt: 'express logo'
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

.title {
  padding-top: 40px;
}

h3, p {
  text-align: left;
}

h3 {
  color: #888888;
}
.demo {
  font-size: 20px;
}
</style>