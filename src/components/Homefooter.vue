<template>
  <footer>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>自定义</span>
        <template #icon="props">
          <van-image
            height:100%
            :src="props.active ? icon.active : icon.inactive"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: require("../assets/images/home/index_b.png"),
      inactive: require("../assets/images/home/index_s.png"),
    };
    return {
      icon,
      active,
    };
  },
};
</script>

<style lang="less">
.van-tabbar {
  height: 49px;
}
// footer {
//   width: 375px;
//   margin-bottom: 34px;
//   background: #000;
//   position: absolute;
//   bottom: 0;
//   // right: 0;
//   // left: 0;
//   .wave-wrap {
//     position: relative;
//     width: 375px;
//     height: 16px;
//     overflow: hidden;
//     // margin-bottom: 0;
//     #wave {
//       position: absolute;
//       width: 150px;
//       transform-origin: bottom;
//       transform: scaleY(0.8);
//       transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//       .path {
//         fill: #f8f8f8;
//       }
//     }
//   }
//   .list-wrap {
//     width: 375px;
//     height: 49px;
//     display: flex;
//     justify-content: space-around;
//     background: #f8f8f8;
//     padding: 0 20px;
//     li {
//       cursor: pointer;
//       position: relative;
//       background: blue;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//     }
//     li.active {
//       margin-top: -10px;
//       background: red;
//     }
//     li.active:before {
//       transform: scale(1);
//     }
//   }
// }

// img {
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// }
</style>
