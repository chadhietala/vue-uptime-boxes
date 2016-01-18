<template>
  <server-uptime>
    <h1>{{name}}</h1>
    <h2>{{updays}} days up</h2>
    <h2>Biggest Streak: {{streak}}</h2>
    <div class="days">
    <template v-for="day in days" track-by="number">
      <up-day :day="day"></uptime-day>
    </template>
    </div>
  </server-uptime>
</template>

<script>
  import UptimeDay from './UptimeDay.vue';
  
  export default {
    name: 'server-up',
    components: {
      'up-day': UptimeDay
    },
    props: {
      name: String,
      days: Array
    },
    computed: {
      updays() {
        return this.days.reduce((upDays, day) => {
          return upDays += (day.up ? 1 : 0);
        }, 0);
      },
      streak() {
        const [streak] = this.days.reduce(([max, streak], day) => {
          if (day.up && streak + 1 > max) {
            return [streak + 1, streak + 1];
          } else if (day.up) {
            return [max, streak + 1];
          } else {
            return [max, 0];
          }
        }, [0, 0]);
        
        return streak;
      }
    }
  }
</script>

<style lang="css">
        server-uptime {
        display: block;
        overflow: hidden;
        margin: 0 auto;
        width: 50%;
      }
      server-uptime + server-uptime {
        margin: 20px auto 0 auto;
        border-top: 1px solid #999;
      }
      .days {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
      }
</style>