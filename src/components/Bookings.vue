<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
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
              v-model="form.first"
              :rules="rules.name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Last name"
              v-model="form.last"
              required
              :rules="rules.name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-slider
              color="orange"
              label="Age"
              hint="Be honest"
              min="1"
              max="100"
              thumb-label
              v-model="form.age"
              :rules="rules.age"
            ></v-slider>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="City"
              v-model="form.city"
              required
              :rules="rules.city"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Province"
              v-model="form.province"
              required
              :items="province"
              :rules="rules.province"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Shoot Type"
              v-model="form.shootType"
              required
              :items="shootType"
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
              v-model="form.contact"
              required
              :items="contact"
              :rules="rules.contact"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              multi-line
              v-model="form.bio"
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
          flat
          color="primary"
          type="submit"
          :disabled="!formIsValid"
        >Book Session</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Terms</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="purple"
            @click="terms = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="purple"
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
        bio: '',
        city: '',
        province: '',
        shootType: '',
        contact: '',
        age: null,
        instagram: '',
        facebook: '',
        twitter: '',
        date: null,
        time: null,
        email: ''
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
            val => val < 10 || `I don't believe you!`
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
          city: [val => (val || '').length > 0 || 'This field is required'],
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
        province: ['Saskatchewan', 'Alberta', 'British Coloumbia', 'Ontario', 'Quebec', 'Nova Scotia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador'],
        shootType: ['Graduation', 'Fashion', 'Family', 'Personal', 'Boudoir'],
        contact: ['Email', 'Phone', 'Instagram', 'Facebook', 'Twitter'],
        conditions: false,
        content: `Hello`,
        snackbar: false,
        terms: false,
        defaultForm,
        instagram: '',
        facebook: '',
        twitter: '',
        date: null,
        time: null,
        dateMenu: false,
        timeMenu: false,
        email: ''
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.city &&
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
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>
