<template>
<v-layout id="header-carousel">
          <v-carousel
      style = "height: 100%"
      :hide-delimiters = true
      :hide-controls = false
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
</v-layout>
</template>

<script>
export default {
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
  }),
  computed: {
    cards () {
      return this.$store.getters.loadHomeCarouselData
    }
  }
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
