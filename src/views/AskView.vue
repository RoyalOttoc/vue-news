<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsks" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`" class="link-text">
              {{ item.title }}
            </router-link>
          </p>
          <small
            >{{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.ask-title {
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.link-text {
  color: #828282;
}
</style>
