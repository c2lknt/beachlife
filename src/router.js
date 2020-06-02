import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import content from "@/content";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#subtopic") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },

    {
      path: "/:slug",
      name: "topicDetails",
      props: true,
      component: () =>
        import(/* webpackChunkName: "TopicDetails"*/ "./views/TopicDetails"),
      children: [
        {
          path: ":subtopicSlug",
          name: "subtopicDetails",
          props: true,
          component: () =>
            import(/*webpackChunkName: "SubtopicDetails"*/ "./views/SubtopicDetails")
        }
      ],
      beforeEnter: (to, from, next) => {
        const exists = content.topics.find(
          topic => topic.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */
        "./views/NotFound")
    }
  ]
});

export default router;
