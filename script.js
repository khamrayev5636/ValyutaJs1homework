const elForm = document.querySelector(".form");
const elInput = elForm.querySelector(".form__input-js");
const elSelect = elForm.querySelector(".form__select-js");
const elOutput = document.querySelector(".output-js");
const elBtn = document.querySelector(".btn-js")

elForm.addEventListener("submit" , (evt)=> {
    evt.preventDefault();

    const elInputValue = elInput.value.trim();
    const elSelectValue = elSelect.value.trim();

    elOutput.textContent = elInputValue * elSelectValue;

});



