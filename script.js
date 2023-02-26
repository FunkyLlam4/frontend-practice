let nav = document.querySelector('#nav');
let btn = document.querySelector('#menu-toggle');
let content = document.querySelector('#content');

btn.addEventListener('click',()=>{
    if(nav.getAttribute('data-visible')==='true'){
        nav.setAttribute('data-visible', 'false');
        btn.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-expanded', 'false');
    }else{
        btn.setAttribute('aria-expanded', 'true');
        nav.setAttribute('data-visible', 'true');
        content.setAttribute('aria-expanded', 'true');
    }
})
