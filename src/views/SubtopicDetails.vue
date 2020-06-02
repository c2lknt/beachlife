<template>
  <section>
    <h2>{{ subtopic.name }}</h2>
    <div class="subtopic-details">
      <img
        :src="require(`@/assets/${subtopic.image}`)"
        :alt="subtopic.name"
      />
      <p>{{ subtopic.description }}</p>
    </div>
  </section>
</template>
<script>
import content from "@/content.js";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    subtopicSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    topic() {
      return content.topics.find(
        topic => topic.slug === this.slug
      );
    },
    subtopic() {
      return this.topic.subtopics.find(
        subtopic => subtopic.slug === this.subtopicSlug
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
.subtopic-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 15px;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
