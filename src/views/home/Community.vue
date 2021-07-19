<template>
  <div class="community">
    <!--顶部-->
    <div class="head">
      <span class="hot">热门动态</span>
      <span class="newest">最新动态</span>
      <span class="camera">相机</span>
    </div>
    <ul class="portrait">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="detailed">
      <ul class="chart">
        <li class="chart1"></li>
        <li class="chart2">
          <p>Rose</p>
          <span>31分钟</span>
        </li>
        <li class="chart3">+ 关注</li>
        <li class="chart4">
          你还在纠结大盘不放量吗？其实你知道A股已经开始裂变了吗？美股化顿，港股化已是不争的事实，A股不需要全面上涨，全面放量，现在就是精准打击、精准放量阶段，只有集中力量把科技、金融撬动，才能有效刺激放量。多方位的刺激与地域性的差异导致全面放量现在就是精准打击
        </li>
        <li class="chart5"></li>
        <li class="chart6">
          <span>转发</span>
          <span>1234</span>
          <span>2345</span>
        </li>
      </ul>
      <ul class="chart">
        <li class="chart1"></li>
        <li class="chart2">
          <p>阳光的阳光</p>
          <span>40分钟</span>
        </li>
        <li class="chart3">+ 关注</li>
        <li class="chart4">
          你还在纠结大盘不放量吗？其实你知道A股已经开始裂变了吗？美股化顿，港股化已是不争的事实，A股不需要全面上涨，全面放量，现在就是精准打击、精准放量阶段，只有集中力量把科技、金融撬动，才能有效刺激放量。多方位的刺激与地域性的差异导致全面放量现在就是精准打击
        </li>
        <li class="chart5">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </li>
        <li class="chart6">
          <span>转发</span>
          <span>1234</span>
          <span>2345</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPersonlistDataApi } from "@/utils/api";
export default {
  name: "community",
  data() {
    return {
      portList: [],
    };
  },
  mounted() {
    this.getRatedData();
  },
  methods: {
    async getRatedData() {
      const res = await getPersonlistDataApi();
      // this.portList =
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";

.community {
  width: 100%;
  height: 600px;

  //顶部
  .head {
    width: 375px;
    height: 44px;
    background: #f8f8f8;
    .flex-center-a();
    .hot {
      width: 100px;
      height: 17px;
      font-size: 18px;
      font-family: PingFang;
      font-weight: bold;
      color: #ff504b;
      margin-left: 19px;
    }
    .newest {
      width: 52px;
      height: 13px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #666666;
      margin-right: 160px;
      margin-top: 5px;
    }
    .camera {
      margin-top: 5px;
    }
  }
  //头像
  .portrait {
    width: 100%;
    height: 82px;
    display: flex;
    font-size: @s-font;
    overflow: auto;
    li {
      display: flex;
      float: left;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: red;
      flex-shrink: 0;
      margin-left: 20px;
      margin-top: 20px;
    }
  }

  //个人消息
  .detailed {
    width: 100%;
    .chart {
      width: 100%;
      height: 370px;
      height: 370px;
      background: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);
      border-radius: 17px 17px 0px 0px;
      padding: 13px 16px 43px 19px;
      position: relative;
      margin-bottom: 40px;
      li {
        display: block;
      }
      .chart1 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: red;
        float: left;
      }
      .chart2 {
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
      .chart3 {
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
      .chart4 {
        margin-top: 16px;
        float: left;
        width: 340px;
        height: 98px;
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #666666;
        line-height: 20px;
        display: -webkit-box; /*将对象转为弹性盒模型展示*/
        -webkit-box-orient: vertical; /*设置弹性盒模型子元素的排列方式*/
        -webkit-line-clamp: 5; /*限制文本行数*/
        overflow: hidden; /*超出隐藏*/
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
      .chart5 {
        width: 338px;
        height: 147px;
        background: #f8f8f8;
        border-radius: 3px;
        background: red;
        float: left;
        margin-top: 10px;
      }
      .chart6 {
        display: flex;
        position: absolute;
        width: 336px;
        height: 39px;
        background: #fff;
        box-shadow: 0px 0px 9px 0px rgba(203, 185, 177, 0.42);
        border-radius: 3px;
        bottom: -15px;
        .flex-between();
      }
    }
  }
}
</style>
