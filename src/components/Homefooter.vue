<template>
  <footer>
    <div class="wave-wrap">
      <svg
        version="1.1"
        id="wave"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 119 26"
      >
        <path
          class="path"
          d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z"
        ></path>
      </svg>
    </div>
    <ul class="list-wrap">
      <li data-color="#eccc68" title="Home">
        <!-- <img src="./1.png" alt="" /> -->
      </li>
      <li data-color="#ff6b81" title="Profile">
        <!-- <img src="./1.png" alt="" /> -->
      </li>
      <li data-color="#7bed9f" title="Get a beer!">
        <!-- <img src="./1.png" alt="" /> -->
      </li>
      <li data-color="#70a1ff" title="Files">
        <!-- <img src="./1.png" alt="" /> -->
      </li>
      <li data-color="#dfe4ea" title="Settings">
        <!-- <img src="./1.png" alt="" /> -->
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
footer {
  width: 440px;
}

.wave-wrap {
  position: relative;
  width: 100%;
  height: 33px;
  overflow: hidden;
  margin-bottom: 0;
}

.wave-wrap #wave {
  position: absolute;
  width: 150px;
  transform-origin: bottom;
  transform: scaleY(0.8);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.wave-wrap #wave .path {
  fill: #2f3542;
}

.list-wrap {
  display: flex;
  width: 100%;
  height: 80px;
  background: #2f3542;
  list-style: none;
  justify-content: space-around;
  padding: 0 20px;
}

.list-wrap li {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list-wrap li.active {
  margin-top: -10px;
}

.list-wrap li.active:before {
  transform: scale(1);
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
