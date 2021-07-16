<template>
  <!-- 积分详情页 -->
  <div class="pointsdetails">
    <header>
      <img
        src="../assets/images/index/PointsDetails/矢量智能对象拷贝.png"
        alt=""
      />
    </header>
    <main>
      <img src="../assets/images/index/PointsDetails/弧形光线拷贝@3x.png" />
    </main>
  </div>
</template>

<script>
// import { ref, reactive } from "vue";

export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.pointsdetails {
  height: 100%;
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
  }
}
</style>
