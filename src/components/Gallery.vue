<template>
  <v-container>
    <v-layout row wrap v-for="image in images"
                :key="image.src" class="mb-2" >
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="info" >
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                  <v-card-media
                      class="white--text mb-0"
                      height="200"
                      :src= "image.src">
                  </v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    images () {
      return [
      {src: '@/assets/Bridge1.png'},
      {src: '@/assets/KAT.jpg'},
      {src: '@/assets/KAT1.jpg'},
      {src: 'https://wallpaperbrowse.com/media/images/5ZydGd0.jpg'}
      ]
    }
  }
}
</script>

