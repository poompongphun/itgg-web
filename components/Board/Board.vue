<template>
  <v-card
    class="mx-auto rounded-xl leader-board elevation-5"
    color="rgba(255, 255, 255, 0.8)"
    style="backdrop-filter: blur(5px)"
  >
    <div class="gate-chart">
      <Chart :height="250" :datacollection="collection" />
    </div>
    <v-row class="pt-2 px-2" justify="space-between" no-gutters>
      <v-btn color="purple" icon :disabled="tab == 0" @click="tab = 0">
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-btn
        color="purple"
        icon
        :disabled="tab == 1 || players.length == 0"
        @click="tab = 1"
      >
        <v-icon>mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-row>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-list color="rgba(255, 255, 255, 0.0)">
          <template v-for="(item, i) in items">
            <v-list-item
              :key="item.gate"
              class="mx-2 my-1 rounded-lg"
              style="background-color: rgba(255, 255, 255, 0.3)"
              @click="showGate(item.gate)"
            >
              <v-list-item-avatar>
                <v-img v-if="i < 3" :src="getImages(i)"></v-img>
                <h2 v-else class="other-num">{{ i + 1 }}</h2>
              </v-list-item-avatar>

              <v-list-item-content>
                <h3 :class="`${getColor(item.gate, false)}--text`">
                  {{ item.gate.toUpperCase() }}
                </h3>
                <v-list-item-subtitle>
                  {{ item.tokens }} Tokens
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-tab-item>
      <v-tab-item>
        <div v-if="players.length == 0" class="loading">
          <v-progress-circular
            indeterminate
            color="purple"
          ></v-progress-circular>
        </div>
        <v-list v-else color="rgba(255, 255, 255, 0.0)">
          <template v-for="(player, i) in players">
            <v-list-item
              :key="player.std_id"
              class="mx-2 my-1 rounded-lg"
              style="background-color: rgba(255, 255, 255, 0.3)"
              @click="showPlayer(player)"
            >
              <v-list-item-avatar tile>
                <v-img v-if="i < 3" :src="getImages(i)"></v-img>
                <h2 v-else class="other-num">{{ i + 1 }}</h2>
              </v-list-item-avatar>

              <v-list-item-content>
                <h3>{{ player.name }}</h3>
                <v-list-item-subtitle>
                  {{ player.coin }} Tokens
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
    <PlayerDialog ref="playerDialog" />
  </v-card>
</template>

<script>
import Chart from '~/components/Board/Chart'
import PlayerDialog from '~/components/Board/PlayerDialog'
export default {
  components: { Chart, PlayerDialog },
  props: {
    items: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data: () => ({
    players: [],
    tab: 0,
    collection: null,
  }),
  mounted() {
    this.getCollection(this.items)
  },
  methods: {
    async showGate(gate) {
      this.players = []
      this.tab = 1
      const player = await this.$axios.$get(
        `https://itgg.herokuapp.com/players?gate=${gate}`,
        { progress: false }
      )
      this.players = player
    },
    getImages(num) {
      if (num === 0) return '/images/medal/medal-gold.png'
      else if (num === 1) return '/images/medal/medal-silver.png'
      else return '/images/medal/medal-bronze.png'
    },
    getColor(gate, code) {
      if (gate === 'and') return code ? 'rgba(50, 115, 219, 0.9)' : 'blue'
      else if (gate === 'or') return code ? 'rgba(0, 171, 0, 0.9)' : 'green'
      else if (gate === 'nor') return code ? 'rgba(219, 46, 28, 0.9)' : 'red'
      else if (gate === 'not')
        return code ? 'rgba(92, 45, 122, 0.9)' : 'purple'
    },
    getCollection(gate) {
      const gateLabel = []
      const gateToken = []
      const gateColor = []
      gate.forEach((data) => {
        gateLabel.push(data.gate)
        gateToken.push(data.tokens)
        gateColor.push(this.getColor(data.gate, true))
      })
      this.collection = {
        labels: gateLabel,
        datasets: [
          {
            label: 'Token of Gate',
            data: gateToken,
            backgroundColor: gateColor,
            borderColor: ['rgba(255, 255, 255)'],
            borderWidth: 1,
          },
        ],
      }
    },
    showPlayer(player) {
      console.log(player)
      this.$refs.playerDialog.openDialog(player)
    },
  },
}
</script>

<style lang="scss" scoped>
.gate-chart {
  position: absolute;
  margin-top: -275px;
  width: 100%;
}
.leader-board {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  max-width: 500px;
  top: 50vh;
  min-height: 50vh;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}
.other-num {
  width: 30px;
  background: rgba(128, 128, 128, 0.3);
  height: 30px;
  border-radius: 100px;
  color: rgb(70, 70, 70);
}
@media screen and (max-width: 520px) {
  .gate-chart {
    bottom: 90%;
  }
}
</style>
