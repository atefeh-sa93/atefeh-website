<template>
  <div>
    <v-app>
      <v-parallax
        dark
        src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/mix-liberty-demo_Free/540154905/web/assets/images/mainslide3.jpg"
        height="100%"
      >
        <div class="service-title text-center">
          <h3 class="black--text text-uppercase">Services</h3>
        </div>
        <v-row align="center" justify="center">
            <v-col lg="3" md="3" sm="6" xs="12" v-for="service in services" :key="service.name">
              <div class="service-item text-center">
                <v-icon size="40px">{{ service.icon }}</v-icon>
                <h3>{{ service.name }}</h3>
                <p>{{ service.desc }}</p>
              </div>
            </v-col>
          </v-row>
      </v-parallax>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      services: [
        {
          icon: 'mdi-laptop',
          name: 'Web Development',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac',
        },
        {
          icon: 'mdi-camera',
          name: 'Photography',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac',
        },
        {
          icon: 'mdi-pencil-ruler',
          name: 'Friendly Design',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.service-title {
  margin-top: 70px;
  h3 {
    font-weight: 700;
    font-size: 40px;
    margin: 0 0 10px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    z-index: 1;
    padding: 0 0 10px;

    &::before {
      content: '';
      width: 100px;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #5e1185;
    }

    &::after {
      content: '';
      width: 60px;
      height: 2px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      background: #5e1185;
    }
  }
}
.v-parallax {
  height: 80vh !important;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(#c4c4c4, 0.9),
      rgba(#808080, 0.8)
    );
    opacity: 0.7;
    z-index: 10;
  }
}

.v-parallax__content {
  z-index: 15;

  .service-item {
    padding: 60px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    transition: 0.3s;
    background: #fff;
    color: #000;
    position: relative;
    z-index: 15;
    transition: all 300ms ease-in-out;
    

    &:hover::before {
      width: 100%;
      height: 100%;
      visibility: visible;
    }

    &::before {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #5e1185;
      border-right: 2px solid #5e1185;
      content: '';
      width: 0;
      height: 0;
      visibility: hidden;
      position: absolute;
      transition: all 800ms ease-in-out;
      border-radius: 8px;
    }

    &:after,
    &:before {
      content: '';
      width: 0;
      height: 0;
      visibility: hidden;
      position: absolute;
      transition: all 800ms ease-in-out;
      border-radius: 8px;
    }

    &:after {
      top: 0;
      left: 0;
      border-top: 2px solid #5e1185;
      border-left: 2px solid #5e1185;
    }

    &:hover:after,
    &:hover:before {
      width: 100%;
      height: 100%;
      visibility: visible;
    }

    .v-icon {
      color: #5e1185;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #2c2c2c;
      padding-bottom: 12px;
    }

    p {
      color: #727272;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      margin-bottom: 0;
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 992px) {
  .v-parallax{
    height: 100% !important;
  }
}
</style>
