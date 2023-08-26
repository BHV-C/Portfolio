// if(windows.matchmedia &&  windows.matchmedia('prefera-color='))

const btntoggle = document.querySelector('.toggle__input:checked');

btntoggle.addEventListener('click',() => {
    const body = document.body;
    if(body.classList.contains('dark')){
        body.classList.add('light');
        body.classList.remove('dark');
    }else if(body.classList.contains('light')){
        body.classList.add('dark');
        body.classList.remove('light');
    }
})

var typed = new typed(".text",{
    Strings: ["Web Developer", "Frontend Developer", "Biomedical Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});