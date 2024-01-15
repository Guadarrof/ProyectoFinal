let formName= document.getElementById('nameForm');
let formPrice=document.getElementById('priceForm');
let formStock=document.getElementById('stockForm');
let formBrand=document.getElementById('brandForm');
let formCategory=document.getElementById('categoryForm');
let formShortDescription=document.getElementById('shortDescriptForm');
let formLongDescription=document.getElementById('longDescriptForm');
let formDeliveryChk=document.getElementById('deliveryForm');
let formStartAge=document.getElementById('startAgeForm');
let formEndAge=document.getElementById('endAgeForm');
let formPicture=document.getElementById('pictureForm');

let nameError = document.getElementById("nameError")
let priceError = document.getElementById("priceError")
let stockError = document.getElementById("stockError")
let brandError = document.getElementById("brandError")
let categoryError = document.getElementById("categoryError")
let shortDescriptionError = document.getElementById("shortDescriptError")
let startAgeError = document.getElementById("startAgeError")
let endAgeError = document.getElementById("endAgeError")


let inputList=document.getElementsByTagName('input');


function testStrings(strg){
    const regexp = new RegExp ("^[A-Za-z Ññ]+$")
    return regexp.test(strg)
}

function stringLength(strg, minLength, maxLength){
    if (strg.length < minLength){
        return `Este campo requiere un minimo de ${minLength} caracteres`
    } else if (strg.length > maxLength){
        return `Este campo acepta un maximo de ${maxLength} caracteres`
    }else{
        return true
    }
}

function validNumber(num){
    if (parseInt(num) >= 0){
        return true;
    } else {
        return `Este campo solo acepta numeros mayores o iguales a 0`;
    }
}

function requiredInput(input){
    if (input.value.trim() ==''){
        return `El siguiente campo es requerido`
    }else{
        return true
    }
}

let integerNum = num => Number.isInteger(num)

let validForm = true

//Name
function validateName(){
    if (testStrings(formName.value)){
        let validLength= stringLength(formName.value, 2, 30)
        if (validLength===true){
            formName.setAttribute('aria-invalid', 'false');
            nameError.innerText = "";
            nameError.style.display = "none";
        } else {
            formName.setAttribute('aria-invalid', 'true');
            nameError.innerText = validLength;
            nameError.style.display = "block";
            validForm = false;
        }
    }else{
        formName.setAttribute('aria-invalid', 'true');
        nameError.innerText = "El siguiente campo solo acepta caracteres alfabeticos.";
        nameError.style.display = "block";
        validForm = false;
    }
}

formName.addEventListener('change', cleanMessages)

//Brand

function validateBrand(){

    if (testStrings(formBrand.value)){
        let validLength= stringLength(formBrand.value, 2, 25)
        if (validLength===true){
            formBrand.setAttribute('aria-invalid', 'false');
            brandError.innerText = "";
            brandError.style.display = "none";
        } else {
            formBrand.setAttribute('aria-invalid', 'true');
            brandError.innerText = validLength;
            brandError.style.display = "block";
            validForm = false;
        }
    }else {
        formBrand.setAttribute('aria-invalid', 'true');
        brandError.innerText = "El siguiente campo solo acepta caracteres alfabeticos.";
        brandError.style.display = "block";
        validForm = false;
    }
}

//Category

function validateCategory(){
    if (testStrings(formCategory.value)){
        let validLength= stringLength(formCategory.value, 2, 10)
        if (validLength===true){
            formCategory.setAttribute('aria-invalid', 'false');
            categoryError.innerText = "";
            categoryError.style.display = "none";
        } else {
            formCategory.setAttribute('aria-invalid', 'true');
            categoryError.innerText = validLength;
            categoryError.style.display = "block";
            validForm = false;
        }
    }else {
        formCategory.setAttribute('aria-invalid', 'true');
        categoryError.innerText = "El siguiente campo solo acepta caracteres alfabeticos.";
        categoryError.style.display = "block";
        validForm = false;
    }
}

//ShortDescription

function validateShortDescript(){
    if (testStrings(formShortDescription.value)){
        let validLength= stringLength(formShortDescription.value, 15, 50)
        if (validLength===true){
            formShortDescription.setAttribute('aria-invalid', 'false');
            shortDescriptionError.innerText = "";
            shortDescriptionError.style.display = "none";
        } else {
            formShortDescription.setAttribute('aria-invalid', 'true');
            shortDescriptionError.innerText = validLength;
            shortDescriptionError.style.display = "block";
            validForm = false;
        }
    }else {
        formShortDescription.setAttribute('aria-invalid', 'true');
        shortDescriptionError.innerText = "El siguiente campo solo acepta caracteres alfabeticos.";
        shortDescriptionError.style.display = "block";
        validForm = false;
    }
}

// Price

function validatePrice(){
    if(!validNumber(formPrice)){
        formPrice.setAttribute('aria-invalid', 'true');
        priceError.innerText = validNumber;
        priceError.style.display = "block";
        validForm = false;
    }else{
        formPrice.setAttribute('aria-invalid', 'false');
        priceError.innerText = "";
        priceError.style.display = "none";
        validForm = true;
    }
}


//Stock

function validateStock(){
    let stock= parseInt(formStock.value)
    if(!validNumber(stock)){
        formStock.setAttribute('aria-invalid', 'true');
        stockError.innerText = validNumber;
        stockError.style.display = "block";
        validForm = false;
    }else if(!integerNum(stock)){
        formStock.setAttribute('aria-invalid', 'true');
        stockError.innerText = `Este campo solo acepta numeros enteros`;
        stockError.style.display = "block";
        validForm = false;
    }else{
        formStock.setAttribute('aria-invalid', 'false');
        stockError.innerText = "";
        stockError.style.display = "none";
        validForm = true;
    }
}

function validateAge(){
    let startAge = parseInt(formStartAge.value)
    if(!validNumber(startAge)){
        formStartAge.setAttribute('aria-invalid', 'true');
        startAgeError.innerText = validNumber;
        startAgeError.style.display = "block";
        validForm = false;
    }else if(!integerNum(startAge)){
        formStartAge.setAttribute('aria-invalid', 'true');
        startAgeError.innerText = `Este campo solo acepta numeros enteros`;
        startAgeError.style.display = "block";
        validForm = false;
    }else{
        formStartAge.setAttribute('aria-invalid', 'false');
        startAgeError.innerText = "";
        startAgeError.style.display = "none";
        validForm = true;
    }
    let endAge = parseInt(formEndAge.value)
    if(!validNumber(endAge)){
        formEndAge.setAttribute('aria-invalid', 'true');
        endAgeError.innerText = validNumber;
        endAgeError.style.display = "block";
        validForm = false;
    }else if(!integerNum(endAge)){
        formEndAge.setAttribute('aria-invalid', 'true');
        endAgeError.innerText = `Este campo solo acepta numeros enteros`;
        endAgeError.style.display = "block";
        validForm = false;
    }else if (endAge<=startAge){
        formEndAge.setAttribute('aria-invalid', 'true');
        endAgeError.innerText = "Debe ser un numero mayor a la edad minima";
        endAgeError.style.display = "block";
        validForm = false;
    }else{
        formEndAge.setAttribute('aria-invalid', 'false');
        endAgeError.innerText = "";
        endAgeError.style.display = "none";
        validForm = true;
    }
}


function submitForm(e){
    e.preventDefault()
    validateName(validForm)
    validateBrand(validForm)
    validateCategory(validForm)
    validateShortDescript(validForm)
    validatePrice(validForm)
    validateStock(validForm)
    validateAge(validForm)
    validForm = true;

    if(validForm){
        const product={
            name: nameForm.value.toLowerCase,
            price: parseFloat(formPrice.value),
            stock: parseInt(formStock.value), 
            brand: formBrand.value,
            category: formCategory.value,
            shortDescription: formShortDescription.value,
            longDescription: formLongDescription.value,
            deliveryFree: formDeliveryChk.checked,
            startAge: formStartAge.value,
            endAge: formEndAge.value,
            photo:formPicture.value,
        }
        return product
    }
}

// function saveProduct(product){

// }

//Function to delete messages

function cleanMessages(){
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].innerText="";   
     }
}