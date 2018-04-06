<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex
      v-for="image in images"
      :key="image.src"
      xs12 sm6 md5 lg3 xl2>
        <v-card class="my-2 mx-2">
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

