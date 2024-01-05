import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown'


import 'primevue/resources/themes/lara-light-purple/theme.css'

const app = createApp(App)
app.use(PrimeVue, {
    unstyled: false
})
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown)


app

app.mount('#app')