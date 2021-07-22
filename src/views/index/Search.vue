<!-- 搜索 -->

<template>
  <div id="search">
    <!-- 搜索栏 -->
    <div class="inpu">
      <img
        src="../../assets/images/index/leader/矢量智能对象@3x.png"
        @click="goLast"
      />
      <input type="text" v-model="state.textValue" />
      <button @click="handleClick">搜索</button>
    </div>
    <main>
      <!-- 搜索记录 -->
      <div class="listcfont" v-if="state.search">
        <p class="searc">搜索记录</p>
        <div class="remove" @click="remove">
          <img
            src="../../assets/images/index/leader/shanchu.png"
            class="delet"
          />删除
        </div>
        <ul class="ulconet">
          <li v-for="(item, index) in state.list" :key="index" class="liconet">
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- 热门搜索 -->
      <div class="hotlist">
        <p>热门搜索</p>
        <ul>
          <li class="licon">李园</li>
          <li class="licon">白雅晴</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import router from "@/router/index.js";
export default {
  setup() {
    const state = reactive({
      textValue: "",
      search: false,
    });
    const handleClick = () => {
      if (state.textValue !== "") {
        state.list.push(state.textValue);
        state.search = true;
        state.textValue = "";
        console.log(JSON.stringify(state.list));
        localStorage.setItem("list", JSON.stringify(state.list));
      }
    };
    const goLast = () => {
      router.go(-1);
    };
    const remove = () => {
      localStorage.setItem("list", "[]");
      state.list = [];
      state.search = false;
    };
    onMounted(() => {
      state.list = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
      if (state.list.length > 0) {
        state.search = true;
      }
    });

    return {
      state,
      handleClick,
      goLast,
      remove,
    };
  },
};
</script>

<style lang="less">
#search {
  //搜索栏
  .inpu {
    width: 100%;
    height: 50px;
    background-color: white;
    position: relative;
    img {
      width: 10px;
      display: inline-block;
      margin-left: 20px;
      margin-top: 17px;
    }
    input {
      width: 260px;
      height: 33px;
      background-color: #eeeeee;
      margin-left: 20px;
      margin: auto;
      border: 0;
      border-radius: 6px;
      top: 9px;
      left: 52px;
      position: absolute;
    }
    button {
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      margin-left: 10px;
      border: 0;
      top: 18px;
      left: 320px;
      display: inline-block;
      position: absolute;
    }
  }
  .app {
    width: 100%;
  }
  p {
    width: 60px;
    height: 14px;
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #333333;
    display: inline-block;
  }
  main {
    display: flex;
    flex-direction: column;
    //搜索记录
    .listcfont {
      width: 100%;
      padding: 0 21px;
      position: relative;
      margin-top: 24px;
      .remove {
        position: absolute;
        right: 21px;
        display: inline-block;
        .delet {
          width: 11px;
          height: 13px;
          display: inline-block;
          margin: 4px 4px 0 0;
        }
      }
      .liconet {
        width: 66px;
        height: 29px;
        background: #e8e8e8;
        border-radius: 15px;
        line-height: 29px;
        text-align: center;
        float: left;
        margin-top: 18px;
        margin-right: 17px;
        font-weight: 500;
        color: #555555;
        position: relative;
        .searc {
          display: inline-block;
        }
      }
    }

    //热门搜索
    .hotlist {
      margin-top: 20px;
      ul {
        height: 100%;
      }
      .licon {
        width: 66px;
        height: 29px;
        line-height: 29px;
        background: linear-gradient(-23deg, #ff504b, #ff814e);
        box-shadow: 0px 0px 12px 0px rgba(253, 73, 38, 0.61);
        border-radius: 15px;
        text-align: center;
        float: left;
        margin-top: 18px;
        margin-left: 20px;
        color: white;
        font-weight: 500;
      }
      p {
        margin-left: 21px;
      }
    }
  }
}
</style>
