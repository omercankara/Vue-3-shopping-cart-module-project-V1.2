import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App).use(store).use(router);

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return parseFloat(value).toLocaleString(undefined,{minimumFractionDigits:2}) + " "+"$"
  }
}

app.mount('#app')



