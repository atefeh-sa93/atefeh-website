<template>
  <v-app id="about">
    <v-container>
      <v-row>
        <v-col md="7" sm="7" xs="12">
          <div class="about-content">
            <div class="title">
              <h2 class="under_line">
                <span>{{ $t('general.home.about') }}</span>
              </h2>
              <p class="full_width">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tellus est, finibus ut congue sed, faucibus ut dui. Sed congue
                nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus
                quis laoreet elementum.
              </p>
            </div>
            <div class="about-details">
              <v-row>
                <v-col md="6" sm="6" xs="6">
                  <div class="about-details-item">
                    <div class="icon">
                      <v-icon size="35px">mdi-laptop</v-icon>
                    </div>
                    <div class="content">
                      <h5>Web Design</h5>
                      <p>
                        Hanky panky cracking goal don't get shirty with me nice
                        one bits and bobs.
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col md="6" sm="6" xs="6">
                  <div class="about-details-item">
                    <div class="icon">
                      <v-icon size="35px">mdi-tablet-ipad</v-icon>
                    </div>
                    <div class="content">
                      <h5>UI/UX Design</h5>
                      <p>
                        Hanky panky cracking goal don't get shirty with me nice
                        one bits and bobs.
                      </p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="portfolio-link">
              <v-btn dark large color="#5e1185">Portfolio</v-btn>
            </div>
          </div>
        </v-col>
        <v-col md="5" sm="5" xs="12">
          <div class="about-img">
            <div class="about-img-right">
              <img
                src="http://droitthemes.com/wp/mak/wp-content/uploads/2018/11/about_img.png"
                alt=""
              />
              <h2 class="name_title">Atefeh</h2>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.about-content {
  .title {
    margin-bottom: 70px;

    h2 {
      color: #ccc;
      padding-bottom: 25px;
      margin-bottom: 40px;
      letter-spacing: 0;

      &.under_line {
        position: relative;

        &::after {
          content: '';
          width: 60px;
          height: 2px;
          position: absolute;
          bottom: -5px;
          left: 4%;
          transform: translateX(-50%);
          background: #5e1185;
          left: 0;
          transform: translateX(0);
        }

        &::before {
          content: '';
          width: 100px;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 7%;
          transform: translateX(-50%);
          background: #5e1185;
          left: 0;
          transform: translateX(0);
        }
      }
    }

    p {
      color: #808899;
      padding-right: 50px;
      width: 100%;
      margin: 0 auto;
      letter-spacing: 0;

      &.full_width {
        max-width: 100%;
      }
    }
  }
}
.about-details-item {
  display: flex;
  align-items: baseline;
  margin-bottom: 70px;

  .content {
    margin-left: 10%;

    h5 {
      color: #cccccc;
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 18px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      color: #8a8fa3;
      margin-bottom: 30px;
      transition: all 0.3s;
      padding-right: 50px;
    }
  }
}
.about-img {
  position: relative;
  z-index: 10;

  &::before {
    position: absolute;
    content: '';
    bottom: -40px;
    right: -40px;
    width: 140px;
    height: 550px;
    background-image: linear-gradient(40deg, #5e1185 0%, #5e1185 100%);
  }

  &-right {
    position: relative;
    overflow: hidden;

    & .name_title {
      font-size: 200px;
      font-weight: 900;
      color: #fff;
      transform: rotate(-90deg);
      position: absolute;
      bottom: 160px;
      left: -315px;
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 768px) {
  .about-img {
    &::before {
      display: none;
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .about-details-item{
    display: block;
    text-align: center;
    .content{
      margin-left: unset;
      p{
        padding-right: unset;
      }
    }
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .portfolio-link{
    text-align: center;
  }
}
</style>
