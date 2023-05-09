<template>
    <div id="weather_app" 
    :class="weather.main && weather.main.temp >25 ?'warm':''">
      <div class="container">
        <!-- search bar -->
        <div class="search-box">
          <input 
          type="text" 
          class="search-bar" 
          placeholder="Search...." 
          v-model="query"
          @keyup.enter="fetchWeather"
          />
        </div>
  
        <div class="weather-wrapper" v-if="weather.main">
          <!-- location & date info -->
          <div class="location-box">
            <div class="location">{{weather.name}}</div>
            <div class="date">{{currentDate}}</div>
          </div>
  
          <!-- weather info -->
          <div class="weather-box">
            <div class="temperature">{{Math.round(weather.main.temp)}}°C</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <About></About> -->
  </template>
  
  <script>
  
  import dayjs from 'dayjs'
  import advancedFormat from 'dayjs/plugin/advancedFormat'
  dayjs.extend(advancedFormat)
  
  export default {
    name: 'App',
    components: {

    },
    data(){
      return{
        api_key: process.env.VUE_APP_WEATHER_API_KEY,
        base_url: 'https://api.openweathermap.org/data/2.5/',
        query: 'Taichung',
        weather: {},
        date: ''
      }
    },
    methods:{
      async fetchWeather()
      {
        const data = await fetch(`${this.base_url}weather?q=${this.query}&units=metric&appid=${this.api_key}`)
        this.weather=await data.json()
      }
    },
    computed: {
      currentDate() {
        return dayjs().format(`MMMM Do YYYY`)
      },
    },
    created(){
      console.log(process.env.VUE_APP_WEATHER_API_KEY);
      this.fetchWeather();
    },
    
  }
  </script>
  
  <style>
  #weather_app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 10px;
    width:50vw;
    background-image: url('../assets/cold.bg.jpg');
    background-size: cover;
    background-position: 50%;
    transition: 0.5s;
  }
  
  #weather_app.warm {
    background-image: url('../assets/warm.bg.jpg');
  }
  
  .container {
    height: 50vh;
    padding: 25px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    )
    
  }
  .search-box {
    width: 90%;
    margin-bottom: 20px;
  }
  
  .search-box .search-bar {
    display: block;
    width: 100%;
    padding: 5px;
    transition: all 0.4s ease-in;
    border-radius: 0 16px 0 16px;
    font-size: 20px;
    border: none;
    outline: none;
    background: none;
    background-color: hsla(0,0%,100%,.5);
  }
  .search-box .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 16px 0px 16px 0px;
  }
  .location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  
  .location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    font-style: italic;
  }
  .weather-box {
    text-align: center;
    margin-top: 15px;
  }
  .weather-box .temperature {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 60px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  .weather-box .weather {
    font-size: 48px;
    color: #fff;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  </style>
  