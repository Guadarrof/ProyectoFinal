let formName= document.getElementById('name');
let formPrice=document.getElementById('price');
let formStock=document.getElementById('stock');
let formBrand=document.getElementById('brand');
let formCategory=document.getElementById('category');
let formShortDescription=document.getElementById('shortDescription');
let formLongDescription=document.getElementById('longDescription');
let formDeliveryChk=document.getElementById('delivery');
let formStartAge=document.getElementById('startAge');
let formEndAge=document.getElementById('endAge');
let formPicture=document.getElementById('picture');
let inputs=document.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {
   console.log(inputs[i].type); 
}

function retrieveText(){
    
}



// let priceRegEx= new RegExp ('^\$\d{1,3}(,\d{3})*(\.\d{2})?$');



// function validateNums(){
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].type=="number"){
//             if (inputs[i].id="price") {
//                 if(!priceRegEx){
//                     return "El precio no puede contener caracteres alfanumericos";
//                 }
                
//             }

//         }
//     }

// }