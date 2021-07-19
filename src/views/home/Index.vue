<!-- 首页 -->

<template>
  <div id="index">
    <!-- 头部 -->
    <header>
      <!-- 头部上部分 -->
      <div class="head-top">
        <!-- 搜索框 -->
        <van-search
          v-model="state.value"
          placeholder="导师/项目"
          shape="round"
          background="transparent"
          :clearable="false"
        />
        <!-- 右侧图标 -->
        <van-icon name="scan" size="28px" color="#fff" />
      </div>
      <!-- 头部图片 -->
      <div class="head-banner">
        <img
          src="../../assets/images/index/Home/立即了解＞@3x.png"
          @click="join"
        />
      </div>
    </header>
    <!-- 导航 -->
    <nav>
      <ul>
        <li>
          <img src="../../assets/images/index/Home/01.png" />
          <p>投资理财</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/02.png" />
          <p>股票证券</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/03.png" />
          <p>网赚</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/04.png" />
          <p>兼职</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/05.png" />
          <p>金融大神</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/06.png" />
          <p>网赚大神</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/07.png" />
          <p>投资先锋</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/08.png" />
          <p>理财项目</p>
        </li>
        <li>
          <img src="../../assets/images/index/Home/09.png" />
          <p>最佳导师</p>
        </li>
        <li @click="leaderlist">
          <img src="../../assets/images/index/Home/10.png" />
          <p>全部导师</p>
        </li>
      </ul>
    </nav>
    <!-- 内容 -->
    <main>
      <!-- 内容头部 -->
      <div class="main-top">
        <!-- 提示信息 -->
        <van-notice-bar
          left-icon="volume-o"
          text="恭喜黄某某在积分大爆炸里抽中了 99999 积分，中将序号为 '010-78469118661' "
          color="#333"
          background="#FFF"
          style="
            box-shadow: 0px 2px 16px 0px rgba(255, 52, 52, 0.4);
            width: 90%;
            margin: 10px auto 20px;
            border-radius: 5px;
          "
        />

        <!-- 积分兑换 -->
        <img
          class="exchange"
          src="../../assets/images/index/Home/椭圆3@3x.png"
          @click="pointsdetail"
        />
      </div>
      <!-- 内容中部 -->
      <div class="main-mid main">
        <!-- 标题 -->
        <div class="title">
          <img src="../../assets/images/index/Home/4356@3x.png" /><span
            >优秀项目</span
          >
        </div>
        <!-- 内容 -->
        <div class="content">
          <!-- 紫色图 -->
          <img
            class="img-s violet"
            src="../../assets/images/index/Home/open@3x.png"
            @click="love"
          />
          <!-- 蓝色图 -->
          <img
            class="img-s blue"
            src="../../assets/images/index/Home/23@3x.png"
            @click="love"
          />
          <!-- 橘色图 -->
          <img
            class="img-b orange"
            src="../../assets/images/index/Home/open拷贝2@3x.png"
            @click="love"
          />
          <!-- 灰色图 -->
          <img
            class="img-b grey"
            src="../../assets/images/index/Home/xsd.png"
            @click="itemdetail"
          />
          <!-- 灰色图 -->
          <img
            class="img-b grey"
            src="../../assets/images/index/Home/yyk.png"
            @click="love"
          />
        </div>
      </div>
      <!-- 遮挡条 -->
      <div class="occlusion"></div>
      <!-- 内容下部 -->
      <div class="main-bot main">
        <!-- 标题 -->
        <div class="title">
          <img src="../../assets/images/index/Home/火拷贝2@3x.png" />
          <span>优秀导师</span>
          <i @click="leaderlist">更多 &gt;</i>
        </div>
        <!-- 老师列表 -->
        <div class="list">
          <ul>
            <!-- 每一块 -->
            <li
              v-for="(item, index) in state.teacherList"
              :key="index"
              @click="leaderdetail(item.id)"
            >
              <!-- 头像 -->
              <div class="character">
                <img :src="item.headimg" />
              </div>
              <!-- 内容 -->
              <div class="content">
                <!-- 姓名 -->
                <h2>{{ item.name }}</h2>
                <!-- 按钮 -->
                <div class="btn">
                  <span>{{ item.perfession[0] }}</span
                  ><span>{{ item.perfession[1] }}</span>
                </div>
                <!-- 简介 -->
                <p>{{ item.simpleIntro }}</p>
                <!-- 热度 -->
                <div class="hot">
                  <!-- 人气 -->
                  <div class="popularity flex">
                    <img src="../../assets/images/index/leader/redu@3x.png" />
                    <span>{{ item.hot }}</span>
                  </div>
                  <!-- 关注 -->
                  <div class="follow flex">
                    <img
                      src="../../assets/images/index/leader/yonghu2@3x.png"
                    />
                    <span>{{ item.follower }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getLeaderpartDataApi } from "../../../src/utils/api";
import { reactive, onMounted } from "vue";
import route from "../../router/index";
// 引入所需的组件
import { Toast } from "vant";

export default {
  setup() {
    const state = reactive({
      value: "", // 搜索框
      teacherList: [], // 导师列表
    });

    // 跳转加入页面
    const join = () => {
      route.push("/join");
    };

    // 跳转积分页面
    const pointsdetail = () => {
      route.push("/pointsdetail");
    };

    // 跳转项目页面
    const itemdetail = () => {
      route.push("/itemdetail");
    };

    // 跳转导师列表页面
    const leaderlist = () => {
      route.push("/leaderlist");
    };

    // 跳转导师详情页面
    const leaderdetail = (id) => {
      route.push("/leaderdetail/" + id);
    };

    // 无此页面
    const love = () => {
      Toast({
        message: "没有这个页面给你一颗爱心",
        icon: "like-o",
      });
    };

    const login = async () => {
      const res = await getLeaderpartDataApi();
      state.teacherList = res.data.result;
    };

    onMounted(() => {
      login();
    });

    return {
      state,
      join,
      leaderlist,
      itemdetail,
      pointsdetail,
      leaderdetail,
      love,
      login,
    };
  },
};
</script>

<style lang="less">
// 引入外部css
@import "../../assets/css/var.less";

#index {
  background: linear-gradient(#fff, #f8f8f8);

  // 头部
  header {
    background: url("../../assets/images/index/Home/1@3x.png") no-repeat;
    background-size: 100%;

    // 头部上部分
    .head-top {
      .flex-between();

      // 搜索框
      .van-search {
        width: 100%;
        box-shadow: 0px 1px 16px 0px rgba(255, 84, 68, 0.19);
      }

      // 搜索框文字颜色
      .van-field__control {
        color: rgba(255, 255, 255, 0.7);
      }

      // 搜索框图标
      .van-icon {
        margin-right: 3.2vw;
        color: rgba(255, 255, 255, 0.7);
        font-size: 20px;
      }

      // 搜索框背景
      .van-search__content {
        background: rgba(255, 255, 255, 0.4);
      }

      // placeholder文字样式
      input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
        font-weight: 900;
        font-family: PingFang;
      }
    }

    // 头部图
    .head-banner {
      .flex-center-j();
      margin: 12px 0 24px;

      img {
        width: 341px;
        height: 180px;
        border-radius: 5px;
        box-shadow: 0px 4px 20px 2px rgba(255, 91, 76, 0.7);
      }
    }
  }

  // 导航
  nav {
    ul {
      .flex-wrap();

      // 每块
      li {
        width: 20%;
        .flex-center-col();
        margin-bottom: 18px;

        img {
          width: 30px;
          height: 32px;
          margin-bottom: 8px;
        }
      }
    }
  }

  // 内容
  main {
    // 内容头部
    .main-top {
      // 积分兑换
      .exchange {
        width: 100%;
        margin-bottom: 14px;
      }
    }

    // 遮挡条
    .occlusion {
      // width: 373px;
      height: 9px;
      background: #efefef;
    }
  }

  // 内容中部
  .main-mid {
    // 标题
    .title {
      .flex-center-a();
      margin: 0 0 14px 14px;

      img {
        width: 13px;
      }

      span {
        margin-left: 6px;
        font-size: 17px;
        font-family: PingFang;
        font-weight: 500;
        color: #333333;
      }
    }

    // 内容
    .content {
      .flex-center-j();
      flex-wrap: wrap;
      padding-bottom: 26px;

      // 小图
      .img-s {
        width: 165px;
        border-radius: 3px;
        margin: 0 5px;
      }

      // 紫色阴影
      .violet {
        box-shadow: 0px 7px 9px 0px rgba(241, 67, 243, 0.6);
      }

      // 蓝色阴影
      .blue {
        box-shadow: 0px 7px 9px 0px rgba(69, 200, 249, 0.6);
      }

      // 橙色阴影
      .orange {
        box-shadow: 0px 6px 9px 0px rgba(248, 110, 105, 0.6);
      }

      // 灰色阴影
      .grey {
        box-shadow: 0px 4px 14px 0px rgba(198, 198, 198, 0.61);
      }

      // 大图
      .img-b {
        width: 341px;
        height: 114px;
        border-radius: 3px;
        margin-top: 14px;
      }
    }
  }

  // 内容底部
  .main-bot {
    background: #f8f8f8;
    padding-top: 14px;

    // 标题
    .title {
      .flex-center-a();
      margin: 0 0 14px 14px;

      img {
        width: 13px;
      }

      span {
        margin: 0 60% 0 6px;
        font-size: 17px;
        font-family: PingFang;
        font-weight: 500;
        color: #333333;
      }

      i {
        font-size: 14px;
        color: #c2c2c2;
        font-weight: 600;
      }
    }
  }

  // 老师列表
  .list {
    padding-bottom: 70px;

    // 每一块
    li {
      .flex-between();
      padding: 0 20px 0 13px;
      width: 341px;
      height: 144px;
      background: #ffffff;
      box-shadow: 0px 4px 14px 0px rgba(198, 198, 198, 0.61);
      border-radius: 4px;
      margin: 0 auto 16px;
    }

    // 头像
    .character {
      margin-right: 15px;

      img {
        width: 100px;
      }
    }

    // 姓名
    h2 {
      font-size: 15px;
      font-family: PingFang;
      font-weight: 500;
      color: #333333;
      line-height: 21px;
      margin-bottom: 6px;
    }

    // 按钮
    .btn span {
      width: 60px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      display: inline-block;
      background: linear-gradient(-23deg, #ff504b, #ff814e);
      box-shadow: 2px 3px 6px 0px rgba(253, 73, 38, 0.61);
      border-radius: 10px;
      font-size: 10px;
      font-family: PingFang;
      font-weight: 500;
      color: rgb(252, 252, 252);
      margin-right: 6px;
    }

    // 简介
    p {
      margin: 8px 0 9px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #a5a5a5;
      line-height: 20px;
    }

    // 热度
    .hot {
      display: flex;

      img {
        width: 11px;
        height: 13px;
        margin-right: 6px;
      }

      span {
        font-size: 11px;
        font-family: PingFang;
        font-weight: 500;
      }

      // 两个一起设置
      .flex {
        .flex-center-a();
        margin-right: 40px;
      }

      // 人气
      .popularity {
        color: #f79b24;
      }

      // 关注
      .follow {
        color: #a5a5a5;
      }
    }
  }
}
</style>
