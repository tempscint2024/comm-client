<template>
  <v-app light>

    <v-navigation-drawer absolute persistent light v-model="drawer" overflow>

      <v-toolbar flat class="transparent" >
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
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" @click="" :to="item.link">
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




      <!-- dialog for items in shopping cart-->
      <v-dialog
              v-model="dialog"
              lazy absolute
              width="75%"
      >
        <!--shopping cart-->
        <v-btn icon slot="activator">
          <v-icon v-badge:icon.overlap="{ value: 6,}"
                  class="text--darken-1 red--after white--text">shopping_cart</v-icon>
        </v-btn>

        <v-card>
          <v-card-title>
              <span class="title">
                  <v-icon class="pr-1">shopping_cart</v-icon>
                  Your cart
              </span>


            <v-spacer></v-spacer>
            <v-btn icon  @click.native="dialog = false">
              <v-icon>clear</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-title>
              <span class="body-2">
                  Your card is empty
              </span>
              <v-spacer></v-spacer>
              <span class="red--text"
                    style="cursor: pointer"
              >
                  Clear all
              </span>

          </v-card-title>
          <v-container grid-list-md>
              <v-card class="pt-3 pb-3 pr-3 pl-3">
                  <v-layout wrap>
                      <v-flex xs12 sm5 md4 >
                          <v-card>
                              <v-card-media
                                      src="http://i.ebayimg.com/00/s/NTAwWDc4Ng==/z/Y4gAAOSwcwhVLjb8/$_32.JPG"
                                      height="130px"
                                      contain
                                      class="hidden-md-and-up"
                              >
                              </v-card-media>
                              <v-card-media
                                      src="http://i.ebayimg.com/00/s/NTAwWDc4Ng==/z/Y4gAAOSwcwhVLjb8/$_32.JPG"
                                      height="175px"
                                      contain
                                      class="hidden-sm-and-down"
                              >
                              </v-card-media>
                          </v-card>
                      </v-flex>

                      <v-flex xs12 sm7 md8>
                          <!--name of the itme-->
                          <p class="body-2">Red Puma suede</p>
                          <!--Quantity of item and button for value changing-->
                          <p class="body-2">Quantity : <v-btn icon><v-icon>add_box</v-icon></v-btn>  <b>1</b> <v-btn icon><v-icon>indeterminate_check_box</v-icon></v-btn></p>
                          <!--price of the item-->
                          <p class=""><v-icon class="pr-1">monetization_on</v-icon><b>49.00</b></p>
                          <!--remove item-->
                          <p class="red--text body-2"
                             style="cursor: pointer"
                          >Remove item</p>

                      </v-flex>

                  </v-layout>
              </v-card>

          </v-container>

          </v-card-text>
          <v-card-actions>
              <v-flex xs12 sm12 md6 offset-md3 class="text-xs-center">
                      <v-btn
                              class="green white--text pr-4 pl-3"
                      >Checkout <v-icon class="pl-1">monetization_on</v-icon>49.00</v-btn>
              </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <main>

        <v-container fluid>

          <router-view></router-view>

        </v-container>



    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', link: '/' },
          { title: 'About', icon: 'question_answer', link: '' },
          { title: 'Sign In', icon: 'person', link: '/Shared/SignIn' },
          { title: 'Sign Up', icon: 'person_add', link: '/User/SignUp' },
          { title: 'Help', icon: 'question_answer' }
        ],
        itemsSelected: [],
        dialog: false,
        right: null,
        title: 'ShopIt',
        authenticate: false

      }
    }
  }
</script>

<style lang="stylus">

  @import './stylus/main.styl'
  @import './stylus/main'

  .toolbar-title {
    font-family : "M+ 2m regular";
    font-size : 22px;
  }
</style>
