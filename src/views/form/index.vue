<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-tag type="info" size="large" class="personal_details">Applicant Personal Details</el-tag>
      <el-form-item label="IDNumber">
        <el-input v-model="form.name" placeholder="ID Number" />
      </el-form-item>
      <el-form-item label="Surname">
        <el-input v-model="form.name" placeholder="Applicant's Surname" />
      </el-form-item>
      <el-form-item label="Other Name">
        <el-input v-model="form.name" placeholder="Applicant's Other Name" />
      </el-form-item>
      <el-form-item label="Mobile">
        <el-col :span="20">
          <el-input v-model="form.name" placeholder="Mobile" prefix-icon="el-icon-phone">
            <template slot="prepend">+254</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Alternative Mobile">
        <el-col :span="20">
          <el-input v-model="form.name" placeholder="Other Mobile" prefix-icon="el-icon-phone">
            <template slot="prepend">+254</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Dependents">
        <el-input-number v-model="form.num" :min="0" :max="20" @change="handleChange" />
      </el-form-item>
      <el-form-item label="Nationality">
        <el-select v-model="form.region" placeholder="please select your nationality" prefix-icon="el-icon-s-flag">
          <el-option label="Kenya" value="shanghai" />
          <el-option label="Uganda" value="beijing" />
          <el-option label="Tanzania" value="tanzania" />
          <el-option label="Somalia" value="somalia" />
          <el-option label="Rwanda" value="rwanda" />
          <el-option label="Burundi" value="burundi" />
          <el-option label="Ethiopia" value="ethiopia" />
          <el-option label="South Africa" value="south_africa" />
          <el-option label="Nigeria" value="nigeria" />
        </el-select>
      </el-form-item>
      <el-form-item label="Date Of Birth">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Maritial Status">
        <el-radio-group v-model="form.type">
          <el-radio label="Single" name="type" />
          <el-radio label="Maried" name="type" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-tag type="info" size="large" class="personal_details">Next of Kin Details</el-tag>
      <el-form-item label="IDNumber">
        <el-input v-model="form.name" placeholder="ID Number" />
      </el-form-item>
      <el-form-item label="Surname">
        <el-input v-model="form.name" placeholder="Next of kin Surname" />
      </el-form-item>
      <el-form-item label="Other Name">
        <el-input v-model="form.name" placeholder="Other Name" />
      </el-form-item>
      <el-form-item label="Mobile">
        <el-col :span="20">
          <el-input v-model="form.name" placeholder="Mobile" prefix-icon="el-icon-phone">
            <template slot="prepend">+254</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Occupation">
        <el-input v-model="form.name" placeholder="Occupation" />
      </el-form-item>
      <el-form-item label="Place of work">
        <el-input v-model="form.name" placeholder="Place of work" />
      </el-form-item>
      <el-form-item label="Occupation">
        <el-input v-model="form.name" placeholder="Occupation" />
      </el-form-item>
      <el-tag type="info" size="large" class="personal_details">Applicant's Address Details</el-tag>
      <el-form-item label="Postal Address">
        <el-row>
          <el-col :xs="24" :span="10">
            <el-input v-model="form.address" placeholder="Postal Address" />
          </el-col>
          <el-col :xs="24" :span="7">
            <el-input v-model="form.address" placeholder="City" />
          </el-col>
          <el-col :xs="24" :span="7">
            <el-input v-model="form.address" placeholder="Code" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="PhysicalAddress">
        <el-row>
          <el-col :xs="24" :sm="4" :span="6">
            <el-input v-model="form.address" placeholder="Physical Address" />
          </el-col>
          <el-col :xs="24" :sm="6" :span="6">
            <el-input v-model="form.address" placeholder="House Number" />
          </el-col>
          <el-col :xs="24" :sm="10" :span="6">
            <el-input v-model="form.address" placeholder="Road" />
          </el-col>
          <el-col :xs="24" :sm="4" :span="6">
            <el-input v-model="form.address" placeholder="City/Town" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="Period at Rented Address">
        <el-input v-model="form.num" ype="textarea" placeholder="Period at Rented Address" />
      </el-form-item>
      <el-form-item label="Rented/Owned">
        <el-radio-group v-model="form.type">
          <el-radio label="Yes" />
          <el-radio label="No" />
        </el-radio-group>
      </el-form-item>
      <el-tag type="info" size="large" class="personal_details">Applicants Bank Details</el-tag>
      <el-form-item label="Bank Name">
        <el-input v-model="form.name" placeholder="Bank Name" />
      </el-form-item>
      <el-form-item label="Branch">
        <el-input v-model="form.name" placeholder="Branch name" />
      </el-form-item>
      <el-form-item label="Account Name">
        <el-input v-model="form.name" placeholder="Account name" />
      </el-form-item>
      <el-form-item label="Account Number">
        <el-input v-model="form.name" placeholder="Account number" />
      </el-form-item>
      <el-tag type="info" size="large" class="personal_details">Applicants Loan Details</el-tag>
      <el-form-item label="Loan purpose">
        <el-input v-model="form.name" placeholder="Bank Name" />
      </el-form-item>
      <el-form-item label="Asset Details">
        <el-input v-model="form.name" placeholder="Asset Details" />
      </el-form-item>
      <el-form-item label="Loan amount">
        <el-input v-model="form.name" placeholder="Loan amount" />
      </el-form-item>
      <el-form-item label="Own contribution">
        <el-input v-model="form.name" placeholder="Own contribution" />
      </el-form-item>
      <el-form-item label="Repayment Period">
        <el-input v-model="form.name" placeholder="Repayment Period" />
      </el-form-item>
      <el-form-item label="Daily Installments">
        <el-input v-model="form.name" placeholder="Daily Installments" />
      </el-form-item>
      <el-form-item label="Interest Rate">
        <el-input v-model="form.name" placeholder="Interest Rate" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        num: 0
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.personal_details{
  align: center;
  margin: 20px 0px;
  font-size: 25px;
}
</style>

