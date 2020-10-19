<template>
  <div id="aboutMe">
    <h2>Greetings</h2>
    <b-container fluid="sm">
      <img v-bind:src="require('@/assets/farhan.jpg')" width="200">
      <h3 id="info">{{text}}</h3>
      <div>
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
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'aboutMe',
    data: function(){
      return{
      text: "Hello, my name is Farhan Rabbaanii. i'm computer engineering fresh graduate from BINUS University. I have intereset in full-stack web development, machine learning and computer vision. Below are some of the projects that i worked on" 

      }
    }
  }
</script>

<style scoped>
  h1 {
    border-bottom: 4px solid black;
    margin: 0 auto;
    width: 150px;
  }

  img {
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  h3 {
    margin-top: 50px;
  }

  .row {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  #aboutMe {
    margin-top: 50px;
  }

  #info{
    margin: 0 auto;
    /*width: 900px;*/
    margin-bottom: 20px;
  }


</style>