<template>
  <div>
    <v-card flat tile>
      <v-toolbar dense color="#2b2c2c">
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

        <v-toolbar-title class="white--text">AtfiSA</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="item in nav"
            :key="item.icon"
            :to="item.link"
            text
            color="white"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
              color="white"
              class="hidden-sm-and-up"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in nav" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      dialog: false,
      nav: [
        {
          icon:'home',
          title: 'Home',
          active: true,
        },
        {
          icon:'about',
          title: 'About',
          active: false,
        },
        {
          icon:'services',
          title: 'Services',
          active: false,
        },
        {
          icon:'blogs',
          title: 'Blogs',
          active: false,
        },
        {
          icon:'contact',
          title: 'Contact',
          active: false,
        },
      ],
    }
  },
})
</script>
