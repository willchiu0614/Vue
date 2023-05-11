<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-container>

            <h1>COVID-19 Tracking Dashboard</h1>
            <v-tabs v-model="tab">
              <v-tab v-for="item in labels" :key="item" :href="`#${item}`">
                {{ item }}
              </v-tab>
            </v-tabs>


            <v-window v-model="tab">
              <v-window-item v-for="chartData in renderData" :key="chartData.id" >
                <v-card flat>
                  <v-row v-if="arrPositive.length">
                    <v-col cols="12">
                      <h2>{{ chartData.label }}</h2>
                      <LineChart :label_p="chartData.label" :chartData_p="chartData.data" :chartOptions_p="chartOptions"
                        :chartColorOptions="chartData.chartColorOptions" />
                    </v-col>
                  </v-row>
                </v-card>
              </v-window-item>
            </v-window>



          </v-container>
        </v-card>
      </v-container>
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
      tab: null,
      items: [
        { tabN: 'One', content: 'Tab 1 Content' },
        { tabN: 'Two', content: 'Tab 2 Content' },
        { tabN: 'Three', content: 'Tab 3 Content' },
        { tabN: 'Four', content: 'Tab 4 Content' },
        { tabN: 'Five', content: 'Tab 5 Content' },
        { tabN: 'Six', content: 'Tab 6 Content' },
        { tabN: 'Seven', content: 'Tab 7 Content' },
        { tabN: 'Eight', content: 'Tab 8 Content' },
        { tabN: 'Nine', content: 'Tab 9 Content' },
        { tabN: 'Ten', content: 'Tab 10 Content' },
      ],
      // 建立所有的labels
      labels: [
        'Positive',
        'Hoptialized',
        'InIcu',
        'OnVentilators',
        'Recovered',
        'Deaths',
      ]
    }
  },
  computed: {
    renderData() {
      // 利用解構的方式從this中取出我們要用到的所有陣列
      const {
        arrPositive,
        arrHoptialized,
        arrInIcu,
        arrOnVentilators,
        arrRecovered,
        arrDeaths,
        labels
      } = this



      // 將所有要輸出的陣列整理為一個，做為最終迭代的對象
      const displayedDataArr = [
        arrPositive,
        arrHoptialized,
        arrInIcu,
        arrOnVentilators,
        arrRecovered,
        arrDeaths,
      ]

      // 設置每個圖表的背景與邊界顏色
      const chartColorOptions = [
        {
          borderColor: '#EF5350',
          backgroundColor: 'rgba(255, 56, 96, 0.1)',
        },
        {
          borderColor: '#FFF176',
          backgroundColor: 'rgba(191, 182, 63, 0.1)',
        },
        {
          borderColor: '#FFB74D',
          backgroundColor: 'rgba(239, 109, 9, 0.1)',
        },
        {
          borderColor: '#B3E5FC',
          backgroundColor: 'rgba(9, 140, 239, 0.1)',
        },
        {
          borderColor: '#00E676',
          backgroundColor: 'rgba(11, 227, 47, 0.1)',
        },
        {
          borderColor: '#E30B86',
          backgroundColor: 'rgba(239, 9, 140, 0.1)',
        },
      ]

      // 最終整理成一個陣列，每一個元素都包含標籤名稱、資料以及圖表顏色的設定
      return displayedDataArr.map((data, index) => ({
        label: labels[index],
        data,
        chartColorOptions: chartColorOptions[index],
      }))
    },
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
    console.log("arrPositive:", this.arrPositive)
  },
}
</script>