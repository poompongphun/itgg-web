<template>
  <v-app>
    <v-app-bar
      fixed
      :color="
        $vuetify.theme.dark
          ? `rgba(22, 22, 22, ${isTop ? '0' : '0.8'})`
          : `rgba(255, 255, 255, ${isTop ? '0' : '0.8'})`
      "
      elevate-on-scroll
      :dark="$vuetify.theme.dark"
    >
      <v-container class="pa-0 fill-height">
        <v-toolbar-title @click="$router.push('/')">ITGG</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
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
