<template>
  <div class="header">
    <router-link class="link" to="/news">News</router-link> |
    <router-link class="link" to="/ask">Ask</router-link> |
    <router-link class="link" to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

.header .router-link-active {
  color: #35495e;
}
.header a {
  color: white;
}
.link {
  padding-right: 5px;
  padding-left: 5px;
}
</style>
