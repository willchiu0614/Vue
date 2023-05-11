<template>
    <Line v-if="loaded" :data="updateChartData" :option="updateOptions" />
</template>
<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS , Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,PointElement,LineElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,PointElement,LineElement,)

export default {
  components:{Line},
  data(){
    return{
        chartData:{
            labels:[
            '2020/07/05',
            '2020/07/06',
            '2020/07/07',
            '2020/07/08',
            '2020/07/09',
            '2020/07/10',
            ],
            datasets: [
                {
                label: 'demo',
                data: [50, 40, 71, 51, 500, 49],
                // backgroundColor: 'rgba(0,255,2,1)',
                ...this.chartColorOptions
                },
            ],
        },
        options:{
            responsive: true,
            maintainAspectRatio: false
        },loaded:false
    }
    
  },
  methods:{

  },
  computed:{
    updateChartData() { 
        return this.chartData
    },
    updateOptions() {
         return this.options },
    
  },
  // 加入基本的資料驗證
  props: {
    label:{
        type:String,
    },
    chartData_p: {
        type: Array,
        required: true
      },
    chartOptions_p: {
      type: Object,
      default: () => {}
    },
    chartColorOptions: {
      type: Object,
    }
  },
  async mounted() {
    // 從傳入的資料中取出數字與日期，並將其反轉(因為我們拿到的是最新到最舊的資料)
    const dates = this.chartData_p?.map((d) => d.date).reverse()
    const totals = this.chartData_p?.map((d) => d.total).reverse()
 
    this.chartData.labels=dates
    this.chartData.datasets[0].data=totals
    this.options=this.chartOptions_p


    this.loaded=true;
  },
  created(){

  }
}
</script>