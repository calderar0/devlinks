function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')){
        html.classList.remove('light')
        img.setAttribute('alt', 'avatar1, choice of user')
    }else {
        html.classList.add('light')
        img.setAttribute('alt', 'avatar2, choice of user')    
    }
}