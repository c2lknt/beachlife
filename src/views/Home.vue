<template>
  <div class="home">
    <h1>
      All Topics
    </h1>
    <div class="topics">
      <div v-for="topic in topics" :key="topic.name">
        <router-link
          :to="{
            name: 'topicDetails',
            params: { slug: topic.slug }
          }"
        >
          <h2>{{ topic.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'topicDetails',
              params: { slug: topic.slug }
            }"
          >
            <img
              :src="require(`@/assets/${topic.image}`)"
              :alt="topic.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import content from "@/content.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      topics: content.topics
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 20px auto;
  background: #f6fbf4;
  padding: 30px;
  border: 1px solid #0286d1;
  box-shadow: 0 0 10px #0286d1;
}
img {
  max-width: 200px;
}
.topics {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
