<template>
  <div>
    <div class="background2"></div>
    <div
      class="background"
      :style="`background-image: url(${require('~/assets/images/space/BG2.jpg')});`"
    >
      <v-row
        v-if="$vuetify.breakpoint.mdAndUp"
        style="height: 70vh"
        justify="center"
        align="center"
      >
        <v-img
          class="sun mr-15 ml-n15"
          :src="require('~/assets/images/space/Sun.png')"
          height="250"
          width="250"
          contain
        ></v-img>
        <v-img
          class="saturn ml-15 mr-n15"
          :src="require('~/assets/images/space/Saturn.png')"
          height="250"
          width="250"
          contain
        ></v-img>
      </v-row>
    </div>
    <v-row justify="center" align="center" no-gutters>
      <v-col class="fill-height">
        <Board ref="gateBoard" :items="items" :images="gateImg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Board from '~/components/Board/Board'
const image = window.location.href + 'background.jpg'
export default {
  components: { Board },
  async asyncData({ $axios, req }) {
    const gate = await $axios.$get('/')
    gate.sort((a, b) => b.coin - a.coin)
    return { items: gate }
  },
  data: () => ({
    gateImg: '',
    timer: '',
  }),
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'ITGG2021',
        },
      ],
    }
  },
  created() {
    this.fetchEventsList()
    this.timer = setInterval(this.fetchEventsList, 30000)
  },
  mounted() {
    this.gateImg = this.gateImages('not')
    // this.gateImg = this.gateImages(this.items[0].name)
  },
  beforeDestroy() {
    this.cancelAutoUpdate()
  },
  methods: {
    gateImages(gate) {
      if (gate === 'and') return '/gate/and.png'
      else if (gate === 'or') return '/gate/or.png'
      else if (gate === 'nor') return '/gate/nor.png'
      else if (gate === 'not') return '/gate/not.png'
    },
    async fetchEventsList() {
      const updateData = await this.$axios.$get('/', { progress: false })
      updateData.sort((a, b) => b.coin - a.coin)
      this.$refs.gateBoard.getCollection(updateData)
      this.items = updateData
    },
    cancelAutoUpdate() {
      clearInterval(this.timer)
    },
  },
}
</script>

<style lang="scss" scoped>
.background {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  height: 80vh;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(87, 0, 131, 0.8) 0%,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 0) 85%,
      rgba(22, 153, 172, 1) 100%
    );
    z-index: 0;
  }
}
.background2 {
  background: linear-gradient(
    to bottom,
    rgba(22, 153, 172, 1) 80%,
    rgba(22, 152, 172, 0.6) 100%
  );
  position: absolute;
  width: 100%;
  // margin-top: 80vh;
  height: 100%;
}
</style>
