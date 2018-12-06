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

      // 城市数值
      let data = [
        { name: "金华", value: ["119.64", "29.12", "157"] },
        { name: "湘潭", value: ["112.91", "27.87", "154"] },
        { name: "岳阳", value: ["113.09", "29.37", "169"] },
        { name: "长沙", value: ["113", "28.21", "175"] },
        { name: "衢州", value: ["118.88", "28.97", "177"] },
        { name: "廊坊", value: ["116.7", "39.53", "193"] },
        { name: "菏泽", value: ["115.480656", "35.23375", "194"] },
        { name: "合肥", value: ["117.27", "31.86", "229"] },
        { name: "武汉", value: ["114.31", "30.52", "273"] },
        { name: "大庆", value: ["125.03", "46.58", "279"] }
      ];

      // 好友数
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

      myChart.setOption({
        // 标题
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
        // 注记
        tooltip: {
          trigger: "item",
          // 鼠标移动过去显示
          formatter: function(params) {
            if (params.value[2] == undefined) {
              if(!params.name) {
                return "该地区暂无用户";
              } else {
                return params.name + " : " + params.value;
              }
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        visualMap: {
          min: 0,
          max: 300,
          // 是否能通过手柄显示
          calculable: true,
          inRange: {
            color: ["#5cd4fc", "#27fdfd", "#05ffff"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "china"
        },
        series: [
          // 普通点
          {
            name: "一般城市",
            type: "scatter",
            coordinateSystem: "geo",
            // 点大小
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1
              }
            },
            data: data,
          },
          // 动态点
          {
            name: "排行前五",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: data.slice(5, 10),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            // 类似于 z-index
            zlevel: 1
          },
          // 省份
          {
            name: "好友数",
            type: "map",
            mapType: "china",
            // 是否允许缩放
            roam: false,
            label: {
              // 显示省份标签
              normal: {
                formatter: data,
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
  color: #53fdfd;
}
</style>