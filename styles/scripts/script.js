const btnRequestForm = document.querySelector('.form__btn-save');
const inputForm = document.querySelector('.form__input');
const btnNewText = 'Круто, спасибо за доверие!';

function btnSave(button, input) {
    button.textContent = btnNewText;
    inputForm.value = "";
    //открыть форму и поставить переменную текст из переменной input
}

btnRequestForm.addEventListener('click', function(evt) {
    evt.preventDefault();
    btnSave (evt.target, inputForm);    
});