<!-- 积分详情页 -->
<template>
  <div class="pointsdetails">
    <header>
      <img
        src="@/assets/images/index/PointsDetails/矢量智能对象@3x.png"
        alt=""
      />
    </header>
    <main>
      <img src="@/assets/images/index/PointsDetails/弧形光线@3x.png" />
      <p><span></span> 积分明细 <span></span></p>
    </main>
    <footer>
      <ul>
        <li>
          <div class="left">
            <img src="@/assets/images/index/PointsDetails/订单@3x.png" />
            <div class="text">
              <p>导师沟通<span>+5积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <img
            src="../../assets/images/index/PointsDetails/兑换@3x.png"
            class="rigth"
            @click="handluclick"
          />
        </li>
        <li>
          <div class="left">
            <img src="@/assets/images/index/PointsDetails/购物袋@3x.png" />
            <div class="text">
              <p>浏览优质项目<span>+10积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <img
            src="../../assets/images/index/PointsDetails/兑换@3x.png"
            class="rigth"
            @click="handluclick"
          />
        </li>
        <li>
          <div class="left">
            <img src="@/assets/images/index/PointsDetails/订单@3x.png" />
            <div class="text">
              <p>导师沟通<span>+5积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <img
            src="../../assets/images/index/PointsDetails/兑换@3x.png"
            class="rigth"
            @click="handluclick"
          />
        </li>
        <li style="border: none">
          <div class="left">
            <img src="@/assets/images/index/PointsDetails/购物袋@3x.png" />
            <div class="text">
              <p>浏览优质项目<span>+10积分</span></p>
              <p class="time">2019-8-12 12:00:00</p>
            </div>
          </div>
          <img
            src="../../assets/images/index/PointsDetails/兑换@3x.png"
            class="rigth"
            @click="handluclick"
          />
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  setup() {
    const handluclick = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 5000,
      });
    };
    return { handluclick };
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";

.pointsdetails {
  background: linear-gradient(181deg, #ff495f, #ff975e);
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 375px;
    height: 44px;
    display: flex;
    align-items: center;

    img {
      width: 8px;
      height: 13px;
      margin-left: 18px;
    }
  }

  main {
    img {
      width: 302px;
      height: 280px;
    }

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

  footer {
    width: 336px;
    height: 335px;
    background: url("../../assets/images/index/PointsDetails/组1@3x.png")
      no-repeat center center;
    background-size: 100% 100%;
    margin-bottom: 76px;
    padding: 16px 25px 0px;

    li {
      // 弹性盒-主轴左右对齐，侧轴居中
      .flex-between();
      height: 78px;
      border-bottom: 1px solid #e6e6e6;
    }

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

    .rigth {
      width: 74px;
      height: 42px;
    }
  }
}
</style>
