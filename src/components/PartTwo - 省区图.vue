<template>
  <div class="part-two" id="part-two"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

// 引用中国地图
require("echarts/map/js/china.js");

export default {
  name: "partTwo",
  data() {
    return {};
  },
  mounted() {
    this.drawTempMap();
  },
  methods: {
    drawTempMap() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-two"));

      // 微信前端好友统计
      // select: true 可以设置选定
      let myFriendData = [
        { name: "山东", value: 1 },
        { name: "四川", value: 1 },
        { name: "广东", value: 21 },
        { name: "广西", value: 1 },
        { name: "北京", value: 12 },
        { name: "甘肃", value: 1 },
        { name: "上海", value: 5 },
        { name: "陕西", value: 4 },
        { name: "湖北", value: 1 },
        { name: "湖南", value: 1 },
        { name: "山西", value: 1 },
        { name: "辽宁", value: 2 },
        { name: "江苏", value: 1 },
        { name: "河北", value: 3 },
        { name: "海南", value: 1 },
        { name: "河南", value: 1 }
      ];

      // 绘制图表
      myChart.setOption({
        title: {
          text: "jsliang 前端好友分布",
          textStyle: {
            color: "#fff"
          },
          subtext: "微信统计",
          subtextStyle: {
            color: "#fff"
          },
          x: "center"
        },
        // 移动显示条数
        tooltip: {
          trigger: "item"
        },
        // 数量颜色标记
        visualMap: {
          // 注记
          // show: false,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 20, end: 30 },
            { start: 10, end: 20 },
            { start: 0, end: 10 }
          ],
          color: ["#0bb9f3", "#59d3fc", "#8ce2ff"],
          textStyle: {
            color: "#fff"
          },
        },
        series: [
          {
            name: "好友数",
            type: "map",
            mapType: "china",
            // 是否允许缩放
            roam: false,
            label: {
              // 显示省份标签
              normal: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "deepskyblue", // 区域边框颜色
                areaColor: "#fff" // 区域颜色
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                borderWidth: 1,
                borderColor: "#fff",
                areaColor: "deepskyblue"
              }
            },
            // 数据
            data: myFriendData
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.part-two {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>