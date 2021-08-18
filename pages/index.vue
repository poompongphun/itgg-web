<template>
  <v-row class="px-1 background" justify="center" align="center" no-gutters>
    <v-col class="fill-height">
      <Board :items="items" />
    </v-col>
  </v-row>
</template>

<script>
import Board from '~/components/Board/Board'
export default {
  components: { Board },
  data: () => ({
    items: [
      { gate: 'nor', tokens: 20 },
      { gate: 'or', tokens: 10 },
      { gate: 'not', tokens: 7 },
      { gate: 'and', tokens: 5 },
    ],
  }),
  methods: {},
}
</script>

<style lang="scss" scoped>
// .background {
// background-image: url('/images/background.jpg');
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center center;
// }
</style>
