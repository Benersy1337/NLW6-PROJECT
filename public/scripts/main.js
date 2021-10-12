import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')

const modalDescription = document.querySelector('.modal p')

const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // Adicionar a Escuta

    button.addEventListener("click", handleClick)

})



// Quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{

    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){

    // para nao mudar o diretorio, estava colocando '#' quando clicava junto ao diretorio
    event.preventDefault()

    // Criando variável que armazena marcar como lida ou excluir
    const text = check ? "Marcar como lida" : "Excluir"

    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")

    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

