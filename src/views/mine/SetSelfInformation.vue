<template>
  <div class="SetSelfInformation">
    <van-nav-bar
      title="个人资料设置"
      value="sexbase"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="setdetails">
      <!-- 头像 -->
      <van-cell title="头像" is-link :center="true">
        <!-- 上传头像 -->
        <van-uploader :after-read="afterRead" preview-size="45px" />
      </van-cell>
      <!-- 昵称 -->
      <van-cell
        title="昵称"
        is-link
        to="/setname"
        :value="username"
        :center="true"
      ></van-cell>
      <!-- 性别 -->
      <van-cell
        title="性别"
        is-link
        @click="showPopupsex"
        :value="sexbase ? sexbase : '未设置'"
        :center="true"
      />
      <!-- 选择时加在弹出框中 -->
      <!-- <van-cell is-link title="基础用法" @click="show = true" /> -->
      <van-action-sheet v-model:show="showsex">
        <van-picker
          ref="picker"
          title="性别"
          :columns="columns"
          @confirm="onConfirmsex"
          @cancel="onCancelsex"
        />
      </van-action-sheet>

      <!-- 生日 -->
      <van-cell
        title="生日"
        is-link
        @click="showPopup"
        :value="birthday ? birthday : '未设置'"
        :center="true"
      />
      <!-- 选择时间加在弹出框中 -->
      <van-action-sheet v-model:show="show">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-action-sheet>
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
//引入整个路由
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  setup() {
    // 定义整个路由
    const router = useRouter();

    //获取本地名字
    let username = ref(localStorage.getItem("username"));

    // 获取本地的个性签名
    let message = ref(localStorage.getItem("message"));
    //

    // 返回上一个页面按钮的事件
    const onClickLeft = () => {
      router.go(-1);
    };

    // 上传图片组件
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

    //设置生日组件信息
    // 生日
    const birthday = ref(localStorage.getItem("birthday") || ""); //单元格右侧显示文本
    // 时间组件
    const currentDate = ref(new Date()); //定义弹出时间即当前日期
    // 时间格式转string格式函数
    const formatter = (type, val) => {
      if (type === "year") {
        return `${val}-`;
      }
      if (type === "month") {
        return `${val}-`;
      }
      if (type === "day") {
        return `${val}`;
      }
      return val;
    };

    const show = ref(false);
    const showPopup = () => {
      show.value = true;
      birthday.value = "";
    };
    // 取消按钮
    const onCancel = () => {
      show.value = false;
    };
    //生日点击确定，弹出层消失，赋值到页面单元格右侧内容区
    const onConfirm = (value) => {
      birthday.value += formatter("year", value.getFullYear()); //添加当前年份，并格式化
      birthday.value += formatter("month", value.getMonth() + 1); //添加当前月份，并格式化
      birthday.value += formatter("day", value.getDate()); //添加当前日期，并格式化
      show.value = false; //弹窗消失
      localStorage.setItem("birthday", birthday.value);
    };

    // 性别弹出框组件
    const columns = ["男", "女", "第三性别"];
    let sexbase = ref(localStorage.getItem("sex") || "");
    //性别弹出层
    const showsex = ref(false);
    const showPopupsex = () => {
      showsex.value = true;
    };
    //性别点击确定，弹出层消失，赋值到页面
    const onConfirmsex = (value) => {
      sexbase.value = value;
      showsex.value = false;
      localStorage.setItem("sex", sexbase.value);
    };
    // 取消按钮
    const onCancelsex = () => {
      showsex.value = false;
      Toast("取消");
    };
    //获取焦点里面的内容消失
    const messageclean = () => {
      message.value = "";
    };
    //失去焦点保存个性签名到本地
    const messagehold = () => {
      localStorage.setItem("message", message.value);
      localStorage.setItem("growthvalue", 15);
    };

    return {
      username, //获取名字
      onClickLeft, //点击右上角返回上一页
      afterRead, //上传文件

      //性别
      sexbase, //性别
      showsex, //性别的
      showPopupsex, //性别的弹出
      onCancelsex, //性别的取消
      onConfirmsex, //性别的确定

      // 生日
      currentDate, //事件组件生日
      formatter,
      show, //生日
      showPopup, //生日弹出框组件
      columns, //存储所有的性别栏
      minDate: new Date(1888, 0, 1), //设置生日的最早时间
      maxDate: new Date(2023, 10, 1), //设置生日的最晚时间
      onCancel, //生日的取消
      onConfirm, //生日的确定

      //个性签名
      message, //个性签名
      messageclean, //获取焦点个性签名消失
      messagehold, //失去焦点，个签存到本地
      birthday,
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
  height: 100%;
  position: fixed;
  .van-nav-bar {
    margin-bottom: 16px;
    .van-icon {
      // 返回箭头的颜色
      color: #9c9c9c;
    }
  }

  .setdetails {
    // 个人资料具体设置的盒子
    .base-width;
    height: 344px;
    background: #ffffff;
    box-shadow: 1px 5px 7px 0px rgba(222, 222, 222, 0.38);
    border-radius: 10px;
    padding: 16px;
    .van-cell {
      height: 52px;
      line-height: 55px;
      border-radius: 10px;
      padding: 0;
    }
    // 设置的左边内容的内容和字体的设置
    .van-cell__title span {
      width: 71px;
      height: 11px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #323232;
      line-height: 12px;
    }
    .van-cell__value span {
      height: 11px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #cdcdcd;
      line-height: 12px;
    }

    .van-cell-group {
      //个性签名文本框
      height: 119px;
      margin: 0;
    }
  }
}
</style>
