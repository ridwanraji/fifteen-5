<template>
  <v-container>
    <v-layout row wrap v-for="booking in bookings"
                :key="booking.first" class="mb-2" >
      <v-flex xs12>
        <v-card >
          <v-container fluid>
            <v-layout row>
              <v-flex xs5>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="white--text mb-0"> Name </h3>
                      <div>{{booking.first}} {{booking.last}}</div>
                    </div>
                  </v-card-title>

                    <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Age </h3>
                      <div>{{booking.age}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Location </h3>
                      <div>{{booking.city}}, {{booking.province}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Location </h3>
                      <div>{{booking.city}}, {{booking.province}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Shoot Type </h3>
                      <div>{{booking.shootType}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Date and Time </h3>
                      <div>{{booking.date}}, {{booking.time}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> E-mail </h3>
                      <div>{{booking.email}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Phone </h3>
                      <div>{{booking.phone}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Socials </h3>
                      <div>Instagram: {{booking.instagram}}</div>
                      <div>Facebook: {{booking.facebook}}</div>
                      <div>Twitter: {{booking.twitter}}</div>
                    </div>
                  </v-card-text>

                  <v-spacer></v-spacer>

                  <v-card-text>
                    <div>
                      <h3 class="white--text mb-0"> Contact </h3>
                      <div>{{booking.contact}}</div>
                    </div>
                  </v-card-text>

                    <v-spacer></v-spacer>

                  <v-card-text primary-title>
                    <div>
                      <h3 class="white--text mb-0"> Bio </h3>
                      <div>{{booking.bio}}</div>
                    </div>
                  </v-card-text>

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

