<template>
  <v-container>
    <v-layout row wrap v-for="booking in bookings"
                :key="booking.first" class="mb-2" >
      <v-flex xs 12>
        <v-card class="info" >
          <v-container fluid>
            <v-layout row>
              <v-flex xs5>
                  <v-card-title primary-title>
                    <div>
                      <h5 class="white--text mb-0"> {{booking}} </h5>
                    </div>
                  </v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    bookings () {
      return this.$store.getters.loadBooking
    }
  }
}
</script>

