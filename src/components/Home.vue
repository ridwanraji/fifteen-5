<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <section>
        <v-layout column align-center>
        <img src="@/assets/RV20.png" alt="Vuetify.js"
        height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">Rilly Visuals</h1>
        <div class="subheading mb-3 text-xs-center">Photographer | Videographer | Graphic Designer</div>
        <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="https://www.instagram.com/rillyvisuals"
            >
              Book Now
            </v-btn>
        <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Helping you save your memories since 2016...</h2>
              <span class="subheading">
                We the best
              </span>
            </div>
          </v-flex>

        <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-btn flat>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Photography</div>
                    </v-card-title>
                  </v-card>
                  </v-btn>
                </v-flex>

                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Videography</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Graphic Design</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </v-layout>
      </section>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
