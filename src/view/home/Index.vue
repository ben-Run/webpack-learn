<template>
 <article class="home-wrapper">
   <h3>webpack搭建 vue</h3>
   <ul>
     <li class="meun--item" @click="handleChick(1)">广州</li>
     <li class="meun--item" @click="handleChick(2)">深圳</li>
     <li class="meun--item" @click="handleChick(3)">上海</li>
   </ul>
   <transition name="fade-transform" mode="out-in">
     <router-view  class="page-main__view" :key="$route.fullPath"></router-view>
    </transition>
 </article>
</template>

<script>
export default {
  name: 'home',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleChick (val) {
      const title = '这是，'
      const msg = val === 1 ? `${title}广州` : val === 2 ? `${title}深圳` : `${title}上海` 
      this.$router.push({ path: `/home/city/${msg}`})
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
ul {
  display: flex;
  .meun--item {
    font-size: 16px;
    padding: 0 10px;
    cursor: pointer;
    &::after {
      content: '';
      border-right: 1px solid #1989fa;
      margin-left: 10px;
    }
  }
  .meun--item:last-child {
    &::after {
      display: none;
    }
  }
}
</style>
