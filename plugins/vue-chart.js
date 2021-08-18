import Vue from 'vue'
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('doughnut-chart', {
	extends: Doughnut,
	mixins: [reactiveProp],
	props: ['options', 'height'],
	mounted () {
		this.renderChart(this.chartData, this.options, this.height)
	}
})