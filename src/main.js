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
  Toast, // 轻提示
  Icon, // 图标
  Image as VanImage, // 图片
  NavBar, // 导航
  ShareSheet, // 分享面板
  ActionSheet, // 动作面板
  Tab, // tap切换
  Tabs, // tap切换
  Card, // 商品卡片
  ActionBar, // 动作栏
  ActionBarIcon, // 动作栏
  ActionBarButton, // 动作栏
  Grid,
  GridItem,
} from "vant";

const app = createApp(App);
app.use(Toast); // 轻提示
app.use(Icon); // 图标
app.use(VanImage); // 图片
app.use(NavBar); // 导航
app.use(ShareSheet); // 分享面板
app.use(ActionSheet); // 动作面板
app.use(Tab); // tap切换
app.use(Tabs); // tap切换
app.use(Card); // 商品卡片
app.use(ActionBar); // 动作栏
app.use(ActionBarIcon); // 动作栏
app.use(ActionBarButton); // 动作栏
app.use(Grid);
app.use(GridItem);

app.use(store).use(router).mount("#app");
