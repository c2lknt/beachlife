<template>
  <div>
    <section class="topics">
      <h1>
        {{ topic.name }}
      </h1>
      <div class="topic-details">
        <img
          :src="require(`@/assets/${topic.image}`)"
          :alt="topic.name"
        />
        <p>{{ topic.description }}</p>
      </div>
    </section>
    <section class="subtopics">
      <h2>Subtopics in {{ topic.name }}</h2>
      <div class="cards" id="subtopic">
        <div
          v-for="subtopic in topic.subtopics"
          :key="subtopic.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'subtopicDetails',
              params: { subtopicSlug: subtopic.slug },
              hash: '#subtopic'
            }"
          >
            <img
              :src="require(`@/assets/${subtopic.image}`)"
              :alt="subtopic.name"
            />
            <span class="card__text">
              {{ subtopic.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>
<script>
import content from "@/content";
// import GoBack from "@/components/GoBack";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    topic() {
      return content.topics.find(
        topic => topic.slug === this.slug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.topics {
  padding: 15px;
}
.subtopics {
  padding: 40px 0;
}
.topics, .subtopics {
  border: 1px solid #0286d1;
  box-shadow: 0 0 10px #0286d1;
  background: #f6fbf4;
  margin: 15px;
}
.topic-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
