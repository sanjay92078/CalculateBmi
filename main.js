const Weight = document.querySelector('.Weight');
const Height = document.querySelector('.Height');
const button = document.querySelector('.button');
const para = document.querySelector('.para');

function calculateBMI() {
    let hvalue = Height.value // Convert cm to meters
    let wvalue = Weight.value;
    let BMI = wvalue / (hvalue * hvalue); // Correct BMI formula
    if(BMI < 18.5){
        para.textContent = `Underweight`;
    }else if(BMI < 24.9){
        para.textContent = `Normal Weight`;

    }else if(BMI < 29.9){
        para.textContent = `Over Weight`;
    }else if(BMI < 34.9){
        para.textContent = ` Obesity class I`;

    }else if(BMI < 39.9){
        para.textContent = ` Obesity class II`;

    }else if(BMI > 40){
        para.textContent = `  Severe Obesity class III`;
    }
    else{
        alert( para.textContent = ` please enter the details`);
    }
  
}

button.addEventListener('click', calculateBMI);