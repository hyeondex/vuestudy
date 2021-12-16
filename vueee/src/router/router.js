import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 라우터 옵션
const routes = [
  // 라우팅할 url, 컴포넌트 정보
  {
    path: "",
    name: "",
    components: "",
  },
];

const router = new VueRouter({
  mode: "history", // url #값 제거
  base: "/",
  routes,
});

export default router;
