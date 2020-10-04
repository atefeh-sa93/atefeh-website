<template>
  <div>
    <v-app>
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="12" lg="12" sm="12" cols="auto">
            <div class="title-wrapper">
              <span>Get In Touch</span>
            </div>
            <div class="title-content">
              <h2>Get In Touch</h2>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col
            md="4"
            lg="4"
            sm="4"
            cols="12"
            v-for="contact in contactInfo"
            :key="contact.title"
          >
            <div class="contact-info text-center">
              <div class="icon">
                <v-icon>{{ contact.icon }}</v-icon>
              </div>
              <div class="detail mt-3">
                <h3 class="black--text mb-0">{{ contact.title }}</h3>
                <small class="gray--text">{{ contact.detail }}</small>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col md="12" lg="12" sm="12" cols="12">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row align="center" justify="center">
                <v-col md="6" lg="6" sm="12" cols="12">
                  <v-text-field
                    v-model="firstName"
                    :counter="10"
                    label="FirstName"
                    required
                    placeholder="First name"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="6" lg="6" sm="12" cols="12">
                  <v-text-field
                    v-model="lastName"
                    :counter="10"
                    label="LastName"
                    placeholder="Last name"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col md="6" lg="6" sm="12" cols="12">
                  <v-text-field
                    v-model="email"
                    label="ENTER YOUR EMAIL"
                    required
                    placeholder="Eg. example@email.com"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="6" lg="6" sm="12" cols="12">
                  <v-text-field
                    v-model="phone"
                    label="ENTER PHONE NUMBER"
                    required
                    placeholder="Eg. +1 800 000000"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col md="12" lg="12" sm="12" cols="12">
                  <v-textarea
                    name="message"
                    label="MESSAGE"
                    value=""
                    placeholder="Write us a message"
                    outlined
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row class="text-center">
                <v-col md="12" lg="12" sm="12" cols="12">
                  <v-btn tile color="#5e1185" class="form-btn white--text"> Send Message </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      contactInfo: [
        {
          icon: 'mdi-phone',
          title: 'Call Me On',
          detail: '+123 456 7890',
        },
        {
          icon: 'mdi-map-marker',
          title: 'Visit Office',
          detail: '24 Street, New York, United State.',
        },
        {
          icon: 'mdi-send',
          title: 'Email Us At',
          detail: 'abc@gmail.com',
        },
      ],
      valid: false,
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:''

    }
  },
})
</script>

<style lang="scss">
.title-wrapper {
  text-align: center;
  font-size: 56px;
  font-weight: 900;
  color: rgba(#5e1185, 0.1);
  font-family: 'Poppins', sans-serif;
  margin-top: -18px;
}
.title-content {
  text-align: center;
  position: relative;
  top: -48px;

  h2 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 0;
    color: #5e1185;
  }
}

.contact-info {
  .v-icon {
    font-size: 50px;
    color: #5e1185;
  }
  small {
    color: #6c757d;
    font-weight: 400;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 992px) {
  .title-wrapper {
    font-size: 45px;
  }
  .title-content {
    margin-top: 5px;
  }
  .form-btn{
    margin-bottom: 250px;
  }
}
</style>
