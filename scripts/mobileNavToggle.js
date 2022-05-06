function mobileNavToggle(){
    const navToggle = document.querySelector('.nav-burger-btn')

    if(navToggle){
        const headerMobileNav = document.querySelector('.header')
        const navMobile = document.querySelector('.nav')
        const navSocialLinks = document.querySelector('.nav-social-wrapper')   
        const mobileLinks = document.querySelectorAll('.nav__link') 

        navToggle.addEventListener('click', ()=>{
            window.scrollTo(0, 0)
            navToggle.classList.toggle('nav-burger-btn--active')
            headerMobileNav.classList.toggle('header-nav--active')
            navMobile.classList.toggle('nav--active')
            navSocialLinks.classList.toggle('nav-social-wrapper--active')
        })

        mobileLinks.forEach(element =>{
            element.addEventListener('click',()=>{
                navToggle.classList.toggle('nav-burger-btn--active')
                navMobile.classList.remove('nav--active')
                headerMobileNav.classList.remove('header-nav--active')
                navSocialLinks.classList.remove('nav-social-wrapper--active')
            })
        })
    }
}
mobileNavToggle()
