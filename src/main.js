import { createApp } from "vue";
//引入根组件app
import App from "./App.vue";
//引入路由
import router from "./router";
//引入Vuex.store
import store from "./store";

//引入重置css样式
import "./assets/css/reset.less";

// 按需引入vant组件
import {
  Toast,
  NavBar,
  Card,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from "vant";

const app = createApp(App);
app.use(Toast);
app.use(NavBar);
app.use(Card);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);

app.use(store).use(router).mount("#app");
