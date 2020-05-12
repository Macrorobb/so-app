<template lang="html">
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'SO App'
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('layout/set_drawer', !this.$store.state.layout.drawer)
    }
  }
}
</script>

<style lang="css" scoped></style>
