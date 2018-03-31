<template>
  <v-app dark>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list
      two-line
      dense
      class="pt-0">
        <v-list-tile
          v-for="tab in tabs"
          :key="tab.title"
          :to="{name:tab.name}"
        >
          <v-list-tile-action>
            <v-icon> {{tab.icon}} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> {{tab.name}} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
    color='orange lighten-1'
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 fifteen-5 </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      temporary: true,
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Rilly Visuals'
    }
  },
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    title () {
      return this.$route.name
    },
    tabs () {
      return this.$router.options.routes.filter(route => route.name && route.icon)
    }
  },
  name: 'App'
}
</script>
