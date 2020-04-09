<template>
 <article class="app-main">
   <transition name="fade-transform" mode="out-in">
     <keep-alive>
        <router-view  class="page-main__view" ></router-view>
      </keep-alive>
    </transition>
 </article>
</template>

<script>
export default {
  name: 'appMain',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {},
  filters: {}
}
</script>

<style lang='scss' scoped>
.app-main {
  height: calc( 100% - 60px );
}
</style>
