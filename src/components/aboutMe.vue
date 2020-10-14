<template>
  <div id="aboutMe">
    <h2>Hello</h2>
    <div>
      <img v-bind:src="require('@/assets/farhan.jpg')" width="200">
      <h3>{{text}}</h3>
    </div>
    <div>
    <div>
      <b-container fluid>
        <b-row>
          <b-col>
            <b-card bg-variant="light" text-variant="black" title="Face Recognition with Head Pose Challenge">
              <b-card-text>
                this is for door lock access system using raspberry pi and face recognition for the "key"
              </b-card-text>
                <b-button href="https://github.com/farhanrbnn/face-recognition-with-headpose-challenge" variant="primary">Repository</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card bg-variant="light" text-variant="black" title="greetings app">
              <b-card-text>
                inspired from momentum extension for google chrome
              </b-card-text>
                <b-button href="https://github.com/farhanrbnn/homepage-app" variant="primary">Repository</b-button>
            </b-card>            
          </b-col>
        </b-row>
      </b-container>
  </div>
    </div>
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
    margin: 0 auto;
    width: 900px;
    margin-bottom: 20px;
  }
  .row {
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>