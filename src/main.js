import { createApp } from "vue";
//引入根组件app
import App from "./App.vue";
//引入路由
import router from "./router";
//引入Vuex.store
import store from "./store";

//引入重置css样式
import "./assets/css/reset.less";
//设置根字体大小
import "amfe-flexible";

// 按需引入vant组件
import { Toast } from "vant";

const app = createApp();
app.use(Toast);

createApp(App).use(store).use(router).mount("#app");
