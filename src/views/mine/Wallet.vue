<!-- 钱包页 -->

<template>
  <div id="wallet">
    <!-- 头部 -->
    <header>
      <!-- 导航 -->
      <van-nav-bar
        title="钱包"
        left-arrow
        placeholder
        @click-left="onClickLeft"
        :border="false"
        style="background: transparent"
      />
      <!-- 余额 -->
      <div class="balance">
        <!-- 标题 -->
        <h2>&nbsp;余额（元）</h2>
        <!-- 金额 -->
        <p>{{ obtain }}</p>
        <!-- 按钮 -->
        <div class="btn">
          <span @click="recharge">充值</span>
          <span @click="withdrawal">提现</span>
        </div>
        <!-- 充值 -->
        <van-popup v-model:show="shows" class="topup">
          <h3>请输入充值金额</h3>
          <input
            type="number"
            placeholder="请输入金额"
            v-model="money"
            @keyup.enter="click"
            ref="myRef"
          />
          <van-button
            round
            type="primary"
            color="linear-gradient(-23deg, #ff504b, #ff814e)"
            @click="click"
            >充值</van-button
          >
        </van-popup>
      </div>
      <!-- 云背景 -->
      <img src="../../assets/images/mine/pic_shading@3x.png" />
    </header>
    <!-- 内容 -->
    <main>
      <!-- 单元格 -->
      <van-cell
        title="银行卡"
        :icon="require('../../assets/images/mine/1.png')"
        @click="bankcard"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" />
        </template>
      </van-cell>
      <!-- 单元格 -->
      <van-cell
        title="账单"
        :icon="require('../../assets/images/mine/2.png')"
        @click="noserve"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" />
        </template>
      </van-cell>
      <!-- 单元格 -->
      <van-cell
        title="二维码"
        :icon="require('../../assets/images/mine/3.png')"
        @click="showPopup"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" />
        </template>
      </van-cell>
      <van-popup v-model:show="show"
        ><img class="ewm" src="../../assets/images/mine/ewm.png"
      /></van-popup>
    </main>
  </div>
</template>

<script>
//引入整个路由
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    // 定义整个路由
    const router = useRouter();
    // 导航左箭头
    const onClickLeft = () => {
      router.go(-1);
    };

    // 显示隐藏
    const shows = ref(false);
    const show = ref(false);

    // 弹出
    const recharge = () => {
      shows.value = true;
    };

    // 钱
    let money = ref(null);

    // 取钱
    let obtain = ref(localStorage.getItem("money") || "0.00");

    // 输入框自动获取焦点
    const myRef = ref(null);

    watch(myRef, () => {
      myRef.value.focus();
    });

    // 充值
    const click = () => {
      myRef.value.focus();
      let moneys = (+money.value).toFixed(2);
      if (moneys !== "0.00") {
        localStorage.setItem("money", (+obtain.value + +moneys).toFixed(2));
        obtain.value = (+obtain.value + +moneys).toFixed(2);
        money.value = "";
        shows.value = false;
        Toast.success("充值成功");
      } else {
        Toast.fail("请输入金额");
      }
    };

    // 提现
    const withdrawal = () => {
      Toast.fail("设备正在升级敬请期待");
    };

    // 服务停用
    const noserve = () => {
      Toast.fail("服务已停用");
    };

    // 二维码
    const showPopup = () => {
      show.value = true;
    };

    // 银行卡
    const bankcard = () => {
      router.push("/bankcard");
    };

    return {
      onClickLeft, // 导航左箭头
      show, // 显示隐藏
      shows, // 显示隐藏
      showPopup, // 二维码
      recharge, // 弹出
      click, // 充值
      money, // 钱
      obtain, // 取钱
      withdrawal, // 体现
      noserve, // 服务停用
      bankcard, // 银行卡
      myRef,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

#wallet {
  // 头部
  header {
    height: 237px;
    background: linear-gradient(-23deg, #ff504b, #ff814e);
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 23px;

    // 导航文字颜色
    .van-nav-bar .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }

    // 余额
    .balance {
      .flex-center-col();
      margin-top: 28px;
      position: relative;

      // 标题
      h2 {
        height: 12px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: 500;
        color: #fff;
        line-height: 12px;
        margin-bottom: 11px;
      }

      // 金额
      p {
        font-size: 24px;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        margin: 11px auto 21px;
      }

      // 按钮
      .btn span {
        display: inline-block;
        text-align: center;
        width: 73px;
        height: 27px;
        line-height: 22px;
        border: 1px solid #f4f4f4;
        border-radius: 13px;
        font-size: 13px;
        font-family: PingFang;
        font-weight: 500;
        color: #fff;
        margin: 0 15px;
      }
      .topup {
        height: 200px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        input {
          height: 40px;
        }
        .van-button {
          height: 40px;
        }
      }
    }

    // 背景云
    img {
      width: 100%;
      position: absolute;
      bottom: -20px;
      left: 0;
      opacity: 0.6;
    }

    // 充值
    .van-popup--center {
      border-radius: 20px;
      padding: 10px 20px;
    }

    #wallet header .balance p {
      color: #000;
    }

    h3 {
      text-align: center;
      height: 24px;
      line-height: 24px;
      font-size: 18px;
      color: #ff5f4c;
      // margin-bottom: 2px;
    }

    input {
      padding: 3px 10px;
      font-size: 16px;
      margin: 3px 0 6px;
    }

    button {
      width: 100%;
      height: 35px;
    }
  }

  // 内容
  main {
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    overflow: hidden;

    // 单元格
    .van-cell {
      .flex-center-a();
      padding: 18px 28px 18px 26px;

      &:hover {
        background: rgb(248, 248, 248);
      }
    }

    // 图标颜色
    .van-icon {
      color: #b2b4b7;
    }

    // 图标高度
    .van-cell__left-icon,
    .van-cell__right-icon {
      height: auto;
    }

    // 左图标右边距
    .van-cell__left-icon {
      margin-right: 8px;
    }

    // 二维码
    .ewm {
      width: 101%;
    }

    .van-popup--center {
      width: 80%;
    }
  }
}
</style>
