<template lang="html">
  <div>
    name: 'index' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }}
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
