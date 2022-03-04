let wrap=document.querySelector('wrap-btn');

let open_btn=document.querySelector('open-btn');

let close_btn=document.querySelector('close-btn');

open_btn.addEventListener('click', function(){for(x=0;x<wrap.length;x++){wrap[x].classList.add('visible')}})

close_btn.addEventListener('click', function(){for(x=0;x<wrap.length;x++){wrap[x].classList.remove('visible')}}) 

