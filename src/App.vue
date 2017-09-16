<template>
  <v-app light>

    <v-navigation-drawer absolute persistent light v-model="drawer" overflow>
      <v-toolbar flat class="transparent" v-if="authenticate">
        <v-list class="pa-0" >
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="static/img/avatar-image.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Eddy WM</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense v-else>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="toolbar-title hidden-sm-and-down">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon v-badge="{ value: 6, left: true, }">shopping_cart</v-icon>
        </v-btn>

    </v-toolbar>
    <main>

        <router-view></router-view>

    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null,
        title: 'ShopIt',
        authenticate: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .toolbar-title {
    font-family : "M+ 2m regular";
    font-size : 22px;
  }
</style>
