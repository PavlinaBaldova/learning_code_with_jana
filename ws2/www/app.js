"use strict";

// Nechat na miste!
const getShiftAmount = (event) => {
    // Get value
    const shiftAmount = event.target.value;

    console.log(`The value is changing! The new value is: ${shiftAmount}`);
};

// Toto muzes hybat
const setShiftAmount = (elementToShiftRight, amountToShift) => {
    elementToShiftRight.style.marginLeft = `${amountToShift}em`;
};

(function () {
    "use strict";

    // Get input element
    const inputElementRef = document.querySelector("input[name=shiftAmount]");

    // Get target element
    const targetElementRef = document.getElementById("target");
    setShiftAmount(targetElementRef, 7); // Toto tu nebude

    // Attach event listener na input change
    inputElementRef.addEventListener("change", getShiftAmount);

    // 1) TODO: Set shift amount to input value
    // 2) TODO: Use percents. 0-100 
    //  100+ => start from 0
    //   <0  Subtract from 100


    console.log(`Ready!`);
})();