import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import todoMain from "../views/todoList/todoMain.vue";
import vModel from "../views/vModel.vue";
import checkBox from "../views/checkBoxMain.vue";
import adrMain from "../views/address/adrMain";
import form from "../views/inputForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      //  path : url 주소
      path: "/About",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: About,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todoMain",
      component: todoMain,
      meta: { title: "todoMain" },
    },
    {
      path: "/vModel",
      component: vModel,
      meta: { title: "vModel" },
    },
    {
      path: "/checkBoxMain",
      component: checkBox,
      meta: { title: "checkbox" },
    },
    {
      path: "/adrMain",
      component: adrMain,
      meta: { title: "address main" },
    },
    {
      path: "/form",
      component: form,
      meta: { title: "form main" },
    },
  ],
});
