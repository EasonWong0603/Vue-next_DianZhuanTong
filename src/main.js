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
  Cell,
  CellGroup,
  SwipeCell,
  Button,
  ContactCard,
  Image as VanImage,
  NoticeBar,
  Icon,
  Popover,
} from "vant";

const app = createApp(App);
app.use(Toast);
//导航栏
app.use(NavBar);
//滑动单元格
app.use(SwipeCell);
//单元格
app.use(Cell);
app.use(CellGroup);
//按钮
app.use(Button);
//联系人卡片
app.use(ContactCard);
//图片
app.use(VanImage);
//通知栏
app.use(NoticeBar);
//图标
app.use(Icon);
//气泡弹出框
app.use(Popover);

app.use(store).use(router).mount("#app");
