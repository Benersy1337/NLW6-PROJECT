export default function Modal(){


    const modalwrapper = document.querySelector('.modal-wrapper')

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        // Funcionalidade de atribuir a classe active para a modal
        modalwrapper.classList.add("active")
    }


    function close(){
        // Funcionalidade de remover a classe active da modal
        modalwrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}

