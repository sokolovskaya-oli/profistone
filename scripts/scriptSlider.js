new Swiper('.image-slider',{
    pagination:{
        el: '.swiper-pagination',
        clikable: true
    },
    loop: true,
    autoplay:{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    slidesParView: 1,
})

new Swiper('.products-slider',{
    navigation:{
        nextEl:'.swiper-button-next_products',
        prevEl: '.swiper-button-prev_products'
    },
    pagination:{
        el: '.swiper-pagination_products',
        clikable: true
    },
    autoplay:{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,  
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
     
        // when window width is >= 768px
        767: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    }    
})

new Swiper('.feedback-slider',{
    navigation:{
        nextEl:'.swiper-button-next__feedback',
        prevEl: '.swiper-button-prev__feedback'
    },
    pagination:{
        el: '.swiper-pagination__feedback',
        clikable: true
    },
    autoplay:{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,  
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
        // when window width is >= 768px
        767: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20
          }
    }    
})


new Swiper('.projects-slider',{
    navigation:{
        nextEl:'.swiper-button-next__project',
        prevEl: '.swiper-button-prev__project'
    },
    pagination:{
        el: '.swiper-pagination__project',
        type:'fraction',
    },
    autoplay:{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    loop: true
})