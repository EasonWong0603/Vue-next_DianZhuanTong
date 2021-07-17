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
  Card,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Form,
  Field,
  Button,
} from "vant";

const app = createApp(App);
app.use(Grid);
app.use(GridItem);
app.use(Toast);
app.use(Icon);
app.use(VanImage);
app.use(NavBar);
app.use(ShareSheet);
app.use(Card);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(Field);
app.use(Button);

app.use(store).use(router).mount("#app");
