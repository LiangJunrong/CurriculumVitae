<template>
  <div class="part-one">
    <p>第一部分</p>
  </div>
</template>

<script>
export default {
  name: "partOne"
};
</script>

<style scoped>
.part-one {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>