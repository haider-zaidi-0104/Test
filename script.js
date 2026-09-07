const header=document.querySelector('.header');const menu=document.querySelector('.menu');const links=document.querySelector('.links');document.querySelector('#year').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
