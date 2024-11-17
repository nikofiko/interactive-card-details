const errorName = document.querySelector(".error-name")
const errorNumber = document.querySelector(".error-number")
const errorDate = document.querySelector(".error-date")
const errorCvc = document.querySelector(".error-cvc")

const cardNumber = document.querySelector(".card-number")
const cardName = document.querySelector(".card-name")
const cardDate = document.querySelector(".card-date")
const cardCvc = document.querySelector(".card-cvc")

const buttonConfirm = document.querySelector(".confirm")
const inputs = document.querySelectorAll("input")

const divInputs = document.querySelector(".text-inputs")
const divThanks = document.querySelector(".thank-you")


buttonConfirm.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input")
    let checker = 1
    console.log(inputs[0].value)

    if(containNumber(inputs[0].value) || inputs[0].value == ""){
        errorName.style.display = "block"
        checker = 2
    }else{
        errorName.style.display = "none"
        cardName.innerHTML = inputs[0].value
        checker = 1
    }

    if(containLetter(inputs[1].value) || inputs[1].value == ""){
        errorNumber.style.display = "block"
        checker = 2
    }else{
        errorNumber.style.display = "none"
        cardNumber.innerHTML = (inputs[1].value).replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
        inputs[1].value = (inputs[1].value).replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
        checker = 1
    }

    if(containLetter(inputs[2].value) || inputs[2].value == "" || containLetter(inputs[3].value) || inputs[3].value == ""){
        errorDate.style.display = "block"
        checker = 2
    }else{
        errorNumber.style.display = "none"
        cardDate.innerHTML = `${inputs[2].value}/${inputs[3].value}`
        checker = 1
    }

    if(containLetter(inputs[4].value) || inputs[4].value == ""){
        errorCvc.style.display = "block"
        checker = 2
    }else{
        errorCvc.style.display = "none"
        cardCvc.innerHTML = inputs[4].value
        checker = 1
    }

    if(checker == 1){
        divInputs.style.display = "none"
        divThanks.style.display = "flex"
    }
})

function containNumber(str){
    return /\d/.test(str);
}

function containLetter(str) {
    return /[a-zA-Z]/g.test(str);
  }