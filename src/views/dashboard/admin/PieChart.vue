<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '330px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: 'Revenue for Previous Months',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b.toLocaleString()} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['January', 'February', 'March', 'April', 'May']
        },
        series: [
          {
            name: 'CURRENT REVENUE',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 90],
            center: ['50%', '50%'],
            data: [
              { value: 320000, name: 'January' },
              { value: 240000, name: 'February' },
              { value: 149000, name: 'March' },
              { value: 100000, name: 'April' },
              { value: 59000, name: 'May' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
