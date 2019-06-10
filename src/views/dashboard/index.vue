<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-row :gutter="50" :xs="24" :sm="24" :md="24" :lg="24">
      <LineChart :chart-data="chartData" />
    </el-row>
    <el-row :gutter="40">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <PieChart />
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <BarChart />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PieChart from './admin/PieChart'
import BarChart from './admin/BarChart'
import LineChart from './admin/LineChart'
export default {
  name: 'Dashboard',
  components: {
    PieChart,
    BarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        actualData: [190, 200, 298, 400, 398],
        expectedData: [200, 100, 150, 450, 600]
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
