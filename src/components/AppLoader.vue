<script>
export default {
  data() {
    return {
      fontsize: "4x",
    };
  },
};
</script>

<template>
  <div class="layover">
    <div class="icon">
      <font-awesome-icon icon="spinner" :size="fontsize" class="animate-spin" />
      <div class="mt-2">
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  color: lightgray;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  text-align: center;
}
// animazione loader
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 2s linear infinite;
}
</style>
