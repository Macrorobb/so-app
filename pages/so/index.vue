<template lang="html">
  <div>
    <v-row>
      <v-col cols="6" md="6" sm="12">
        <div class="font-weight-bold">Sale Order</div>
      </v-col>
      <v-col cols="6" md="6" sm="12">
        <v-breadcrumbs
          class="d-flex justify-end"
          :items="[
            {
              text: 'Dashboard',
              disabled: false,
              href: 'breadcrumbs_dashboard'
            },
            {
              text: 'Link 1',
              disabled: false,
              href: 'breadcrumbs_link_1'
            },
            {
              text: 'Link 2',
              disabled: true,
              href: 'breadcrumbs_link_2'
            }
          ]"
        >
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-card>
      <v-container>
        <v-form>
          <v-row>
            <v-col cols="12" md="2">
              <v-select
                :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                label="Doc No."
                dense
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field label="Doc No. in" outlined dense></v-text-field>
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field label="Doc No. Ref." outlined dense></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Picker in dialog"
                    prepend-icon="event"
                    readonly
                    outlined
                    dense
                    class="set-datetime-icon"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" locale="th-th" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" md="3">
              <v-dialog
                ref="dialog2"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Picker in dialog"
                    prepend-icon="access_time"
                    readonly
                    outlined
                    dense
                    class="set-datetime-icon"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="time"
                  format="24hr"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.dialog2.save(time)"
                    >OK</v-btn
                  >
                </v-time-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Customer"
                outlined
                dense
                append-icon="search"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field label="Product Search" append-icon="search">
            </v-text-field>
          </v-col>
          <v-col v-for="item in items" :key="item.id" cols="12" md="3" sm="12">
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <div class="my-4 subtitle-1">
                      {{ item.price }}
                    </div>
                    <div>{{ item.detail }}</div>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon color="blue darken-3">
                  <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
                <v-text-field value="0" class="text-center" reverse>
                </v-text-field>
                <v-btn icon color="blue darken-3">
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
                <v-btn color="pink" small text>Add to Cart</v-btn>
                <!-- <v-btn class="white--text" color="deep-purple accent-4" small>
                  Add to Cart
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>

      <div class="text-center">
        <v-row justify="center">
          <v-col cols="12">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                class="my-4"
                :length="10"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </div>
      <v-btn
        dark
        fab
        bottom
        right
        fixed
        color="orange"
        @click="handleCartClicked"
      >
        <v-badge color="red" content="99">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: [
        { id: 1, name: 'item1', price: '5,000', detail: 'lorem lorem lorem' },
        { id: 2, name: 'item2', price: '2,000', detail: 'lorem lorem lorem' },
        { id: 3, name: 'item3', price: '4,000', detail: 'lorem lorem lorem' },
        { id: 4, name: 'item4', price: '55,000', detail: 'lorem lorem lorem' },
        { id: 5, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' },
        { id: 6, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' },
        { id: 7, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' },
        { id: 8, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' },
        { id: 9, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' },
        { id: 10, name: 'item5', price: '6,000', detail: 'lorem lorem lorem' }
      ],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu: false,
      modal: false,
      modal2: false,
      time: null,
      dialog: false,

      // modal selected customer
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${Number(year) + 543}`
    },
    parseDate(date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      const ConvertYear = Number(year) - 543
      return `${ConvertYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    handleCartClicked() {
      this.$router.push('/so/cart')
    }
  }
}
</script>

<style lang="css" scoped>
.v-breadcrumbs {
  margin: 0;
  padding: 0;
}
</style>
