import Vue from 'vue';
import App from './components/App.vue';

function servers() {
  return [
    server("Stefan's Server"),
    server("Godfrey's Server"),
    server("Yehuda's Server"),
    server("Chad's Server"),
    server("Robert's Server 1"),
    server("Robert's Server 2"),
    server("Robert's Server 3"),
    server("Robert's Server 4"),
    server("Robert's Server 5"),
    server("Robert's Server 6")
  ];
}

function server(name) {
  let days = [];

  for (let i=0; i<=364; i++) {
    let up = Math.random() > 0.2;
    days.push({ number: i, up });
  }

  return { name, days };
}

const AppComponent = Vue.extend(App);

const b = document.getElementById('play');

let app;

b.addEventListener('click', () => {
  if (b.innerText === 'Play') {
    app = new AppComponent({
      el: '#app',
      data() {
        return {
          servers: servers()
        }
        
      }
    });

    setInterval(() => {
      app.servers = servers();
    });
    b.innerHTML = 'Pause';
  } else {
    app.$destroy();
    b.innerHTML = 'Play'
  }

});

