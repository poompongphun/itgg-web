<template>
  <v-dialog
    v-model="dialog"
    scrollable
    transition="dialog-transition"
    width="500"
  >
    <v-card v-if="playerData != null" class="pa-4" rounded="xl">
      <v-btn
        icon
        absolute
        right
        aria-label="close"
        style="z-index: 1"
        @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="text-center">
        <h2 class="py-4">{{ playerData.name }} ({{ playerData.nickname }})</h2>
        <!-- <v-avatar class="my-3" size="150" color="grey">
          <v-img src="https://www.blexar.com/avatar.png" alt="alt" />
        </v-avatar> -->
        <h1
          :class="`my-token rounded-xl ${getColor(
            playerData.house,
            false
          )}--text`"
        >
          {{ playerData.coin }} Tokens
        </h1>
      </div>
      <v-card class="rounded-xl">
        <div class="pa-1">
          <v-btn color="grey" block text rounded @click="showLog = !showLog">
            Show Coins Log
            <v-icon v-if="showLog">mdi-chevron-up</v-icon>
            <v-icon v-else>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
        <v-expand-transition>
          <v-list v-show="showLog" class="overflow-auto" max-height="300">
            <template v-for="(log, i) in playerData.coinlog">
              <v-list-item :key="i">
                <v-list-item-content>
                  <h3>{{ log.event }}</h3>
                  <v-list-item-subtitle>
                    {{ log.giver }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <span :class="`${log.coin >= 0 ? 'green' : 'red'}--text`">
                    {{ `${log.coin >= 0 ? '+' : '-'}` + log.coin }} Tokens
                  </span>
                </v-list-item-action>
              </v-list-item>
            </template>
            <h4
              v-if="playerData.coinlog.length === 0"
              class="text-center grey--text lighten-1 py-5"
            >
              No Data.
            </h4>
          </v-list>
        </v-expand-transition>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    tab: 0,
    playerData: null,
    showLog: false,
  }),
  methods: {
    openDialog(player) {
      this.dialog = true
      this.playerData = player
    },
    getColor(gate, code) {
      if (gate === 'and') return code ? 'rgba(50, 115, 219, 0.1)' : 'blue'
      else if (gate === 'or') return code ? 'rgba(0, 171, 0, 1)' : 'green'
      else if (gate === 'nor') return code ? 'rgba(219, 46, 28, 1)' : 'red'
      else if (gate === 'not')
        return code ? 'rgba(92, 45, 122, 1)' : 'purple'
    },
  },
}
</script>

<style lang="scss">
.my-token {
  padding: 40px 0 40px 0;
  margin: 10px 0 30px 0;
  background: rgba(212, 212, 212, 0.3);
}
</style>
