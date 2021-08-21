<template>
  <div>
    <div v-if="images !== ''" class="chart-img">
      <v-img class="mt-2" :src="images" height="100%" contain></v-img>
    </div>
    <client-only>
      <doughnut-chart
        :chart-data="collection"
        :options="options"
        :height="height"
      ></doughnut-chart>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      require: false,
      default: null,
    },
    datacollection: {
      type: Object,
      require: true,
      default: null,
    },
    options: {
      type: Object,
      require: false,
      default: () => ({
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        animation: {
          animateScale: false,
        },
        onClick: (event, chart) => {
          // this.$emit('onclick', chart[0]._index)
        },
      }),
    },
    images: {
      type: String,
      require: false,
      default: '',
    },
  },
  data: () => ({
    collection: {
      labels: ['One', 'Two', 'Three', 'Four'],
      datasets: [
        {
          label: '# of Votes',
          data: [1, 1, 1, 1],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
          ],
          borderColor: [
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
          ],
          borderWidth: 1,
          // hoverBorderWidth: 3,
        },
      ],
    },
  }),
  watch: {
    datacollection(val) {
      this.collection = val
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-img {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  padding: 0 32%;
}
</style>