<template>
  <div>
    <v-app>
      <!--Header Part!-->
    <Header />
    <!--Main Part!-->
    <Nuxt />
    <!--Footer Part!-->
    <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default Vue.extend({
  components: {
    Header,
    Footer
  },
})
</script>
