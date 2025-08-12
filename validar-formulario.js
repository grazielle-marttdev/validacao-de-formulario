const botaoForm = document.getElementById('btn-form');
const campoInputETextarea = document.querySelectorAll('.campo-input input, .campo-textarea textarea');

botaoForm.addEventListener('click', (event) => {
    verificarCampos();
    event.preventDefault();
})


function verificarCampos() {
    campoInputETextarea.forEach(element => {
        if (element.value.trim() === "") {
            msgObrigatorio = element.nextElementSibling;

            element.classList.remove('borda-verde')
            element.classList.add('borda-vermelha')
            msgObrigatorio.classList.remove('msg-obrigatorio')

        } else {
            msgObrigatorio = element.nextElementSibling;

            element.classList.remove('borda-vermelha')
            msgObrigatorio.classList.add('msg-obrigatorio')
            element.classList.add('borda-verde')
        }
    });
}