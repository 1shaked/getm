<template>
    <div id="app">
        <v-app id="inspire">
            <v-container>
                <v-text-field
                    label="הערות"
                    placeholder="comments"
                ></v-text-field>
                <v-select
                    :items="ShipmentSizes"
                    label="גודל המשלוח"
                ></v-select>
                <v-select
                :items="bases"
                label="מקום יציאה"
                solo
              ></v-select>
              <v-select
                :items="bases"
                label="מקום הגעה"
                solo
              ></v-select>
                <br>
                <v-btn>:הבא <v-icon>next_week</v-icon></v-btn>
            </v-container>
        </v-app>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      drawer: false,
      ShipmentSizes : ['קטן' , 'בנוני' , 'גדול'],
      bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות']
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