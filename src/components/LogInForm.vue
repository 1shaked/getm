<template>
            <div id="app">
        <v-app id="inspire">
            <v-form
            ref="form"
            lazy-validation
            >
            <v-text-field
                v-model="name"
                :counter="10"
                label="שם פרטי"
                required
            ></v-text-field>
            <v-text-field
                v-model="last_name"
                label="שם משפחה"
                required
            ></v-text-field>
            <v-text-field
                v-model="phone"
                label="מספר טלפון"
                required
            ></v-text-field>
            <v-text-field
                v-model="id_number"
                label="מספר אישי"
                required
            ></v-text-field>
            <v-text-field
                v-model="sys_id"
                label="סימול אפסנאי"
                required
            ></v-text-field>
            <v-flex xs12 sm6 d-flex>
            <v-select
              :items="vehicles"
              label="כלי רכב"
              v-model="vehicle"
              solo
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="bases"
              label="מקום יציאה"
              v-model="starting_place"
              solo
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="bases"
              label="מקום הגעה"
              v-model="destination"
              solo
            ></v-select>
          </v-flex>
          <v-flex xs12 md8>
            <v-date-picker
              ref="calendar"
              v-model="start"
              :type="type"
              color="primary"
            ></v-date-picker>
            <v-btn @click="$refs.calendar.prev()">
              <v-icon
                dark
                left
              >
                keyboard_arrow_left
                </v-icon>
              Prev
          </v-btn>
          <v-btn @click="$refs.calendar.next()">
              Next
              <v-icon
                right
                dark
              >
                keyboard_arrow_right
              </v-icon>
          </v-btn>
        </v-flex>
          <v-btn color="success" block>הרשם</v-btn>
            </v-form>
        </v-app>
        </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      drawer: false,
      vehicles: ['משאית', 'טנדר', 'רגיל'],
      bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות'],
      type: 'month',
      start: '',
      name : '',
      last_name : '',
      phone : null,
      id_number : null,
      sys_id : null,
      vehicle : null,
      starting_place : null,
      destination : null
    }
  }
}
</script>

<style scoped>
.navObj{
    color: #fff;
}
.link {
    font-size: 25px;
    color: black;

}
</style>
