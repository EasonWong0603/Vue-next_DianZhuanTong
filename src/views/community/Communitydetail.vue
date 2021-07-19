<template>
  <div class="detail">
    <van-nav-bar title="详情" left-arrow @click-left="onClickLeft" />
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
          <span>分享到</span>
          <span>111</span>
          <span>111</span>
          <span>111</span>
          <span>111</span>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="navhead">
        <van-tabs v-model="active">
          <van-tab title="评论123">
            <ul class="navul">
              <li>
                <p class="navimg"><img src="" alt="" /></p>
                <p class="">Rose</p>
                <p>导师真才实学，感觉理财方面收益良多</p>
                <p><span>8-21 1:23</span> <span></span></p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="转发20">
            <ul class="navul">
              <li>
                <p class="navimg"><img src="" alt="" /></p>
                <p class="">Rose</p>
                <p>导师真才实学，感觉理财方面收益良多</p>
                <p><span>8-21 1:23</span> <span></span></p>
              </li></ul
          ></van-tab>
          <van-tab title="赞2345">
            <ul class="navul">
              <li>
                <p class="navimg"><img src="" alt="" /></p>
                <p class="">Rose you</p>
                <p>暂无介绍</p>
              </li>
            </ul></van-tab
          >
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  setup() {
    const onClickLeft = () => {
      Toast("返回");
    };

    return {
      onClickLeft,
    };
  },
};
</script>





<style lang="less">
@import "../../assets/css/var.less";
.detail {
  .van-nav-bar .van-icon {
    color: #000000;
  }
  .van-ellipsis {
    width: 34px;
    height: 17px;
    font-size: 17px;
    font-family: PingFang;
    font-weight: 500;
    color: #333333;
  }
  .detailed {
    width: 100%;
    margin-bottom: 20px;
    .chart {
      width: 100%;
      height: 370px;
      height: 370px;
      background: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);
      padding: 13px 16px 43px 19px;
      position: relative;
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
        float: left;
        width: 100%;
        height: 40px;
        .flex-center();
        span {
          text-align: center;
          flex: 1 1 auto;
        }
      }
    }
  }

  //转发点击评论
  .nav {
    width: 374px;
    height: 498px;
    background: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(182, 182, 182, 0.42);

    .navul {
      li {
        margin-top: 10px;
        .navimg {
          display: block;
          height: 50px;
          width: 50px;
          background: red;
          float: left;
        }
      }
    }
  }
}
</style>
