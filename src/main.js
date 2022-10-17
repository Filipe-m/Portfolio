import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})



export default app

const animatedImage = document.querySelectorAll('.watching');

const observer = new IntersectionObserver( (entries)=>{
  entries.forEach( (entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
})

animatedImage.forEach( (el)=> observer.observe(el))