<template>
  <div class="detail">
    <van-nav-bar title="详情" left-arrow @click-left="out" />
    <div class="detailed">
      <div class="chart">
        <!--头像-->
        <div class="portrait">
          <img
            src="../../assets/images/community/20180513224039_tgfwu@3x.png"
            alt=""
          />
        </div>
        <!--姓名和发表时间-->
        <div class="nametime">
          <p>Rose</p>
          <span>31分钟</span>
        </div>
        <!--关注-->
        <div class="like" @click="follow" v-if="already">+ 关注</div>
        <div class="like likes" v-else>
          <p class="btn no" @click="cancel">已关注</p>
        </div>
        <!--发表文字-->
        <div class="content">
          你还在纠结大盘不放量吗？其实你知道A股已经开始裂变了吗？美股化顿，港股化已是不争的事实，A股不需要全面上涨，全面放量，现在就是精准打击、精准放量阶段，只有集中力量把科技、金融撬动，才能有效刺激放量。多方位的刺激与地域性的差异导致美股化顿，港股化已是不争的事实，A股不需要全面上涨，全面放量
        </div>
        <!--分享图片-->
        <div class="Share">
          <img src="../../assets/images/community/323@3x.png" />
        </div>
        <!--互动功能-->
        <div class="interaction">
          <span>分享到</span>
          <span
            class="shareicon"
            v-for="item in state.share"
            :key="item.name"
            @click="handleClick(item)"
          >
            <img :src="item.img" />
          </span>
        </div>
      </div>
    </div>
    <!--tab选项卡-->
    <div class="nav">
      <div class="navhead">
        <van-tabs v-model="active" type="line">
          <!--评论页-->
          <van-tab title="评论123">
            <ul class="navul">
              <li v-for="item in detailContent" :key="item.id">
                <p class="navimg"><img :src="item.headimg" alt="" /></p>
                <p class="navname">{{ item.name }}</p>
                <p class="navcontent">{{ item.content }}</p>
                <p class="navp">
                  <span>{{ item.time }}</span>
                  <span class="navimgs">
                    <img
                      src="../../assets/images/community/zan@3x.png"
                      alt=""
                    />
                    <img
                      src="../../assets/images/community/pinglun@3x.png"
                      alt=""
                    />
                    <img
                      src="../../assets/images/community/zhuanfa@3x.png"
                      alt=""
                    />
                  </span>
                </p>
                <span class="navline"></span>
              </li>
            </ul>
          </van-tab>
          <!--转发页-->
          <van-tab title="转发20">
            <ul class="relay">
              <li v-for="item in detailContent" :key="item.id">
                <p class="relayimg"><img :src="item.headimg" alt="" /></p>
                <p class="relayname">{{ item.name }}</p>
                <p class="relayp">
                  {{ item.time }}
                </p>
                <span class="relayline"></span>
              </li></ul
          ></van-tab>
          <!--点赞页-->
          <van-tab title="赞2345">
            <ul class="relay">
              <li v-for="item in detailContent" :key="item.id">
                <p class="relayimg"><img :src="item.headimg" alt="" /></p>
                <p class="relayname">{{ item.name }}</p>
                <p class="relayp">{{ item.selfintro }}</p>
                <span class="relayline"></span>
              </li></ul
          ></van-tab>
        </van-tabs>
      </div>
    </div>
    <!--底部-->
    <div class="foot">
      <span>
        <img src="../../assets/images/community/zhuanfa@3x.png" alt="" />
        转发
      </span>
      <span @click="comment"
        ><img
          src="../../assets/images/community/pinglun@3x.png"
          alt=""
        />评论</span
      >
      <span
        ><img src="../../assets/images/community/zan@3x.png" alt="" />点赞</span
      >
    </div>
  </div>
</template>

<script>
import { getPersonlistDataApi } from "../../utils/api"; //人物卡

import router from "@/router/index.js"; //引入路由

import { onMounted, ref, reactive } from "vue"; //存储人物数据
import { Toast } from "vant";

export default {
  setup() {
    //导航栏
    const detailContent = ref("");

    //人物数据
    const getPerson = async () => {
      const res = await getPersonlistDataApi();
      console.log(res.data.result);
      detailContent.value = res.data.result;
      console.log(detailContent.value);
    };

    onMounted(() => {
      getPerson();
    });

    //返回
    const out = () => {
      router.go(-1);
    };

    //分享
    const state = reactive({
      share: [
        {
          name: "微信",
          img: require("../../assets/images/community/Communitydetail/wechat@3x.png"),
        },
        {
          name: "朋友圈",
          img: require("../../assets/images/community/Communitydetail/pengyouquan@3x.png"),
        },
        {
          name: "QQ",
          img: require("../../assets/images/community/Communitydetail/dianhua-@3x.png"),
        },
        {
          name: "空间",
          img: require("../../assets/images/community/Communitydetail/qqkongjian@3x.png"),
        },
      ],
    });

    const handleClick = (item) => {
      Toast(item.name);
    };

    // 点击关注
    const already = ref(!localStorage.getItem("follower"));

    const follow = () => {
      Toast.loading({
        message: "关注中...",
        forbidClick: true,
        duration: 500,
      });
      setTimeout(() => {
        if (already.value) {
          localStorage.setItem("follower", 1);
        }

        already.value = !already.value;

        Toast.success("关注成功");
      }, 800);
    };

    const cancel = () => {
      Toast.loading({
        message: "取消中...",
        forbidClick: true,
        duration: 500,
      });
      setTimeout(() => {
        if (!already.value) {
          localStorage.setItem("follower", 0);
        }

        already.value = !already.value;

        Toast.success("取消成功");
      }, 800);
    };

    const comment = () => {
      router.push("/comment");
    };

    return {
      detailContent,
      getPerson,
      out,
      state,
      handleClick,
      follow,
      already,
      cancel,
      comment,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";
.detail {
  .van-nav-bar .van-icon {
    color: #000000;
  }
  .van-ellipsis {
    width: 34px;
    height: 17px;
    font-size: 17px;
    font-family: PingFang;
    font-weight: 500;
    color: #333333;
  }
  .detailed {
    background: #ffffff;
    width: 100%;
    .chart {
      width: 100%;
      height: 370px;
      height: 432px;
      box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);
      padding: 13px 16px 43px 19px;
      position: relative;
      li {
        display: block;
      }

      //头像
      .portrait {
        width: 60px;
        height: 60px;
        float: left;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      //姓名和时间
      .nametime {
        margin-left: 5px;
        margin-top: 5px;
        float: left;
        p {
          width: 100px;
          height: 10px;
          font-size: 14px;
          font-family: PingFang;
          font-weight: bold;
          color: #ff504b;
          margin-bottom: 9px;
        }
        span {
          width: 50px;
          height: 11px;
          font-size: 12px;
          font-family: PingFang;
          font-weight: 500;
          color: #cacaca;
        }
      }
      //关注
      .like {
        float: right;
        width: 73px;
        height: 27px;
        background: linear-gradient(-23deg, #ff514b, #ff814e);
        box-shadow: 0px 3px 6px 0px rgba(253, 73, 38, 0.61);
        border-radius: 13px;
        text-align: center;
        line-height: 27px;
        font-size: 15px;
        font-family: PingFang;
        font-weight: 500;
        color: #ffffff;
        text-shadow: 0px 1px 0px rgba(248, 84, 27, 0.48);
      }
      .likes {
        text-shadow: 0px 1px 0px rgb(212 206 204 / 48%);
        background: linear-gradient(-23deg, #857d7d, #e0dddc);
        // box-shadow: 0px 1.6vw 3.2vw 0px rgb(122 117 115 / 49%);
        box-shadow: 0px 3px 6px 0px rgba(73, 68, 67, 0.61);
      }
      //发表文字
      .content {
        width: 340px;
        height: 125px;
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #666666;
        line-height: 21px;
        display: -webkit-box; /*将对象转为弹性盒模型展示*/
        -webkit-line-clamp: 6; /*限制文本行数*/
        overflow: hidden; /*超出隐藏*/
        span {
          width: 29px;
          height: 14px;
          font-size: 15px;
          font-family: PingFang;
          font-weight: 500;
          color: #ff564b;
          line-height: 20px;
        }
      }
      //分享图片
      .Share {
        width: 338px;
        height: 147px;
        background: #f8f8f8;
        border-radius: 3px;
        float: left;
        margin-top: 10px;
        margin-bottom: 10px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      //互动功能
      .interaction {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .shareicon {
          display: block;
          width: 20px;
          height: 20px;
          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
  //转发  点击   评论
  .nav {
    display: block;
    width: 374px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);

    .navul {
      li {
        margin-top: 10px;
        p {
          margin-bottom: 10px;
          margin-left: 10px;
          text-indent: 10px;
        }
        .navp {
          color: #aaaaaa;
        }
        .navimg {
          display: block;
          height: 40px;
          width: 40px;
          float: left;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .navimgs {
          img {
            display: block;
            width: 12px;
            height: 11px;
            float: right;
            margin-left: 20px;
            margin-right: 10px;
          }
        }
        .navname {
          font-size: 13px;
          font-family: PingFang;
          font-weight: 500;
          color: #ff514b;
        }
        .navcontent {
          font-size: 13px;
          font-family: PingFang;
          color: #555555;
        }
        .navline {
          display: block;
          border-top: 1px solid #dddddd;
          margin-left: 60px;
        }
      }
    }

    //转发
    .relay {
      background: #fff;
      li {
        display: block;
        margin-top: 20px;
        width: 375px;
      }
      p {
        margin-left: 10px;
        text-indent: 10px;
      }
      .relayimg {
        display: block;
        height: 40px;
        width: 40px;
        float: left;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .relayname {
        height: 12px;
        font-size: 13px;
        font-family: PingFang;
        font-weight: 500;
        color: #333333;
      }
      .relayp {
        height: 30px;
        color: #aaaaaa;
        margin-top: 15px;
      }
      .relayline {
        display: block;
        border-top: 1px solid #dddddd;
        margin-left: 60px;
      }
    }
  }
  //底部

  .foot {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 86px;
    background: #fff;
    box-shadow: 0px 0px 9px 0px rgba(203, 185, 177, 0.42);
    border-radius: 3px;
    padding: 26px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    img {
      float: left;
      display: block;
      width: 12px;
      height: 12px;
      margin-right: 3px;
      margin-top: 1px;
    }
  }
  .van-nav-bar__content {
    background: #f8f8f8;
  }
  .van-ellipsis {
    height: 20px;
    // z-index: 1 !important;
    font-weight: bold;
  }
  .van-tabs {
    border-radius: 17px 17px 0px 0px !important;
  }
}
</style>
