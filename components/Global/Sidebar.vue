<template lang="html">
  <v-navigation-drawer
    v-model="drawer"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: { name: 'index' }
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: {
            name: 'inspire',
            query: { username: 'admin', password: '1234' },
            hash: '#test'
          }
        },
        {
          icon: 'mdi-sale',
          title: 'Sale Order',
          to: { name: 'so' }
        }
      ]
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.layout.drawer
      },
      set(newVal) {
        this.$store.commit('layout/set_drawer', newVal)
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
