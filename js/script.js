"use strict";

/* ---------------------------------------------------------------------- */
{
  /* ---------------------------------------------------------------------- */
  /* function changing color depending on value od BMI */
  const changingColor = (bmiValue) => {
    let colorOne = 0;
    let colorTwo = 0;
    let pointerMove = 0;
    //bmiValue > 25 ? colorOne = 255 : colorOne = 0;
    if (bmiValue < 15) {
      colorOne = 250;
      colorTwo = 0;
      pointerMove = 0;
    } else if (bmiValue >= 15 && bmiValue < 17) {
      colorOne = 250;
      colorTwo = 125 * bmiValue - 1875; //from 250(17) to 0(15)
      pointerMove = 4.5 * (bmiValue - 21.75) + 32;
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      colorOne = - 167 * bmiValue + 3083; //from 250(17) to 0(18.5)
      colorTwo = 250;
      pointerMove = 4.5 * (bmiValue - 21.75) + 35;
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      colorOne = 0;
      colorTwo = 250;
      pointerMove = 5 * (bmiValue - 21.75) + 35;
    } else if (bmiValue >= 25 && bmiValue < 30) {
      colorOne = 50 * bmiValue - 1250; //from 0(25) to 250(30)
      colorTwo = 250;
      pointerMove = 8 * (bmiValue - 21.75) + 30;
    } else if (bmiValue >= 30 && bmiValue < 40) {
      colorOne = 250;
      colorTwo = - 25 * bmiValue + 1000; //from 250(30) to 0(40)
      pointerMove = 9.5 * (bmiValue - 21.75) + 20;
    } else if (bmiValue >= 40) {
      colorOne = 250;
      colorTwo = 0;
      pointerMove = 196;
    } else {
      console.log("Something goes wrong with changing bgColor of button :/");
    }
    const changes = [`rgb(${colorOne}, ${colorTwo}, 0)`, `${pointerMove}px`];
    return changes;
  }
  
  /* ---------------------------------------------------------------------- */
  /* function calculating bmiValue depending on weight and height */
  const bmiCalc = (wghValue, hghValue) => (wghValue / (hghValue * hghValue) / 0.0001).toFixed(2);

  /* ---------------------------------------------------------------------- */
  /* eventListener for button -> calculating BMI and dinamically changing color of button */
  const getInputValueButton = document.querySelector(".button");
  getInputValueButton.addEventListener("click", () => {
    
    const inputHghValue = Number(document.querySelector(".input-height").value);
    const inputWghValue = Number(document.querySelector(".input-weight").value);
    const diagPointer = document.querySelector(".diagram .pointer");
    //let bmiValue = (inputWghValue / (inputHghValue * inputHghValue) / 0.0001).toFixed(2);
    let bmiValue = bmiCalc(inputWghValue, inputHghValue);
    getInputValueButton.innerHTML = bmiValue;   
    getInputValueButton.style.backgroundColor = changingColor(bmiValue)[0];
    diagPointer.style.left = changingColor(bmiValue)[1];
    console.log(diagPointer.style.left);
    const isCalculating = true;
    
    if (isCalculating) {

      const getInputHghAction = document.querySelector(".input-height"); 
      const getInputWghAction = document.querySelector(".input-weight"); 

      getInputHghAction.addEventListener("input", () => {
        
        bmiValue = bmiCalc(inputWghValue, getInputHghAction.value);
        getInputValueButton.innerHTML = bmiValue;
        getInputValueButton.style.backgroundColor = changingColor(bmiValue)[0];
        diagPointer.style.left = changingColor(bmiValue)[1];
        getInputWghAction = document.querySelector(".input-weight");      
        getInputWghAction.addEventListener("input", () => {
          
          bmiValue = bmiCalc(getInputWghAction.value, getInputHghAction.value);
          getInputValueButton.innerHTML = bmiValue;
          getInputValueButton.style.backgroundColor = changingColor(bmiValue)[0];
          diagPointer.style.left = changingColor(bmiValue)[1];
          
        });
      });

      getInputWghAction.addEventListener("input", () => {
        
        bmiValue = bmiCalc(getInputWghAction.value, inputHghValue);
        getInputValueButton.innerHTML = bmiValue;
        getInputValueButton.style.backgroundColor = changingColor(bmiValue)[0];
        diagPointer.style.left = changingColor(bmiValue)[1];
        getInputHghAction = document.querySelector(".input-height");      
        getInputHghAction.addEventListener("input", () => {
          
          bmiValue = bmiCalc(getInputWghAction.value, getInputHghAction.value);
          getInputValueButton.innerHTML = bmiValue;
          getInputValueButton.style.backgroundColor = changingColor(bmiValue)[0];
          diagPointer.style.left = changingColor(bmiValue)[1]; 

        });
      });
    }
  });
}



