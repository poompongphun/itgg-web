<template>
  <v-app>
    <v-app-bar
      class="Create-By-PoomPongphun"
      fixed
      :color="`rgba(255, 255, 255, ${isTop ? '0' : '0.8'})`"
      shrink-on-scroll
      height="80"
      elevate-on-scroll
      :dark="$vuetify.theme.dark"
    >
      <v-container class="pa-0 fill-height">
        <v-btn
          class="text-capitalize px-2"
          text
          rounded
          large
          @click="$router.push('/')"
        >
          <v-img :src="require('~/assets/logo.png')" width="40"></v-img>
          <v-toolbar-title
            class="font-weight-bold ml-1"
            :class="{ 'white--text': isTop }"
            style="font-size: 1.3rem"
          >
            ITGG2021
          </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn icon to="/signin">
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
      </v-container>
    </v-app-bar>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isTop: true,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isTop = !(window.scrollY > 0)
    },
  },
}
</script>
