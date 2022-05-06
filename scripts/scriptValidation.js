function validation (){
    const inputPhoneFaq = document.getElementById('input-phone-faq')
    const inputPhoneModal = document.getElementById('input-phone-modal')
    const inputErrorFaq = document.getElementById('input-error-faq')
    const inputErrorModal = document.getElementById('input-error-modal')
    const orderWindow = document.getElementById('modal-window-order')
    const successWindow = document.getElementById('modal-window-success')
    const orderButton = document.getElementById('modal-window-order-btn')
    let phoneNumber = '';

    orderButton.addEventListener('click', ()=>{
        successWindow.classList.toggle('modal-window__content-success--active')
        orderWindow.classList.toggle('modal-window__content-order--hidden')
    })

    inputPhoneFaq.addEventListener('change', (event)=>{
        phoneNumber = event.target.value
        validationForm(phoneNumber)
    })

    inputPhoneModal.addEventListener('change', (event)=>{
        phoneNumber = event.target.value
        validationForm(phoneNumber)
    })

    function checkNumber(phoneNumber){
        const regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return regExp.test(phoneNumber)
    }

    function validationForm(phoneNumber){
        if(checkNumber(phoneNumber) == !true){
            inputErrorFaq.classList.add('input-phone-label--invalid')
            inputErrorModal.classList.add('input-phone-label--invalid')
            inputPhoneFaq.classList.add('input-phone--invalid')
            inputPhoneModal.classList.add('input-phone--invalid')
            orderButton.disabled = true
        }else{
            inputErrorFaq.classList.remove('input-phone-label--invalid')
            inputErrorModal.classList.remove('input-phone-label--invalid')
            inputPhoneFaq.classList.remove('input-phone--invalid')
            inputPhoneModal.classList.remove('input-phone--invalid')
            orderButton.disabled = false
            orderButton.classList.add('button-modal--active')
        }
        
    }
}
validation()