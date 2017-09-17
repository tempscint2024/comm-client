<template>

  <v-container>

    <v-layout row wrap>

      <v-flex xs12>

        <v-text-field
          solo
          label="Search"
          append-icon="keyboard_voice"
          prepend-icon="search"
          class="mb-4"
        >

        </v-text-field>


        <v-tabs dark  icons>
          <v-tabs-bar class="cyan">
            <v-tabs-slider class="yellow"></v-tabs-slider>

            <v-tabs-item
              v-for="(productCategory, i) in productCategories"
              :key="i"
              :href="'#tab-' + i"
            >

              <v-icon>{{ productCategory.icon }}</v-icon>

              {{ productCategory.name }}

            </v-tabs-item>

          </v-tabs-bar>

          <v-tabs-items>
            <v-tabs-content
              v-for="(productCategory, i) in productCategories"
              :key="i"
              :id="'tab-' + i"
            >
              <v-card flat>

                <v-container>

                  <v-layout row>

                    <v-flex sm6 xs12>
                      <v-card-media :src="productCategory.src" height="150px"></v-card-media>
                    </v-flex>
                    <v-flex sm6 class="hidden-xs-only">
                      <v-card-text class="mt-0">

                        <div>
                          <div class="">Supermodel</div>
                          <div>{{ text }}</div>
                        </div>

                      </v-card-text>
                    </v-flex>

                  </v-layout>



                </v-container>



              </v-card>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>





        <v-card flat>
          <v-card-text class="mt-4 mb-2 pa-1 pb-1 pt-3">
            <h6>Electronics</h6>
          </v-card-text>
        </v-card>

        <slick ref="slick" :options="slickOptions">


          <v-card v-for="(slickImage, i) in slickImages"  :key="i" class="ma-1 elevation-4" style="cursor: pointer">
            <v-card-media v-bind:src="slickImage.src" height="180px">

            </v-card-media>

            <v-card-text class="blue-grey lighten-3">
              <div>
                <div class=" mb-0">Sony IPX </div>
                <div>Located two hours south of Sydney.</div>
              </div>
            </v-card-text>

            <v-card-actions class="teal darken-1">
              <v-btn class="green lighten-2 white--text">
                <v-icon left dark>add_shopping_cart</v-icon>
                <v-icon >monetization_on</v-icon> 420
              </v-btn>


            </v-card-actions>
          </v-card>

        </slick>


      </v-flex>


    </v-layout>


  </v-container>


</template>

<script>
  import Slick from 'vue-slick'
  export default {
    components: { Slick },
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .   ex ea commodo consequat.',
        slickOptions: {
          slidesToShow: 4,
          slidesToScroll: 1,
          accessibility: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 260,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        },

        slickImages: [
          {
            src: 'static/img/slick/arduino-2.jpg'
          },
          {
            src: 'static/img/slick/epson-proj.jpg'
          },
          {
            src: 'static/img/slick/mac-book.jpg'
          },
          {
            src: 'static/img/slick/sony-cam.jpg'
          },
          {
            src: 'static/img/slick/projector-sony.jpg'
          },
          {
            src: 'static/img/slick/win-machine.jpg'
          }
        ],

        productCategories: [
          {
            name: 'Fashion',
            icon: 'toys',
            src: 'static/img/carousel/fashion.jpg'
          },
          {
            name: 'Electronics',
            icon: 'important_devices',
            src: 'static/img/carousel/electronics.png'
          },
          {
            name: 'Cosmetics',
            icon: 'filter_vintage',
            src: 'static/img/carousel/jewellery.jpg'
          }
        ]
      }
    },

    methods: {
      next () {
        this.$refs.slick.next()
      },

      prev () {
        this.$refs.slick.prev()
      },

      reInit () {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$refs.slick.reSlick()
      }
    }
  }
</script>

<style scoped>
  @import '~slick-carousel/slick/slick.css';
  @import '~slick-carousel/slick/slick-theme.css';


  /* Icons */
  @font-face
  {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('~slick-carousel/slick/fonts/slick.eot');
    src: url('~slick-carousel/slick/fonts/slick.eot?#iefix') format('embedded-opentype'), url('~slick-carousel/slick/fonts/slick.woff') format('woff'), url('~slick-carousel/slick/fonts/slick.ttf') format('truetype'), url('~slick-carousel/slick/fonts/slick.svg#slick') format('svg');
  }

</style>
