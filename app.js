let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll('.logo');
window.addEventListener('DOMContentLoaded',()=>{
   setTimeout(()=>{
       logoSpan.forEach((span,idx)=>{
           setTimeout(()=>{
               span.classList.add('active');

               },(idx+2)*320)
           });
           setTimeout(()=>{
               logoSpan.forEach((span,idx)=>{
                   setTimeout(()=>{
                       span.classList.remove('active');
                       span.classList.add('fade');
                   },(idx+2)*50);
               })
           },2000);
           setTimeout(()=>{
               intro.style.top='-100vh';  
           },2300);
           setTimeout(()=>{document.body.style.overflowY="visible";
       },2800);
   })
})
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
const hiddenELements=document.querySelectorAll('.hidden');
hiddenELements.forEach((el)=>observer.observe(el));
history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});