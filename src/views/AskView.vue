<template>
  <div>
    <div v-for="ask in fetchedAsks" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsks']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
