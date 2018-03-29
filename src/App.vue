<template>
  <v-app>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
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
      items: [{
        icon: 'home',
        title: 'Home'
      }, {
        icon: 'date_range',
        title: 'Book A Session'
      }, {
        icon: 'photo_library',
        title: 'Gallery'
      }, {
        icon: 'account_box',
        title: 'About'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Rilly Visuals'
    }
  },
  name: 'App'
}
</script>
