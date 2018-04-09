<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      bottom
      color="success"
    >
      <span>Booking Successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form @submit.prevent="submit" ref="form">
      <v-container grid-list-xl fluid>
        <h1 class="title">Book a session with us</h1>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              label="First name"
              required
              v-model="first"
              :rules="rules.name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Last name"
              v-model="last"
              required
              :rules="rules.name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Age (Be Honest)"
              v-model="age"
              required
              :items="ages"
              :rules="rules.age"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="City"
              v-model="city"
              required
              :rules="rules.city"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Province"
              v-model="province"
              required
              :items="provinces"
              :rules="rules.province"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Shoot Type"
              v-model="shootType"
              required
              :items="shootTypes"
              :rules="rules.shootType"
            ></v-select>
          </v-flex>
          <v-flex
        xs11
        sm5>
        <v-menu
          ref="dMenu"
          lazy
          :close-on-content-click="false"
          v-model="dateMenu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="date">
          <v-text-field
            slot="activator"
            label="Date of Shoot"
            v-model="date"
            prepend-icon="event"
            readonly/>
          <v-date-picker
            v-model="date"
            scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dateMenu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dMenu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex
        xs11
        sm5>
        <v-menu
          ref="tMenu"
          lazy
          :close-on-content-click="false"
          v-model="timeMenu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
          :return-value.sync="time">
          <v-text-field
            slot="activator"
            label="Time of Shoot"
            v-model="formattedTime"
            prepend-icon="access_time"
            readonly/>
          <v-time-picker
            v-model="time">
            <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="timeMenu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.tMenu.save(time)">OK</v-btn></v-time-picker>
        </v-menu>
      </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm5>
            <v-text-field
              name="input-1-3"
              label="Phone"
              single-line
              prepend-icon="phone"
              v-model="phone"
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6>
            <v-text-field
              v-model="instagram"
            >
            <div slot="label">
                Instagram <small>(optional, but we'll follow you)</small>
              </div></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Facebook"
              v-model="facebook"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="twitter"
            >
            <div slot="label">
                Twitter <small>(optional, but we'll follow you)</small>
              </div></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="How can we contact you?"
              v-model="contact"
              required
              :items="contacts"
              :rules="rules.contact"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              multi-line
              v-model="bio"
            >
              <div slot="label">
                Tell us a bit about yourself and the shoot <small>(optional)</small>
              </div>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-checkbox
              color="green"
              v-model="form.terms"
            >
              <div slot="label">
                Do you accept the
                <a href="javascript:;" @click.stop="terms = true">terms</a>
                and
                <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
              </div>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          type="submit"
          :disabled="!formIsValid"
        >Book Session</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Terms</v-card-title>
        <v-card-text>
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="terms = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text>
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="conditions = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        age: '',
        city: '',
        province: '',
        shootType: '',
        date: null,
        time: null,
        email: '',
        phone: '',
        instagram: '',
        facebook: '',
        twitter: '',
        contact: '',
        bio: ''
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
          city: [val => (val || '').length > 0 || 'This field is required'],
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
        provinces: ['Saskatchewan', 'Alberta', 'British Coloumbia', 'Ontario', 'Quebec', 'Nova Scotia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador'],
        shootTypes: ['Graduation', 'Fashion', 'Family', 'Personal', 'Boudoir'],
        contacts: ['Email', 'Phone', 'Instagram', 'Facebook', 'Twitter'],
        ages: ['18 - 23', '24 - 30', '30 - 40', '40 - 50', '50 - 60', '0ver 60'],

        conditions: false,
        content: `THE INFORMATION PROVIDED ABOVE IS TRUE!`,
        snackbar: false,
        terms: false,
        dateMenu: false,
        timeMenu: false,
        defaultForm,

        first: '',
        last: '',
        age: '',
        city: '',
        province: '',
        shootType: '',
        date: null,
        time: null,
        email: '',
        phone: '',
        instagram: '',
        facebook: '',
        twitter: '',
        contact: '',
        bio: ''
      }
    },

    computed: {
      formIsValid () {
        return (
          this.first &&
          this.last &&
          this.city &&
          this.form.terms
        )
      },
      formattedTime () {
        if (this.time) {
          const timeFrags = this.time.split(':')
          const timeFormatted = (timeFrags[0] > 12 ? timeFrags[0] - 12 : timeFrags[0]) + ':' + timeFrags[1] + (timeFrags[0] > 12 ? ' PM' : ' AM')
          return timeFormatted
        }
        return this.time
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        const bookingData = {
          first: this.first,
          last: this.last,
          age: this.age,
          city: this.city,
          province: this.province,
          shootType: this.shootType,
          date: this.date,
          time: this.time,
          email: this.email,
          phone: this.phone,
          instagram: this.instagram,
          facebook: this.facebook,
          twitter: this.twitter,
          contact: this.contact,
          bio: this.bio
        }
        this.snackbar = true
        this.$store.dispatch('createBooking', bookingData)
        this.resetForm()
      }
    }
  }
</script>
