<template>

  <v-container>

    <v-layout row wrap>

      <v-flex>

        <v-text-field
          solo
          label="Search"
          append-icon="keyboard_voice"
          prepend-icon="search"
          class="mb-4"
        >

        </v-text-field>

        <v-carousel style="height: 300px">
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>


    </v-layout>


  </v-container>


</template>

<script>
  export default {

    data () {
      return {
        items: [
          {
            src: 'static/img/carousel/fashion.jpg'
          },
          {
            src: 'static/img/carousel/electronics.png'
          },
          {
            src: 'static/img/carousel/jewellery.jpg'
          }
        ]
      }
    },

    methods: {}
  }
</script>

<style scoped>


</style>
