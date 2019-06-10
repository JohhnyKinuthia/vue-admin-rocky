<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      max-height=""
    >
      <el-table-column align="center" label="IDNumber" width="95">
        <template slot-scope="scope">
          {{ scope.row.IDNumber }}
        </template>
      </el-table-column>
      <el-table-column label="Surname">
        <template slot-scope="scope">
          {{ scope.row.Surname }}
        </template>
      </el-table-column>
      <el-table-column label="OtherName" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.OtherName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Mobile" width="150" align="center">
        <template slot-scope="scope">
          <i class="el-icon-phone" />
          <span>{{ scope.row.MobileNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="AlternativeNumber" label="Alternative Number" width="200">
        <template slot-scope="scope">
          <i class="el-icon-phone" />
          <span>{{ scope.row.AlternativeNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Nationality" label="Nationality" width="200">
        <template slot-scope="scope">
          {{ scope.row.Nationality }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.Status | statusFilter">{{ scope.row.Status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from '@/api/table'
import axios from 'axios'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        'approved': 'success',
        'pending': 'gray',
        'declined': 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      axios.get('http://192.168.1.237:9000/rider')
        .then(response => {
          var item = {}
          for (item in response.data) {
            console.log(response.data[item])
            this.list.push(response.data[item])
          }
          this.listLoading = false
        })
        .catch(err => console.log(err))
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
    }
  }
}
</script>
