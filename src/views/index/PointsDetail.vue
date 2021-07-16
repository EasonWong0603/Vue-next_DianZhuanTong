<!-- 积分详情页 -->
<template>
  <div class="pointsdetail">
    <!-- 头部导航栏 -->
    <header>
      <img
        src="@/assets/images/index/PointsDetail/矢量智能对象@3x.png"
        @click="out"
      />
    </header>
    <!-- 活动图 -->
    <main>
      <img src="@/assets/images/index/PointsDetail/弧形光线@3x.png" />
      <p><span></span> 积分明细 <span></span></p>
    </main>
    <!-- 积分明细 -->
    <footer>
      <ul>
        <li>
          <!-- 左边部分 -->
          <div class="left">
            <img src="@/assets/images/index/PointsDetail/订单@3x.png" />
            <!-- 文字信息 -->
            <div class="text">
              <p>导师沟通<span>+5积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <!-- 右边部分 -->
          <img
            src="@/assets/images/index/PointsDetail/兑换@3x.png"
            class="rigth"
            @click="handleClick"
          />
        </li>
        <li>
          <!-- 左边部分 -->
          <div class="left">
            <img src="@/assets/images/index/PointsDetail/购物袋@3x.png" />
            <!-- 文字信息 -->
            <div class="text">
              <p>浏览优质项目<span>+10积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <!-- 右边部分 -->
          <img
            src="@/assets/images/index/PointsDetail/兑换@3x.png"
            class="rigth"
            @click="handleClick"
          />
        </li>
        <li>
          <!-- 左边部分 -->
          <div class="left">
            <img src="@/assets/images/index/PointsDetail/订单@3x.png" />
            <!-- 文字信息 -->
            <div class="text">
              <p>导师沟通<span>+5积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <!-- 右边部分 -->
          <img
            src="@/assets/images/index/PointsDetail/兑换@3x.png"
            class="rigth"
            @click="handleClick"
          />
        </li>
        <li style="border: none">
          <!-- 左边部分 -->
          <div class="left">
            <img src="@/assets/images/index/PointsDetail/购物袋@3x.png" />
            <!-- 文字信息 -->
            <div class="text">
              <p>浏览优质项目<span>+10积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <!-- 右边部分 -->
          <img
            src="@/assets/images/index/PointsDetail/兑换@3x.png"
            class="rigth"
            @click="handleClick"
          />
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
// 引入所需的组件
import { Toast } from "vant";

// 引入路由
import router from "@/router/index.js";

export default {
  setup() {
    // 点击兑换触发
    const handleClick = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      setTimeout(() => {
        Toast.fail("网络错误");
      }, 4000);
    };

    // 点击后退上个页面
    const out = () => {
      router.go(-1);
    };

    return { handleClick, out };
  },
};
</script>
<style lang="less" scoped>
// 引入自定义css
@import "../../assets/css/var.less";

// 积分详情区
.pointsdetail {
  background: linear-gradient(181deg, #ff495f, #ff975e);
  display: flex;
  flex-direction: column;
  align-items: center;

  // 头部
  header {
    width: 375px;
    height: 44px;
    display: flex;
    align-items: center;

    // 头部后退箭头
    img {
      width: 8px;
      height: 13px;
      margin-left: 18px;
    }
  }

  // 内容
  main {
    // 活动图
    img {
      width: 302px;
      height: 280px;
    }

    // 提示信息
    p {
      height: 22px;
      font-size: 13px;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        display: inline-block;
        width: 26px;
        height: 1px;
        background: #e6e6e6;
        margin: 0 10px;
      }
    }
  }

  // 底部
  footer {
    width: 336px;
    height: 335px;
    background: url("../../assets/images/index/PointsDetail/组1@3x.png")
      no-repeat center center;
    background-size: 100% 100%;
    margin-bottom: 76px;
    padding: 16px 25px 0px;

    // 每一块
    li {
      // 弹性盒-主轴左右对齐，侧轴居中
      .flex-between();
      height: 78px;
      border-bottom: 1px solid #e6e6e6;
    }

    // 左边内容
    .left {
      // 弹性盒-侧轴居中
      .flex-center-a();

      img {
        width: 44px;
        height: 44px;
        margin-right: 10px;
      }

      p {
        font-size: 14px;
        font-family: PingFang;
        font-weight: bold;
        color: #333333;
        line-height: 22px;
      }

      .time {
        font-size: 11px;
        font-family: PingFang;
        font-weight: bold;
        color: #999999;
      }

      span {
        color: #ff4f5f;
      }
    }

    // 右边内容
    .rigth {
      width: 74px;
      height: 42px;
    }
  }
}
</style>
