<template>
  <div>
    <router-view :key="key" /><router-view :key="key" />
  </div>
</template>
<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
