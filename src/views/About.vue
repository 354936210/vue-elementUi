<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" size="mini" @click="getAlluser">主要按钮</el-button>
    <mavon-editor @change = "changeMarkstr" @save="saveMarkstr" v-model="savestr"/>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String
  },
  data () {
    return {
      savestr: ''
    }
  },
  methods: {
    saveMarkstr: function (value, render) {
      console.log(render)
    },
    changeMarkstr: function (value, render) {

    },
    getAlluser: function () {
      console.log(this.savestr)
      this.$axios.get('http://localhost:8080//user/getAll').then(
        function (result) {
          console.log(JSON.stringify(result.data))
        }
      )
    }
  }
}
</script>
