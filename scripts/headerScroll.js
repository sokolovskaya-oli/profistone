function headerScroll (){
    const header = document.querySelector('.header')
    const logo = document.querySelector('.header__logo-img')
    const logo2 = document.querySelector('.header__logo-img-2')
    const scrollChange = 1

    const classAdd = () =>{
        header.classList.add('header--active')
        logo.classList.add('header__logo-img--active')
        logo2.classList.add('header__logo-img-2--active')
    }
    const classRemove = () =>{
        header.classList.remove('header--active')
        logo.classList.remove('header__logo-img--active')
        logo2.classList.remove('header__logo-img-2--active')
    }

    window.addEventListener('scroll', () =>{
        if(window.scrollY > scrollChange){
            classAdd()  
        }
        else if(window.scrollY == 0){
            classRemove()
        }
    })  
}
headerScroll()
