<!-- 群聊页 -->

<template>
  <div id="groupchat">
    <!-- 头部 -->
    <header>
      <van-nav-bar
        title="创建群聊"
        @click-left="onClickLeft"
        fixed
        left-arrow
        placeholder
      />
    </header>
    <!-- 内容 -->
    <main>
      <!-- 选中的 -->
      <div class="select">
        <span>已选：</span>
        <img
          v-for="(item, index) in state.selectList"
          :key="index"
          :src="item"
        />
      </div>
      <!-- 列表信息 -->
      <ul class="itemlist">
        <!-- 每个 -->
        <li
          class="each"
          v-for="(item, index) in state.list"
          :key="index"
          @click="handleclick(index)"
        >
          <!-- 复选框 -->
          <div
            class="checkbox"
            :class="{ active: state.actives[index] === true }"
          ></div>
          <!-- 头像 -->
          <img :src="item.img" />
          <!-- 名称 -->
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
// 引入路由
import rotuer from "../../router/index";
import { reactive, onMounted } from "vue";

import { getGroupchatDataApi } from "../../utils/api";

export default {
  setup() {
    const state = reactive({
      selectList: [], // 小头像
      actives: {}, // 复选框
      list: [], // 列表
    });

    // 导航点击返回上个页面
    const onClickLeft = () => {
      rotuer.go(-1);
    };

    // 复选框
    const handleclick = (i) => {
      if (!state.actives[i]) {
        state.actives[i] = true;
        state.selectList.push(state.list[i].img);
      } else {
        state.actives[i] = false;
        state.selectList = state.selectList.filter(
          (item) => item !== state.list[i].img
        );
      }
    };

    // 获取数据
    const getlist = async () => {
      const { data } = await getGroupchatDataApi();
      state.list = data.result;
    };

    // 展示数据
    onMounted(() => {
      getlist();
    });

    return {
      state,
      onClickLeft, // 导航点击返回上个页面
      handleclick, // 复选框
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";
#groupchat {
  // 头部
  header {
    // 导航背景
    .van-nav-bar {
      background: #f8f8f8;
    }

    // 导航的图标
    .van-nav-bar .van-icon {
      color: #b2b4b7;
      font-weight: 600;
    }

    // 导航的文字
    .van-nav-bar__title {
      font-size: 17px;
      font-weight: 600;
      color: #333;
    }
  }

  // 内容
  main {
    padding-left: 16px;
    background: #fff;

    // 选中的
    .select {
      height: 52px;
      .flex-center-a();
      overflow: auto;

      span {
        font-size: 13px;
        font-family: PingFangSC;
        font-weight: bold;
        color: #b3b3b3;
        flex-shrink: 0;
      }

      img {
        width: 29px;
        height: 29px;
        border-radius: 7px;
        margin-right: 7px;
        flex-shrink: 0;
      }
    }

    // 人物列表
    .itemlist {
      padding-right: 16px;

      // 每块
      .each {
        height: 73px;
        .flex-center-a();
        border-bottom: 1px solid #dadada;
      }

      // 复选框
      .checkbox {
        width: 22px;
        height: 22px;
        color: #fff;
        font-size: 16px;
        border: 1px solid #b9b9b9;
        border-radius: 50%;
      }

      // 选中的复选框
      .active {
        background: linear-gradient(-23deg, #ff514b, #ff814e);
        box-shadow: 0px 3px 6px 0px rgba(253, 73, 38, 0.61);
        border: none;
        position: relative;

        &::after {
          content: "✔";
          display: block;
          position: absolute;
          top: 2px;
          left: 5px;
        }
      }

      // 头像
      img {
        width: 45px;
        height: 45px;
        border-radius: 7px;
        margin: 0 15px 0 17px;
      }

      // 名称
      span {
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: bold;
        color: #333333;
      }
    }
  }
}
</style>
