<template>
	<uptime-day>
    <span class="uptime-day {{style}}"></span>
    <span class="hover">{{day.number}}: {{memo}}</span>
  </uptime-day>
</template>

<script>
  export default {
    name: 'up-day',
    props: {
      day: Object
    },
    computed: {
      memo() {
        return this.day.up ? 'Servers operational!' : 'Red alert!';
      },
      style() {
        return this.day.up ? 'good' : 'bad'
      }
    }
  }
</script>

<style lang="css">
      uptime-day {
        display: flex;
      }
      span.uptime-day {
        width: 10px;
        height: 10px;
        margin: 1px;
      }
      .hover {
        display: none;
      }
      .uptime-day:hover + .hover {
        display: flex;
        position: absolute;
        margin-top: -35px;
        margin-left: -30px;
        border-radius: 4px;
        color: #eee;
        background-color: #333;
        padding: 10px;
        font-size: 11px;
      } 
      
      .good {
        background-color: #8cc665
      }
      
      .bad {
        background-color: #ccc;
      }
</style>