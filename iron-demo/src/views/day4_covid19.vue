<template>
  <v-app>
    <v-main>
      <h1>COVID-19 Tracking Dashboard</h1>
      <!-- <LineChart/> -->
      <v-row v-if="arrPositive.length">
        <v-col cols="12">
          <LineChart
            label="Positive"
            :chartData_p="arrPositive"
            :chartOptions_p="chartOptions"
            :backgroundColor_p="`rgba(255, 0, 0, 1)`"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import dayjs from 'dayjs'
import axios from 'axios'
import LineChart from './LineChart.vue'
export default {
  name: 'App',
  components: {
    LineChart,
  },
  data() {
    return {
      arrPositive: [],
      arrHoptialized: [],
      arrInIcu: [],
      arrOnVentilators: [],
      arrRecovered: [],
      arrDeaths: [],
      chartOptions: {  
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },

  async created() {
    let { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    )
    console.log(data)

    // 只取最近一個月的資料
    data = data.slice(0, 30)
    
    // 迭代陣列中的每個元素
    data.forEach((item) => {
      // 利用dayjs將原本的20201010改為2020/10/10
      const date = dayjs(`${item.date}`).format('YYYY/MM/DD')
      
      // 利用解構的方式取出data內我們需要的值
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        recovered,
        onVentilatorCurrently,
        death,
      } = item
      
      // 將值推進對應的陣列，每一個值都需要對應一個日期，所以要以物件的方式傳入
      this.arrPositive.push({ date, total: positive })
      this.arrHoptialized.push({ date, total: hospitalizedCurrently })
      this.arrDeaths.push({ date, total: death })
      this.arrRecovered.push({ date, total: recovered })
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently })
      this.arrInIcu.push({ date, total: inIcuCurrently })
    })
    console.log("arrPositive:",this.arrPositive)
  },
}
</script>