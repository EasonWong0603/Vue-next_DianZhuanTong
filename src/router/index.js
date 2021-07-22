import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 一级重定向
  {
    path: "/",
    redirect: "/home",
  },
  // 主页
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      // 二级重定向
      {
        path: "/home",
        redirect: "/home/index",
      },
      // 首页
      {
        path: "/home/index",
        component: () => import("../views/home/Index.vue"),
      },
      // 社区
      {
        path: "/home/community",
        component: () => import("../views/home/Community.vue"),
        meta: {
          title: "社区交流 - 热门动态",
        },
      },
      // 消息
      {
        path: "/home/message",
        component: () => import("../views/home/Message.vue"),
        beforeEnter: (to, from, next) => {
          if (!sessionStorage.getItem("token")) {
            next("/register");
          } else {
            next();
          }
        },
      },
      // 我的
      {
        path: "/home/mine",
        component: () => import("../views/home/Mine.vue"),
        beforeEnter: (to, from, next) => {
          if (!sessionStorage.getItem("token")) {
            next("/register");
          } else {
            next();
          }
        },
      },
    ],
  },
  // 首页-积分详情页
  {
    path: "/pointsdetail",
    component: () => import("../views/index/PointsDetail.vue"),
  },
  // 首页-加入点赚通页
  {
    path: "/join",
    component: () => import("../views/index/Join.vue"),
  },
  // 首页-项目详情页
  {
    path: "/itemdetail",
    component: () => import("../views/index/ItemDetail.vue"),
  },
  // 首页-导师列表页
  {
    path: "/leaderlist",
    component: () => import("../views/index/Leaderlist.vue"),
  },
  // 首页-导师列表-搜索
  {
    path: "/search",
    component: () => import("../views/index/Search.vue"),
  },
  // 首页-导师详情页
  {
    path: "/leaderdetail/:id",
    component: () => import("../views/index/Leaderdetail.vue"),
    props: true,
  },
  // 社区-社区详情页
  {
    path: "/communitydetail",
    component: () => import("../views/community/Communitydetail.vue"),
  },
  // 社区-评论
  {
    path: "/comment",
    component: () => import("../views/community/Comment.vue"),
  },
  // 社区-发布信息
  {
    path: "/upload",
    component: () => import("../views/community/Upload.vue"),
  },
  // 消息-联系人列表
  {
    path: "/maillist",
    component: () => import("../views/message/Maillist.vue"),
  },
  // 新的朋友
  {
    path: "/newfriend",
    component: () => import("../views/message/Newfriend.vue"),
  },
  // 消息-聊天室
  {
    path: "/chatroom/:id",
    component: () => import("../views/message/Chatroom.vue"),
    props: true,
  },
  // 消息-聊天详情
  {
    path: "/chatdetails/:id",
    component: () => import("../views/message/Chatdetails.vue"),
    props: true,
  },
  //消息-创建群聊
  {
    path: "/groupchat",
    component: () => import("../views/message/Groupchat.vue"),
  },
  // 登录
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  // 我的-设置页
  {
    path: "/setup",
    component: () => import("../views/mine/Set.vue"),
  },
  // 我的-设置-个人信息设置
  {
    path: "/SetSelfInformation",
    component: () => import("../views/mine/SetSelfInformation.vue"),
  },
  // 我的-设置-个人信息设置-昵称
  {
    path: "/setname",
    component: () => import("../views/mine/SetName.vue"),
  },
  // 我的-会员中心页
  {
    path: "/membercenter",
    component: () => import("../views/mine/MemberCenter.vue"),
  },
  // 我的-钱包页
  {
    path: "/wallet",
    component: () => import("../views/mine/Wallet.vue"),
  },
  // 我的-意见反馈
  {
    path: "/feedback",
    component: () => import("../views/mine/Feedback.vue"),
  },
  // 我的-银行卡
  {
    path: "/bankcard",
    component: () => import("../views/mine/Bankcard.vue"),
  },
  // 404页面，将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/404NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局后置钩子
router.afterEach((to) => {
  // 设置页面title
  document.title = to.meta.title || "点赚通 - 为您量身打造的理财项目";
});

export default router;
