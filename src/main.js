import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})



export default app

const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 5000, yoyo: true }
).start();