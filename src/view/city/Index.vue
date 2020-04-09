<template>
 <article class="city-wrapper">
   {{msg}}
 </article>
</template>

<script>
export default {
  name: 'city-home',
  components: {},
  props: {},
  data () {
    return {
      msg:""
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.msg = this.$route.params.msg
  },
  methods: {},
  filters: {}
}
</script>

<style lang='scss' scoped>
.city-wrapper {
  font-size: 30px;
}
</style>
