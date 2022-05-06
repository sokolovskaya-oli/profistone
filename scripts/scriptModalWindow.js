function scriptModalWindow (){
    const modalWindow = document.getElementById('modal-window')
    const closeWindowBtn = document.getElementById('modal-window-close-btn')
    const openModalWindowBtn = document.querySelectorAll('.btn-callback')
    
    openModalWindowBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            toggleModalWindow()
        })
    })

    closeWindowBtn.addEventListener('click',()=>{ 
        toggleModalWindow()
    })
    function toggleModalWindow(){
        modalWindow.classList.toggle('modal-window--active')
    }

}
scriptModalWindow()