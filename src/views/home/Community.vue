<template>
  <div class="community">
    <!--顶部-->
    <div class="head">
      <span class="hot">热门动态</span>
      <span class="newest">最新动态</span>
      <span class="camera"
        ><img
          src="../../assets/images/community/camera-s@3x.png"
          alt=""
          @click="show = true"
      /></span>
    </div>

    <!--所有头像-->
    <ul class="portrait">
      <li v-for="item in detailContent" :key="item.id">
        <img :src="item.headimg" alt="" />
      </li>
    </ul>
    <div class="detailed">
      <!--个人发表-->
      <ul class="chart">
        <!--头像-->
        <li class="portrait">
          <img
            src="../../assets/images/community/20180513224039_tgfwu@3x.png"
            alt=""
          />
        </li>
        <!--姓名和发表时间-->
        <li class="nametime">
          <p>Rose</p>
          <span>31分钟前</span>
        </li>
        <!--关注-->
        <div class="like" @click="follow" v-if="already">+ 关注</div>
        <div class="like likes" v-else>
          <p class="btn no" @click="cancel">已关注</p>
        </div>
        <!--发表信息-->
        <li class="content" @click="community">
          你还在纠结大盘不放量吗？其实你知道A股已经开始裂变了吗？美股化顿，港股化已是不争的事实，A股不需要全面上涨，全面放量，现在就是精准打击、精准放量阶段，只有集中力量把科技、金融撬动，才能有效刺激放量。多方位的刺激与地域性的差异导致全面放量现在就是精准打击
        </li>
        <!--分享图片-->
        <li class="Share">
          <img src="../../assets/images/community/323@3x.png" />
        </li>

        <!--互动功能-->
        <li class="interaction">
          <span>
            <img src="../../assets/images/community/zhuanfa@3x.png" alt="" />
            转发
          </span>
          <span
            ><img
              src="../../assets/images/community/pinglun@3x.png"
              alt=""
            />1234</span
          >
          <span
            ><img
              src="../../assets/images/community/zan@3x.png"
              alt=""
            />2345</span
          >
        </li>
      </ul>
      <ul class="chart charts">
        <!--头像-->
        <li class="portrait">
          <img
            src="../../assets/images/community/20151216132026_3iCHk@3x.png"
            alt=""
          />
        </li>
        <!--姓名和时间-->
        <li class="nametime">
          <p>阳光的阳光</p>
          <span>40分钟前</span>
        </li>
        <li class="like">+ 关注</li>
        <!--发表信息-->
        <li class="content" @click="community">
          人民币汇率双向波动增强，外汇市场主体更加适应和理性。8.11汇改以来，人民币汇率弹性不断提高，波动率已接近主要发达国家货币水平。人民币汇率双向波动成为常态，贬值压力得到及时释放。当前个人购汇更加平稳，企业对外直接投资更加理性有序.....
        </li>
        <!--分享图片-->
        <li class="Share Shares">
          <img src="../../assets/images/community/timg@1.png" alt="" style="" />
          <img src="../../assets/images/community/timg@2.png" alt="" />
          <img src="../../assets/images/community/timg@3.png" alt="" />
          <img src="../../assets/images/community/timg@4.png" alt="" />
          <img src="../../assets/images/community/timg@5.png" alt="" />
          <img src="../../assets/images/community/timg@6.png" alt="" />
        </li>
        <!--互动功能-->
        <li class="interaction">
          <span>
            <img src="../../assets/images/community/zhuanfa@3x.png" alt="" />
            转发
          </span>
          <span
            ><img src="../../assets/images/community/pinglun@3x.png" alt="" />
            1234</span
          >
          <span
            ><img src="../../assets/images/community/zan@3x.png" alt="" />
            2345</span
          >
        </li>
      </ul>
    </div>
    <div class="foot">
      <img src="../../assets/images/community/dzt@3x.png" alt="" />
    </div>
    <div class="footer">————— 到底了呦 —————</div>
  </div>
  <!-- <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" /> -->
  <van-action-sheet
    v-model:show="show"
    :actions="actions"
    cancel-text="取消"
    close-on-click-action
    @select="onSelect"
  />
</template>

<script>
import { getPersonlistDataApi } from "../../utils/api"; //人物卡
import { onMounted, ref } from "vue"; //按需引入
import route from "../../router/index"; //引入路由
import { Toast } from "vant";
export default {
  setup() {
    const detailContent = ref("");

    const getPerson = async () => {
      const res = await getPersonlistDataApi();
      console.log(res.data.result);
      detailContent.value = res.data.result;
      console.log(detailContent.value);
    };
    //路由跳转
    const community = () => {
      route.push("/communitydetail");
    };

    onMounted(() => {
      getPerson();
    });

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

    //遮罩层
    const show = ref(false);
    const actions = [
      { name: "拍摄", subname: "照片或视频" },
      { name: "从手机相册选择" },
    ];
    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show.value = false;
      Toast(item.name);
      route.push("/upload");
    };

    //跳转发表
    const comment = () => {
      route.push("/comment");
    };
    return {
      detailContent,
      getPerson,
      community,
      follow,
      already,
      cancel,
      comment,
      show,
      actions,
      onSelect,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";

.community {
  width: 100%;

  //顶部
  .head {
    width: 375px;
    height: 44px;
    background: #f8f8f8;
    .flex-center-a();
    //热门动态
    .hot {
      width: 100px;
      height: 17px;
      font-size: 18px;
      font-family: "PingFang-SC-Bold";
      font-weight: bold;
      color: #ff504b;
      margin-left: 19px;
    }
    //最新动态
    .newest {
      width: 52px;
      height: 13px;
      font-size: 13px;
      font-family: "PingFang-SC-Medium";
      font-weight: 500;
      color: #666666;
      margin-right: 160px;
      margin-top: 5px;
    }
    //相机
    .camera {
      margin-top: 5px;
      width: 26px;
      height: 21px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  //头像
  .portrait {
    width: 100%;
    height: 82px;
    display: flex;
    font-size: @s-font;
    overflow: auto;
    margin-bottom: 5px;
    li {
      display: flex;
      float: left;
      flex-shrink: 0;
      margin-left: 14px;
      margin-top: 20px;
      img {
        margin-top: 1px;
        width: 52px;
        height: 52px;
        border: 1px solid #ff504b;
        box-shadow: 0px 2px 3px 0px #ff8878;
        border-radius: 50%;
      }
    }
  }

  //个人消息
  .detailed {
    width: 100%;
    height: 900px;
    .charts {
      width: 100%;
      height: 450px !important;
      margin-bottom: 100px;
      .Shares {
        height: 540px;
        img {
          float: left;
          margin: 1px 1px 1px 1px;
          width: 109px !important;
          height: 109px !important;
          border-radius: 3px;
        }
      }
    }

    .chart {
      width: 100%;
      height: 390px;
      background: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);
      border-radius: 17px 17px 0px 0px;
      padding: 13px 16px 43px 19px;
      position: relative;
      margin-bottom: 40px;
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
      //点赞
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
        float: left;
        width: 340px;
        height: 110px;
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #666666;
        line-height: 20px;
        display: -webkit-box; /*将对象转为弹性盒模型展示*/
        -webkit-box-orient: vertical; /*设置弹性盒模型子元素的排列方式*/
        -webkit-line-clamp: 5; /*限制文本行数*/
        overflow: hidden; /*超出隐藏*/
        line-height: 22px;
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
      //分享的图片
      .Share {
        width: 338px;
        height: 147px;
        background: #f8f8f8;
        border-radius: 3px;
        float: left;
        margin-top: 10px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      //互动功能
      .interaction {
        display: flex;
        position: absolute;
        width: 336px;
        height: 39px;
        background: #fff;
        box-shadow: 0px 0px 9px 0px rgba(203, 185, 177, 0.42);
        border-radius: 3px;
        bottom: -15px;
        padding: 0 20px 0 20px;
        .flex-between();
        img {
          float: left;
          display: block;
          width: 12px;
          height: 12px;
          margin-right: 5px;
          margin-top: 1px;
        }
      }
    }
  }

  //底部
  .foot {
    margin-top: 20px;
    width: 336px;
    height: 88px;
    border-radius: 3px;
    margin: 0 auto;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .footer {
    height: 40px;
    font-size: 12px;
    font-family: PingFang;
    font-weight: 500;
    color: #a0a0a0;
    text-align: center;
  }
  .van-action-sheet__name {
    width: 100%;
  }
}
</style>
