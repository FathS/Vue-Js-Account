<template>
  <div class="kgfd">
    <v-chart :options="chartOptionsBar"></v-chart>
  </div>
</template>
<script>
import ECharts from "vue-echarts";
const test = 150;
export default {
  data() {
    return {
      dovizs: [],
      chartOptionsBar: {
        xAxis: {
          type: "category",
          data: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "17:30"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [test],
            type: "line"
          }
        ],
        title: {
          text: "Test",
          x: "center",
          textStyle: {
            fontSize: 24
          }
        },
        color: ["#127ac2"]
      }
    };
  },
  components: {
    "v-chart": ECharts
  },
  methods: {
    dovizList() {
      this.$axios.get("doviz/ChartList/").then(response => {
        this.dovizs = response.data;
        
      });
    }
  },
  created() {
    this.dovizList();
  }
};
</script>