<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap
    v-for="image in images"
    :key="image.src" >
      <v-flex d-flex xs12 sm6 md5 lg3 xl2 align-end flexbox>
        <v-card >
                  <v-card-media
                      class="white--text mb-0"
                      height="400px"
                      :src= "image.src">
                  </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    images () {
      return this.$store.getters.loadGalleryImages
    }
  }
}
</script>

