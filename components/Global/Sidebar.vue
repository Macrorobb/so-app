<template lang="html">
  <v-navigation-drawer v-model="drawer" dark color="blue darken-3" fixed app>
    <v-list>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
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
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
          <v-icon right dark>mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-home-city',
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
