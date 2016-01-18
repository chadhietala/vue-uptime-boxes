<template>
  <div v-for="server in servers" track-by="name">
    <server-up :name="server.name" :days="server.days"></server-up>
  </div>
</template>

<script>
  import ServerUptime from './ServerUptime.vue';
  
  export default {
    components: {
      'server-up': ServerUptime
    }
  }
</script>

<style lang="css">
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  * {
    box-sizing: border-box;
  }
</style>