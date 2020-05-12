<template lang="html">
  <v-container class="grey lighten-5">
    <v-col cols="12">
      <div class="flex font-weight-bold">Sale Order</div>
    </v-col>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Doc No." outlined dense></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Doc No. in" outlined dense></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Doc No. Ref." outlined dense></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
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
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
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
          <v-col cols="12" md="4">
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
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time" full-width>
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
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu: false,
      modal: false,
      modal2: false,
      time: null
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
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>

<style lang="css" scoped></style>
