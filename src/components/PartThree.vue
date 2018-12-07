<template>
  <div class="part-three" id="part-three"></div>
</template>

<script>

// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  name: "partThree",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-three"));

      myChart.setOption({
        title: {
          text: "技能分布图",
          textStyle: {
            color: "#fff"
          },
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [ "HTML5", "CSS3", "JavaScript", "jQuery", "Vue", "Node", "微信小程序", "其他" ]
        },
        calculable: true,
        series: [
          {
            name: "技能分布",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            data: [
              { value: 15, name: "HTML5" },
              { value: 15, name: "CSS3" },
              { value: 20, name: "JavaScript" },
              { value: 20, name: "jQuery" },
              { value: 20, name: "Vue" },
              { value: 15, name: "Node" },
              { value: 25, name: "微信小程序" },
              { value: 15, name: "其他" }
            ]
          }
        ],
        color: ['#00bfff','#00ffdd','#207ffc','#00ffea']
        // color: ['rgb(254,67,101)','rgb(252,157,154)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)']
      });
    }
  }
};
</script>

<style scoped>
.part-three {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  color: #00ffea;
}
</style>