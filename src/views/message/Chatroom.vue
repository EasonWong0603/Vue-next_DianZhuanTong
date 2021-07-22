<template>
  <div class="chatroom">
    <!-- 导航 -->
    <div class="rander" v-for="item in state.listData" :key="item">
      <van-nav-bar :fixed="true" :placeholder="true" :z-index="10000">
        <template #title
          ><p style="font-weight: 800">{{ item.name }}</p></template
        >
        <template #left>
          <van-icon
            :name="
              require('../../assets/images/index/Message/icon_left_arrow@3x.png')
            "
            size="12"
            @click="back"
          />
        </template>
        <template #right>
          <van-icon
            name="ellipsis"
            size="20px"
            color="#969799"
            @click="gotoChatdetails()"
          />
        </template>
      </van-nav-bar>

      <!-- 聊天 -->

      <div class="message">
        <div class="send">
          <div class="time">05/22 06:30</div>
          <div class="msg">
            <img
              style="
                border: 1px solid #ddd;
                height: 36px;
                width: 36px;
                border-radius: 18px;
              "
              :src="item.img"
              alt=""
            />

            <p>你好在不在呀，妹子！</p>
          </div>
        </div>
      </div>
      <div class="show" v-for="item1 in textlist" :key="item1">
        <!-- <div class="time">05/22 06:30</div> -->
        <div class="msg">
          <img
            style="
              border: 1px solid #ddd;
              height: 36px;
              width: 36px;
              border-radius: 18px;
            "
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            alt=""
          />
          <p>{{ item1 }}</p>
          <!-- <ul>
            <li>
             
            </li>
          </ul> -->
        </div>
      </div>
      <div class="footer">
        <input type="text" v-model="textValue" />
        <p @click="handleClick">发送</p>
        <img src="../../assets/images/index/Message/footer.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted, ref } from "vue";
//引入整个路由
import { useRouter } from "vue-router";
import { getFriendbackApi } from "../../utils/api";

export default {
  props: ["id"],

  setup(props) {
    // 定义整个路由
    const router = useRouter();
    //返回
    const back = () => {
      router.back();
    };
    //渲染联系人数据
    const state = reactive({
      listData: "",
    });
    const randerList = async () => {
      const res = await getFriendbackApi({ id: props.id });
      state.listData = res.data;
    };
    onMounted(() => {
      randerList();
    });
    //跳转详情id
    const gotoChatdetails = () => {
      router.push("/chatdetails/" + props.id);
    };

    //点击发送
    const textValue = ref("");
    const textlist = ["你好", "请问现在有时间吗"];

    const handleClick = () => {
      if (textValue.value !== "") {
        textlist.push(textValue.value);
        textValue.value = "";
      }
    };
    return {
      back,
      gotoChatdetails,
      state,
      randerList,
      textValue,
      textlist,
      handleClick,
    };
  },
};
</script>

<style lang="less">
.chatroom {
  .message {
    padding: 10px;
  }
  .time {
    font-size: 12px;
    color: #999;
    margin-top: 14px;

    margin-bottom: 14px;
    text-align: center;
  }

  .footer {
    position: fixed;
    bottom: 0;
    height: 92px;
    line-height: 14px;
    width: 100%;
    max-width: 720px;
    border-top: 0px solid #ddd;
    input {
      margin-left: 3px;
      width: 285px;
      height: 34px;
      border-radius: 17px;
      border: 0px solid #ddd;
      padding: 0 10px;
      margin-top: 8px;
      margin-left: 10px;
    }
    p {
      width: 63px;
      height: 34px;
      font-size: 14px;
      color: #fff;
      line-height: 35px;
      text-align: center;
      background: linear-gradient(-23deg, #ff514b, #ff814e);
      border-radius: 17px;
      float: right;
      margin-top: 8px;
      margin-right: 10px;
    }
    img {
      margin-top: 10px;
      width: 100%;
    }
  }

  .send:after,
  .show:after,
  .msg:after {
    content: "";
    clear: both;
    display: table;
  }

  .msg > img {
    width: 11px;
    float: left;
  }
  .msg > p {
    float: left;
    margin: 0px 6px;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    position: relative;
    border-radius: 10px;
    max-width: 620px;
    box-sizing: border-box;
  }

  .show .msg img,
  .show .msg p,
  .show .msg {
    float: right;
  }

  .show {
    padding: 10px;
  }
}
</style>
