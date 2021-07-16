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
  Icon,
  Image as VanImage,
  NavBar,
  ShareSheet,
  ActionSheet,
  Tab,
  Tabs,
} from "vant";

const app = createApp(App);
app.use(Toast);
app.use(Icon);
app.use(VanImage);
app.use(NavBar);
app.use(ShareSheet);
app.use(ActionSheet);
app.use(Tab);
app.use(Tabs);

app.use(store).use(router).mount("#app");
