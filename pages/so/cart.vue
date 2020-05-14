<template>
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
    <v-row>
      <v-col cols="8">
        <v-card
          ><v-container>
            <v-banner v-for="item in [1, 2, 3, 4]" :key="item.lenght">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              cursus nec sem id malesuada. Curabitur lacinia sem et turpis
              euismod, eget elementum ex pretium.
              <template v-slot:actions>
                <v-btn icon color="blue darken-3">
                  <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
                <v-text-field value="0" class="text-center" reverse>
                </v-text-field>
                <v-btn icon color="blue darken-3">
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
                <v-btn icon color="pink">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-banner>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-container> summation</v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
