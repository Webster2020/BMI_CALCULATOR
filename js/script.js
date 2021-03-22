"use strict";

/* ---------------------------------------------------------------------- */
/* ----- BMI BUTTON ----- */
{
  /* ---------------------------------------------------------------------- */
  /* function changing color depending on value od BMI */
  const changingPrefer = (bmiValue) => {
    let colorOne = 0;
    let colorTwo = 0;
    let pointerMove = 0;
    let proposal = "Please input Your height and weight!";
    //bmiValue > 25 ? colorOne = 255 : colorOne = 0;
    if (bmiValue < 15) {
      colorOne = 250;
      colorTwo = 0;
      pointerMove = 0;
      proposal = "Severe Thinness";
    } else if (bmiValue >= 15 && bmiValue < 16) {
      colorOne = 250;
      colorTwo = 125 * bmiValue - 1875; //from 125(16) to 0(15)
      pointerMove = 4.5 * (bmiValue - 21.75) + 32;
      proposal = "Severe Thinness";
    } else if (bmiValue >= 16 && bmiValue < 17) {
      colorOne = 250;
      colorTwo = 125 * bmiValue - 1875; //from 250(17) to 125(16)
      pointerMove = 4.5 * (bmiValue - 21.75) + 32;
      proposal = "Moderate Thinness";
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      colorOne = - 167 * bmiValue + 3083; //from 250(17) to 0(18.5)
      colorTwo = 250;
      pointerMove = 4.5 * (bmiValue - 21.75) + 35;
      proposal = "Mild Thinness";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      colorOne = 0;
      colorTwo = 250;
      pointerMove = 5 * (bmiValue - 21.75) + 35;
      proposal = "Normal";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      colorOne = 50 * bmiValue - 1250; //from 0(25) to 250(30)
      colorTwo = 250;
      pointerMove = 8 * (bmiValue - 21.75) + 30;
      proposal = "Overweight";
    } else if (bmiValue >= 30 && bmiValue < 35) {
      colorOne = 250;
      colorTwo = - 25 * bmiValue + 1000; //from 250(30) to 125(35)
      pointerMove = 9.5 * (bmiValue - 21.75) + 20;
      proposal = "Obese Class I";
    } else if (bmiValue >= 35 && bmiValue < 40) {
      colorOne = 250;
      colorTwo = - 25 * bmiValue + 1000; //from 125(35) to 0(40)
      pointerMove = 9.5 * (bmiValue - 21.75) + 20;
      proposal = "Obese Class II";
    } else if (bmiValue >= 40) {
      colorOne = 250;
      colorTwo = 0;
      pointerMove = 196;
      proposal = "Obese Class III";
    } else {
      console.log("Something goes wrong with changing bgColor of button :/");
    }
    const changes = [`rgb(${colorOne}, ${colorTwo}, 0)`, `${pointerMove}px`, proposal];
    return changes;
  }
  
  /* ---------------------------------------------------------------------- */
  /* function calculating bmiValue depending on weight and height */
  const bmiCalc = (wghValue, hghValue) => (wghValue / (hghValue * hghValue) / 0.0001).toFixed(2);

  /* ---------------------------------------------------------------------- */
  /* eventListener for button -> calculating BMI and dinamically changing color of button */
  const getInputValueButton = document.querySelector("button.btn-bmi");

  getInputValueButton.addEventListener("click", () => {
    
    const inputHghValue = Number(document.querySelector(".input-height").value);
    const inputWghValue = Number(document.querySelector(".input-weight").value);
    const diagPointer = document.querySelector(".diagram .pointer");
    const proposal = document.querySelector(".calculator-proposal");

    let bmiValue = bmiCalc(inputWghValue, inputHghValue);
    getInputValueButton.innerHTML = bmiValue;   
    getInputValueButton.style.backgroundColor = changingPrefer(bmiValue)[0];
    diagPointer.style.left = changingPrefer(bmiValue)[1];
    proposal.innerHTML = changingPrefer(bmiValue)[2];
    const isCalculating = true;

    if (isCalculating) {

      const getInputHghAction = document.querySelector(".input-height"); 
      const getInputWghAction = document.querySelector(".input-weight"); 

      getInputHghAction.addEventListener("input", () => {
        
        bmiValue = bmiCalc(inputWghValue, getInputHghAction.value);
        getInputValueButton.innerHTML = bmiValue;
        getInputValueButton.style.backgroundColor = changingPrefer(bmiValue)[0];
        diagPointer.style.left = changingPrefer(bmiValue)[1];
        proposal.innerHTML = changingPrefer(bmiValue)[2];   

        getInputWghAction.addEventListener("input", () => {
          
          bmiValue = bmiCalc(getInputWghAction.value, getInputHghAction.value);
          getInputValueButton.innerHTML = bmiValue;
          getInputValueButton.style.backgroundColor = changingPrefer(bmiValue)[0];
          diagPointer.style.left = changingPrefer(bmiValue)[1];
          proposal.innerHTML = changingPrefer(bmiValue)[2];       
        });
      });

      getInputWghAction.addEventListener("input", () => {
        
        bmiValue = bmiCalc(getInputWghAction.value, inputHghValue);
        getInputValueButton.innerHTML = bmiValue;
        getInputValueButton.style.backgroundColor = changingPrefer(bmiValue)[0];
        diagPointer.style.left = changingPrefer(bmiValue)[1];
        proposal.innerHTML = changingPrefer(bmiValue)[2]; 

        getInputHghAction.addEventListener("input", () => {
          
          bmiValue = bmiCalc(getInputWghAction.value, getInputHghAction.value);
          getInputValueButton.innerHTML = bmiValue;
          getInputValueButton.style.backgroundColor = changingPrefer(bmiValue)[0];
          diagPointer.style.left = changingPrefer(bmiValue)[1];
          proposal.innerHTML = changingPrefer(bmiValue)[2]; 
        });
      });
    }
  });
}

/* ---------------------------------------------------------------------- */
/* ----- RESET BUTTON ----- */
{
  const resetButton = document.querySelector("button.btn-reset");
  resetButton.addEventListener("click", ()  => {
    const inputHghValue = document.querySelector(".input-height");
    const inputWghValue = document.querySelector(".input-weight");
    const bmiButton = document.querySelector("button.btn-bmi");
    const diagPointer = document.querySelector(".pointer");
    const proposal = document.querySelector(".calculator-proposal");
    inputHghValue.value = "";
    inputWghValue.value = "";
    bmiButton.style.backgroundColor = "rgb(37, 57, 73)";
    bmiButton.innerHTML = "BMI";
    diagPointer.style.left = "35px";
    proposal.innerHTML = "";
  })
}

/* ---------------------------------------------------------------------- */
/* ----- BUTTON CLICK ANIMATION ----- */

{
  const buttons = document.querySelectorAll("button.button");
  for (let button of buttons) {
    
    button.addEventListener("mouseover", () => {
      button.style.boxShadow = "0 0 25px #222f3e";
    })
    button.addEventListener("mousedown", () => {   
      button.style.boxShadow = "0 0 10px #222f3e";
    })
    button.addEventListener("mouseup", () => { 
      button.style.boxShadow = "0 0 0 #222f3e";
    })
    button.addEventListener("mouseout", () => {
      button.style.boxShadow = "0 0 0 #222f3e";
    })
  }
}
/* ---------------------------------------------------------------------- */
/* TODO */
/* ----- WHAT IF INPUT IS NO A NUMBER AND IS LESS THAN ZERO ----- */