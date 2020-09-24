'use strict';

const handleClickCalculateButton = () => {
    let outputNode = document.getElementById("numbersOutput"); // Node for output
    let inputNumber = parseInt(document.getElementById("numbersInput").value);  // Parse input as int
    let outputString = "";
    if (isNaN(inputNumber) || inputNumber > 50 || inputNumber < 1) { // If NaN, over 50 or below 1
        outputNode.value = "Input not a valid number"
    } else { // If valid number
        let number = 1;
        while (inputNumber >= number) {
            outputString += `${number} `; // Append to outputstring
            number += 2;
        }
        outputNode.value = outputString.trim();
    }
};

const handleLoad = () => {
    document.getElementById("generateOddNumbersButton").addEventListener("click", handleClickCalculateButton); // Add click eventlistener to button
};

window.addEventListener("load", handleLoad);  // On load
