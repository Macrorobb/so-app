<template lang="html">
  <div>
    name: 'so-id' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }} <br />
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log('$route.params', this.$route.params)
    // console.log('$route.query', this.$route.params)
    // console.log('$route.hash', this.$route.params)
  }
}
</script>

<style lang="css" scoped></style>
