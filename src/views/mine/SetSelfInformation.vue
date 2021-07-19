<template>
  <div class="SetSelfInformation">
    <van-nav-bar
      title="个人资料设置"
      value="sexbase"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <!-- 头像 -->
      <van-cell title="头像" is-link :center="true">
        <!-- 上传头像 -->
        <van-uploader :after-read="afterRead" preview-size="45px" />
      </van-cell>
      <!-- 昵称 -->
      <van-cell title="昵称" is-link to="/setname" :value="username"></van-cell>
      <!-- 性别 -->
      <van-cell
        title="性别"
        is-link
        @click="showPopup1"
        :value="sexbase ? sexbase : '未设置'"
      />
      <!-- 选择时加在弹出框中 -->
      <!-- <van-cell is-link title="基础用法" @click="show = true" /> -->
      <van-action-sheet v-model:show="show1">
        <van-picker
          ref="picker"
          title="性别"
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-action-sheet>

      <!-- 生日 -->
      <van-cell
        title="生日"
        is-link
        :value="birthday ? birthday : 'bbb'"
        @click="showPopup"
      />
      <!-- 选择时间加在弹出框中 -->
      <van-popup
        v-model:show="show"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
      <!-- 个性签名 -->
      <van-cell-group inset>
        <van-field
          v-model="message"
          placeholder="请输入15字以内的内容"
          rows="2"
          autosize
          label="个性签名"
          type="textarea"
          maxlength="15"
          @focus="messageclean"
          @blur="messagehold"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  setup() {
    //获取本地名字
    let username = ref(localStorage.getItem("username"));
    const router = useRouter();
    let message = ref(localStorage.getItem("message"));

    // 返回上一个页面按钮的事件，并且把个性签名的内容上传到本地
    const onClickLeft = () => {
      router.push("/setup");
    };

    // 上传图片组件
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };
    //获取本地储存里的生日
    let birthday = ref(localStorage.getItem("birthday")); //获取本地的生日数据

    const currentDate = ref(new Date(2021, 0, 17)); // 时间组件
    const show1 = ref(false);
    const showPopup1 = () => {
      show1.value = true;
    };
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    // 性别弹出框组件
    const columns = ["男", "女", "第三性别"];
    let sexbase = ref("");
    const onConfirm = (value) => {
      sexbase.value = value;
      show1.value = false;
    };
    const onCancel = () => {
      show1.value = false;
      Toast("取消");
    };
    const messageclean = () => {
      message.value = "";
    };
    //失去焦点保存个性签名到本地
    const messagehold = () => {
      localStorage.setItem("message", message.value);
    };

    return {
      username, //获取名字
      onClickLeft, //点击右上角返回上一页
      afterRead, //上传文件
      minDate: new Date(1888, 0, 1), //设置生日的最早时间
      maxDate: new Date(2023, 10, 1), //设置生日的最晚时间
      currentDate, //事件组件
      show1, //性别的
      showPopup1,
      show,
      showPopup, //生日弹出框组件
      birthday, //获取本地的生日数据
      columns,
      onCancel,
      onConfirm,
      sexbase,
      message,
      messageclean,
      messagehold,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
.SetSelfInformation {
  //个人资料页面
  .base-width;
  height: 812px;
  .van-icon {
    // 返回箭头的颜色
    color: #9c9c9c;
  }
  .van-uploader__input {
    width: 45px;
    height: 45px;
  }
  .van-cell-group {
    //个性签名文本框
    .base-width;
    height: 119px;
    margin: 0;
  }
}
</style>
