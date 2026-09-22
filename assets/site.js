
document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav-right');
  if(b&&n)b.addEventListener('click',()=>{n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))});
  document.querySelectorAll('.nav-right a').forEach(a=>a.addEventListener('click',()=>n&&n.classList.remove('open')));
  const slide=document.getElementById('slide');
  if(slide){
    const images=['assets/screens/1.jpg','assets/screens/2.jpg','assets/screens/3.jpg','assets/screens/4.jpg','assets/screens/5.jpg','assets/screens/6.jpg','assets/screens/7.jpg','assets/screens/8.jpg','assets/screens/9.jpg','assets/screens/10.jpg','assets/screens/11.jpg'];
    let i=0;
    setInterval(()=>{i=(i+1)%images.length;slide.src=images[i]},1800);
  }
});
