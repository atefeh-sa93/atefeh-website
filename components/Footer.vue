<template>
   <div>
     <v-footer padless dark absolute>
        <v-container>
          <div>
            <div class="text-center my-4">
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="text-center my-4">
              <p>{{ new Date().getFullYear() }} — <strong>{{$t('general.home.name')}}</strong></p>
            </div>
          </div>
        </v-container>
      </v-footer>
   </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
})
</script>
