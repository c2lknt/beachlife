<template>
  <nav id="nav">
      <router-link class="logo" to="/">
        Kira's Beach Research Project
      </router-link>
    <ul class="nav-links">
      <li
        v-for="topic in topics"
        :key="topic.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'topicDetails',
            params: { slug: topic.slug }
          }"
        >
          {{ topic.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import content from "@/content";
export default {
  data() {
    return {
      topics: content.topics
    };
  }
};
</script>

<style scoped>
#nav {
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #51cad3;
  border-bottom: 1px solid #0286d1;
  box-shadow: 0 0 10px #0286d1;

  z-index: 1;
}

#nav a {
  color: #003553;
  text-decoration: none;
  font-weight: bold;
}

#nav a.active-class {
  color: #f6fbf4;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: #0286d1 !important;
  font-weight: bold;
}
</style>
