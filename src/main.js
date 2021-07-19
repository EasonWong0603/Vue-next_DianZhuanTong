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
  // 基础组件
  Button, //按钮
  Cell, //单元格
  CellGroup, //单元格
  Icon, // 图标
  Image as VanImage, // 图片
  Toast, // 轻提示

  // 表单组件
  Field, //输入框
  Form, //表单
  Search, //搜索

  // 反馈组件
  ActionSheet, // 动作面板
  ShareSheet, // 分享面板

  // 展示组件
  Lazyload, //懒加载

  // 导航组件
  ActionBar, // 动作栏
  ActionBarIcon, // 动作栏
  ActionBarButton, // 动作栏
  NavBar, // 导航
  Tab, // tap切换, 标签页
  Tabs, // tap切换, 标签页
  Tabbar, //标签栏
  TabbarItem, //标签栏
  Grid, //宫格
  GridItem, //宫格

  // 业务组件
  Card, // 商品卡片
} from "vant";

const app = createApp(App);

// 基础组件
app.use(Button); //按钮
app.use(Cell).use(CellGroup); //单元格
app.use(Icon); // 图标
app.use(VanImage); // 图片
app.use(Toast); // 轻提示

// 表单组件
app.use(Field); //输入框
app.use(Form); //表单
app.use(Search); //搜索

// 反馈组件
app.use(ActionSheet); // 动作面板
app.use(ShareSheet); // 分享面板

// 展示组件
app.use(Lazyload); //懒加载

// 导航组件
app.use(ActionBar).use(ActionBarIcon).use(ActionBarButton); // 动作栏
app.use(Grid).use(GridItem); //宫格
app.use(NavBar); // 导航
app.use(Tab).use(Tabs); // tap切换,标签页
app.use(Tabbar).use(TabbarItem); //标签栏

// 业务组件
app.use(Card); // 商品卡片

app.use(store).use(router).mount("#app");
