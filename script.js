const btnRequestHeader = document.querySelector('.header__form-btn-save');
const inputHeader = document.querySelector('.header__form-input');
const btnRequestFooter = document.querySelector('.footer__form-btn-save');
const inputFooter = document.querySelector('.footer__form-input');
const btnNewText = 'Круто, спасибо за доверие!';

function btnSave(button, input) {
    button.textContent = btnNewText;
    //открыть форму и поставить переменную текст из переменной input
}

btnRequestHeader.addEventListener('click', function(evt) {
    btnSave (evt.target, inputHeader);
})

// btnRequestFooter.addEventListener('click', function(evt) {
//     btnSave (evt.target, inputFooter);
// })