<template>
  <div id="navbar">
    <b-container id="home">
      <b-row>
        <b-col class="d-flex align-items-center pr-0">
          <div>
            <h1 id="greetings">Hello there, <br> my name is Farhan. I'm a Software Engineer.</h1>
          </div>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <img id="img" alt="Farhan Rabbaanii" v-bind:src="require('@/assets/farhan.png')">
        </b-col>
      </b-row>
    </b-container>
    <div class="test">
    <b-container id="about-me" fluid>
      <h1><strong>About Me</strong></h1>
      <b-row class="about-row">
        <b-col class="d-flex align-items-center justify-content-center">
          <h2 class="light-grey-text">Who am I in a brief.</h2>
        </b-col>
        <b-col>
          <h2 style="text-align: justify;">
            I am currently working at tech company as a Front-End Developer. I have many interest such as full-stack web developing, machine learning and computer vision. I love to learn something new and always learning to enhance my skill in software development.
          </h2>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col class="d-flex align-items-center justify-content-center">
          <h2 class="light-grey-text">Technologies that i use.</h2>
        </b-col>
         <b-col>
           <b-row  class="mt-5" v-for="(val, idx) in about" :key="idx">
             <b-col v-for="(el, index) in val.row" :key="index">
              <img :id="el.id" :alt="el.alt" v-bind:src="el.icon">
               <b-tooltip :target="el.id" triggers="hover">
                {{el.toolText}}
              </b-tooltip>
             </b-col>
           </b-row>
        </b-col>
      </b-row>
    </b-container>
    </div>
    <b-container id="portofolio" fluid>
      <h1><strong>My Work</strong></h1>
      <b-row>
        <b-col>
          <img v-bind:src="require('@/assets/nodata.svg')" alt="no data ilustration" class="mt-5" id="ilustration-img">
          <h3 class="mt-3">Will be update soon.</h3>
          <h3 class="mt-3">while wait, feel free to visit my <span><a href="https://github.com/farhanrbnn" target="_blank" id="github">GitHub </a></span>profile.</h3>
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
        about:[
          {
            row:[
              {
                icon:require('@/assets/python.png'),
                id: 'tooltip-python',
                alt:"python icon",
                toolText: 'Python'

              },
              {
                icon:require('@/assets/javascript.png'),
                id: 'tooltip-js',
                alt:"JavaScript icon",
                toolText: 'JavaScript'
              },
              {
                icon:require('@/assets/mongodb.png'),
                id: 'tooltip-mongodb',
                alt:"mongodb icon",
                toolText: 'MongoDB'
              }
            ]
          },
          {
            row: [
              {
                icon: require('@/assets/vue.png'),
                id: 'tooltip-vue',
                alt:"vuejs icon",
                toolText: 'VueJS'
              },
              {
                icon: require('@/assets/nodejs.png'),
                id: 'tooltip-node',
                alt:"nodejs icon",
                toolText: 'NodeJS'
              },
              {
                icon: require('@/assets/mysql.png'),
                id: 'tooltip-sql',
                alt:"mysql icon",
                toolText: 'MySql'
              }
            ]
          },
          {
            row: [
              {
                icon: require('@/assets/git.png'),
                id: 'tooltip-git',
                alt:"git icon",
                toolText: 'Git'
              },
              {
                icon: require('@/assets/linux.png'),
                id: 'tooltip-linux',
                alt:"linux icon",
                toolText: 'Linux'
              },
              {
                icon: require('@/assets/flask.png'),
                id: 'tooltip-flask',
                alt:"flask icon",
                toolText: 'Flask'
              }
            ]
          }
        ]
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

  #ilustration-img {
    height: 300px;
    width: 300px;
  }

</style>