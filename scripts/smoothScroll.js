function scrollHeader(){
    const links = document.querySelectorAll('.nav__link')
    const HEADER_OFFSET = 93;
    const HEADER_OFFSET_MOBILE = 530;
    let screenWidth;
    let scrollToSection;

    function getScreenWidth(){
        return screenWidth = window.screen.width 
    }
    links.forEach(element => {
        element.addEventListener('click', function(event){
            event.preventDefault()
            getScreenWidth()

            const sectionId = event.target.getAttribute('href').substr(1) 
            
            if(screenWidth <= 768){
                scrollToSection = document.getElementById(sectionId).offsetTop - HEADER_OFFSET_MOBILE
            }else{
                scrollToSection = document.getElementById(sectionId).offsetTop - HEADER_OFFSET
            }
        
            window.scrollTo({
                top: scrollToSection,
                behavior: "smooth"
            })   
        })   
    })
}
scrollHeader()
