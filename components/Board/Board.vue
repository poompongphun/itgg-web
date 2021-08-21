<template>
  <div class="board">
    <div class="gate-chart">
      <div class="chart">
        <Chart
          :height="250"
          :datacollection="collection"
          :images="require('~/assets/logo.png')"
        />
      </div>
    </div>
    <v-card
      class="leader-board mx-auto rounded-xl elevation-5"
      color="rgba(255, 255, 255, 0.8)"
      style="backdrop-filter: blur(5px)"
    >
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
      <v-tabs-items v-model="tab" style="background: none">
        <v-tab-item>
          <v-list style="background: none">
            <template v-for="(item, i) in items">
              <v-list-item
                :key="item.name"
                class="mx-2 my-1 rounded-lg"
                style="background: none"
                @click="showGate(item.name)"
              >
                <v-list-item-avatar>
                  <v-img v-if="i < 3" :src="getImages(i)"></v-img>
                  <span v-else class="other-num">{{ i + 1 }}</span>
                </v-list-item-avatar>

                <v-list-item-content>
                  <h3 :class="`${getColor(item.name, false)}--text`">
                    {{ item.name.toUpperCase() }}
                  </h3>
                  <v-list-item-subtitle>
                    {{ item.coin }} Tokens
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip
                    color="rgb(120, 120, 120)"
                    outlined
                    style="cursor: pointer"
                  >
                    <span>{{ item.player }}</span>
                    <v-icon class="ml-1">mdi-account</v-icon>
                  </v-chip>
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
                style="background-color: rgba(255, 255, 255, 0)"
                @click="showPlayer(player)"
              >
                <v-list-item-avatar tile>
                  <v-img v-if="i < 3" :src="getImages(i)"></v-img>
                  <span v-else class="other-num">{{ i + 1 }}</span>
                </v-list-item-avatar>

                <v-list-item-content>
                  <h3>{{ player.name }}</h3>
                  <v-list-item-subtitle>
                    {{ player.coin }} Tokens
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <div>
                    <v-chip color="primary" outlined style="cursor: pointer">
                      IT {{ player.year }}
                    </v-chip>
                    <v-chip v-if="player.discord_id !== ''" color="success" outlined style="cursor: pointer">
                      Verified
                    </v-chip>
                  </div>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
      <PlayerDialog ref="playerDialog" />
    </v-card>
  </div>
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
    images: {
      type: String,
      require: false,
      default: '',
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
        `/players?gate=${gate}&limit=1000`,
        { progress: false }
      )
      this.players = player
    },
    getImages(num) {
      if (num === 0) return require('~/assets/images/medal/medal-gold.png')
      else if (num === 1)
        return require('~/assets/images/medal/medal-silver.png')
      else return require('~/assets/images/medal/medal-bronze.png')
    },
    getColor(gate, code) {
      if (gate === 'and') return code ? 'rgba(50, 115, 219, 1)' : 'blue'
      else if (gate === 'or') return code ? 'rgba(139, 195, 74, 1)' : 'green'
      else if (gate === 'nor') return code ? 'rgba(219, 46, 28, 1)' : 'red'
      else if (gate === 'not') return code ? 'rgba(92, 45, 122, 1)' : 'purple'
    },
    getCollection(gate) {
      const gateLabel = []
      const gateToken = []
      const gateColor = []
      gate.forEach((data) => {
        gateLabel.push(data.name)
        gateToken.push(data.coin)
        gateColor.push(this.getColor(data.name, true))
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
      this.$refs.playerDialog.openDialog(player)
    },
  },
}
</script>

<style lang="scss" scoped>
.board {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 10vh 5px 0 5px;
  .gate-chart {
    position: relative;
    height: 40vh;
    margin: 0 auto;
    max-width: 500px;
    z-index: 1;
    pointer-events: none;
    .chart {
      position: absolute;
      bottom: -35px;
      width: 100%;
    }
  }
  .leader-board {
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    max-width: 500px;
    min-height: 50vh;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  .other-num {
    min-width: 30px;
    background: rgb(255, 255, 255);
    border: 3px solid rgba(70, 70, 70, 0.8);
    height: 30px;
    border-radius: 12px;
    color: rgb(70, 70, 70);
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
