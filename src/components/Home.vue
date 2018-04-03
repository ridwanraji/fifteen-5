<template>
          <v-carousel
      style = "height: 100%"
      :hide-delimiters = true
      :hide-controls = true
      >
        <v-carousel-item
        v-for="(slide, i) in cards"
        :src="slide.src"
        :key="i"
        transition = "fade" >
          <v-jumbotron dark
          :gradient="gradient">
            <v-container fill-height>
              <v-layout align-center>
                <v-flex align-center>
                  <img src="@/assets/RV20.png" height="200" >
                  <h1>{{ slide.title }}</h1>
                  <h2>{{ slide.text }}</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
        </v-carousel-item>
      </v-carousel>

</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: function () {
        return [
          {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/5ZydGd0.jpg', text: 'Photographer | Videographer | Graphic Designer'},
          {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/LCQxACR.jpg', text: 'Photographer | Videographer | Graphic Designer'},
          {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/wp-image-59632011-random-picture.jpg', text: 'Photographer | Videographer | Graphic Designer'}
        ]
      }
    }
  },
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
  })
}
</script>

<style>
#header-carousel {
  height:100vh;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-align: center;
  font-size: 3em;
}
h2 {
  font-weight: normal;
  text-align: center;
  font-size: 1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
    display: block;
    margin: 0 auto;
}
v-btn {
  display: block;
    margin: 0 auto;
}
</style>
