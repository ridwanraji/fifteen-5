<template>
  <v-app dark>
    <nav-tab
    temporary
    :mini-variant="miniVariant"
    v-model="drawer"
    :clipped="clipped"
    fixed
    :tabs="tabs"/>
    <main-header
    :title="title"/>
    @updateVisFromHeader = "changeVis"
    <v-content>
      <v-layout>
          <transition>
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </v-layout>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 fifteen-5 </span>
    </v-footer>
  </v-app>
</template>

<script>
import NavTab from '@/components/NavTab'
import MainHeader from '@/components/MainHeader'

export default {
  components: {NavTab, MainHeader},
  data () {
    return {
      temporary: true,
      clipped: true,
      drawer: true,
      fixed: false
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
  methods: {
    changeVis () {
      this.vis = !this.vis
    }
  }
}
</script>
