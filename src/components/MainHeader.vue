<template>
  <v-toolbar
      color='orange lighten-1'
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon
      @click="updateVis">
      </v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Rilly Visuals',
      lipped: true
    }
  },
  methods: {
    updateVis () {
      this.$emit('updateVisFromHeader')
    }
  }
}
  </script>
