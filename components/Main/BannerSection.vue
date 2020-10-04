<template>
  <div>
    <v-app>
      <div class="banner-wrapper">
        <v-container>
          <div class="banner-wrapper-content">
            <h4>
              {{ $t('general.home.me') }}
              <span>{{ $t('general.home.name') }}</span>
            </h4>
            <div class="banner-wrapper-content-text">
              <h2>
                <span id="tag-content">{{ displayText.join('') }}</span>
                <span class="text-cursor">|</span>
              </h2>
            </div>
            <v-btn outlined color="white">{{
              $t('general.home.contact')
            }}</v-btn>
          </div>
        </v-container>
      </div>
    </v-app>
  </div>
</template>

<script land="ts">
import Vue from 'vue'
let i = 0
let timer
export default Vue.extend({
  data() {
    return {
      displayText: [],
      currentWord: '',
      wordIdx: 0,
      speed: 200,
      deleteSpeed: 200,
      words: ['Web Developer', 'Web Designer', 'Photographer'],
    }
  },

  computed: {
    // can adjust speeds based on other factors if needed
    TYPE_SPEED() {
      return this.speed
    },
    DELETE_SPEED() {
      return this.deleteSpeed
    },
    timeoutSpeed() {
      return this.TYPE_SPEED * 0.8
    },
  },

  mounted() {
    this.start()
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split('')
        this.wordIdx++
        this.animate = setTimeout(this.type, this.timeoutSpeed)
      }
    },
    type(word) {
      // if typing...
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift())
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.displayText.pop()
        // if done typing & deleting
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        // change words
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split('')
          this.wordIdx++
          this.displayText.push(this.currentWord.shift())
        } else {
          // reset
          this.wordIdx = 0
          this.currentWord = this.words[this.wordIdx].split('')
          this.displayText.push(this.currentWord.shift())
        }
      }
      setTimeout(this.type, this.timeoutSpeed)
    },
  },
})
</script>

<style lang="scss">
.banner-wrapper {
  background: url('https://demo.w3layouts.com/demosWTR/Freedom/30-01-2020/weird-freedom-demo_Free/433096426/web/assets/images/b1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  min-height: 95vh;
  z-index: 0;
  position: relative;
  display: grid;
  align-items: center;

  &::before {
    width: 100%;
    content: '';
    background: rgba(25, 25, 25, 0.82);
    position: absolute;
    top: 0px;
    bottom: 0px;
    opacity: 0.6;
    z-index: -1;
  }

  &-content {
    h4 {
      font-size: 30px;
      color: #f7f7f7;
      font-weight: 800;
    }
    h2 {
      font-size: 40px;
      line-height: 90px;
      color: #f7f7f7;
      font-weight: 400;
      margin-bottom: 10px;
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}


</style>
