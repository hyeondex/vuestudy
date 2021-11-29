import Vue from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPlus, faCheck, faTrash)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
//배포에 관한 팁을 출력하지 않는 것 ?

new Vue({
  render: h => h(App),
}).$mount('#app')
