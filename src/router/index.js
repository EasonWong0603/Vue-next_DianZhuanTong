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
        meta: {
          title: "消息",
        },
        beforeEnter: () => {
          if (!sessionStorage.getItem("token")) {
            return "/register";
          }
        },
      },
      // 我的
      {
        path: "/home/mine",
        component: () => import("../views/home/Mine.vue"),
        meta: {
          title: "我的 - 用户界面",
        },
        beforeEnter: () => {
          if (!sessionStorage.getItem("token")) {
            return "/register";
          }
        },
      },
    ],
  },
  // 首页-积分详情页
  {
    path: "/pointsdetail",
    component: () => import("../views/index/PointsDetail.vue"),
    meta: {
      title: "积分详情",
    },
  },
  // 首页-加入点赚通页
  {
    path: "/join",
    component: () => import("../views/index/Join.vue"),
    meta: {
      title: "加入点赚通",
    },
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
    meta: {
      title: "全部精选导师",
    },
  },
  // 首页-导师列表-搜索
  {
    path: "/search",
    component: () => import("../views/index/Search.vue"),
    meta: {
      title: "搜索导师",
    },
  },
  // 首页-导师详情页
  {
    path: "/leaderdetail/:id",
    component: () => import("../views/index/Leaderdetail.vue"),
    meta: {
      title: "导师详情",
    },
    props: true,
  },
  // 社区-社区详情页
  {
    path: "/communitydetail",
    component: () => import("../views/community/Communitydetail.vue"),
    meta: {
      title: "社区详情",
    },
  },
  // 社区-评论
  {
    path: "/comment",
    component: () => import("../views/community/Comment.vue"),
    meta: {
      title: "评论",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 社区-发布信息
  {
    path: "/upload",
    component: () => import("../views/community/Upload.vue"),
    meta: {
      title: "上传你的动态",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 消息-联系人列表
  {
    path: "/maillist",
    component: () => import("../views/message/Maillist.vue"),
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 新的朋友
  {
    path: "/newfriend",
    component: () => import("../views/message/Newfriend.vue"),
    meta: {
      title: "新的好友邀请",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 消息-聊天室
  {
    path: "/chatroom/:id",
    component: () => import("../views/message/Chatroom.vue"),
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
    props: true,
  },
  // 消息-聊天详情
  {
    path: "/chatdetails/:id",
    component: () => import("../views/message/Chatdetails.vue"),
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
    props: true,
  },
  //消息-创建群聊
  {
    path: "/groupchat",
    component: () => import("../views/message/Groupchat.vue"),
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 登录
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "登录 / 立即注册",
    },
  },
  // 我的-设置页
  {
    path: "/setup",
    component: () => import("../views/mine/Set.vue"),
    meta: {
      title: "设置",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-设置-个人信息设置
  {
    path: "/setselfinformation",
    component: () => import("../views/mine/SetSelfInformation.vue"),
    meta: {
      title: "个人信息设置",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-设置-个人信息设置-昵称
  {
    path: "/setname",
    component: () => import("../views/mine/SetName.vue"),
    meta: {
      title: "编辑昵称",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-会员中心页
  {
    path: "/membercenter",
    component: () => import("../views/mine/MemberCenter.vue"),
    meta: {
      title: "会员中心",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-钱包页
  {
    path: "/wallet",
    component: () => import("../views/mine/Wallet.vue"),
    meta: {
      title: "我的钱包",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-意见反馈
  {
    path: "/feedback",
    component: () => import("../views/mine/Feedback.vue"),
    meta: {
      title: "意见反馈",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
  },
  // 我的-银行卡
  {
    path: "/bankcard",
    component: () => import("../views/mine/Bankcard.vue"),
    meta: {
      title: "我的银行卡",
    },
    beforeEnter: () => {
      if (!sessionStorage.getItem("token")) {
        return "/register";
      }
    },
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
