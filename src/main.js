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
  Popup, //弹出层
  Toast, // 轻提示
  Switch, //开关

  // 表单组件
  Field, //输入框
  Form, //表单
  Picker, //选择器
  Search, //搜索
  Checkbox, //复选框
  CheckboxGroup, //复选框

  // 反馈组件
  ActionSheet, // 动作面板
  ShareSheet, //分享面板
  SwipeCell, //滑动单元格
  Overlay, //遮罩层

  // 展示组件
  Lazyload, //懒加载
  NoticeBar, //通知栏
  Popover, //气泡弹出框

  // 导航组件
  ActionBar, //动作栏
  ActionBarIcon, //动作栏
  ActionBarButton, //动作栏
  Grid, //宫格
  GridItem, //宫格
  IndexBar, //索引栏
  IndexAnchor, //索引栏
  NavBar, //导航栏
  Tab, // tap切换, 标签页
  Tabs, // tap切换, 标签页
  Tabbar, //标签栏
  TabbarItem, //标签栏

  // 业务组件
  Card, // 商品卡片
  DatetimePicker, //时间选择
  Uploader, //文件上传
  ContactCard, //联系人卡片
} from "vant";

const app = createApp(App);

// 基础组件
app.use(Button); //按钮
app.use(Cell).use(CellGroup); //单元格
app.use(Icon); // 图标
app.use(VanImage); // 图片
app.use(Popup); //弹出层
app.use(Toast); // 轻提示
app.use(Switch); //开关

// 表单组件
app.use(Field); //输入框
app.use(Form); //表单
app.use(DatetimePicker); //时间选择
app.use(Picker); //选择器
app.use(Uploader); //文件上传
app.use(Picker); //选择器
app.use(Search); //搜索
app.use(Checkbox).use(CheckboxGroup); //复选框

// 反馈组件
app.use(ActionSheet); // 动作面板
app.use(ShareSheet); // 分享面板
app.use(Popup); //弹出框
app.use(SwipeCell); //滑动单元格
app.use(Overlay); //遮罩层

// 展示组件
app.use(Lazyload); //懒加载
app.use(NoticeBar); //通知栏
app.use(Popover); //气泡弹出框

// 导航组件
app.use(ActionBar).use(ActionBarIcon).use(ActionBarButton); // 动作栏
app.use(Grid).use(GridItem); //宫格
app.use(IndexBar).use(IndexAnchor); //索引栏
app.use(NavBar); // 导航
app.use(Tab).use(Tabs); // tap切换,标签页
app.use(Tabbar).use(TabbarItem); //标签栏

// 业务组件
app.use(Card); // 商品卡片
app.use(ContactCard); //联系人卡片

app.use(store).use(router).mount("#app");
