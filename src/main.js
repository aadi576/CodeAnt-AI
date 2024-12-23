import { setupCounter } from './components/counter'
import './styles/main.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md text-center">
      <h1 class="text-3xl font-bold mb-4">Vite App</h1>
      <div class="counter"></div>
    </div>
  </div>
`

setupCounter(document.querySelector('.counter'))