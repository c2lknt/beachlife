(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TopicDetails"],{"7de4":function(t,s,i){"use strict";var c=i("f94c"),a=i.n(c);a.a},dc56:function(t,s,i){"use strict";i.r(s);var c=function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",[c("section",{staticClass:"topics"},[c("h1",[t._v("\n      "+t._s(t.topic.name)+"\n    ")]),c("div",{staticClass:"topic-details"},[c("img",{attrs:{src:i("1771")("./"+t.topic.image),alt:t.topic.name}}),c("p",[t._v(t._s(t.topic.description))])])]),c("section",{staticClass:"subtopics"},[c("h2",[t._v("Subtopics in "+t._s(t.topic.name))]),c("div",{staticClass:"cards",attrs:{id:"subtopic"}},t._l(t.topic.subtopics,(function(s){return c("div",{key:s.slug,staticClass:"card"},[c("router-link",{attrs:{to:{name:"subtopicDetails",params:{subtopicSlug:s.slug},hash:"#subtopic"}}},[c("img",{attrs:{src:i("1771")("./"+s.image),alt:s.name}}),c("span",{staticClass:"card__text"},[t._v("\n            "+t._s(s.name)+"\n          ")])])],1)})),0),c("router-view",{key:t.$route.path})],1)])},a=[],n=(i("7514"),i("7f0d")),e={data:function(){return{}},props:{slug:{type:String,required:!0}},computed:{topic:function(){var t=this;return n["a"].topics.find((function(s){return s.slug===t.slug}))}}},o=e,r=(i("7de4"),i("2877")),u=Object(r["a"])(o,c,a,!1,null,"2f811406",null);s["default"]=u.exports},f94c:function(t,s,i){}}]);
//# sourceMappingURL=TopicDetails.651a4c68.js.map