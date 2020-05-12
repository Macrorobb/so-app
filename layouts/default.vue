<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<style lang="scss">
.set-datetime-icon {
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
}
</style>

<script>
import Sidebar from '@/components/Global/Sidebar'
import Topbar from '@/components/Global/Topbar'
import Footer from '@/components/Global/Footer'
export default {
  components: {
    Sidebar,
    Topbar,
    Footer
  }
}
</script>
