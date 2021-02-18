"use strict";

const getShiftAmount = (event) => {
    // Get value
    const shiftAmount = event.target.value;

    console.log(`The value is changing! The new value is: ${shiftAmount}`);
};

const setShiftAmount = (elementToShiftRight, amountToShift) => {
    elementToShiftRight.style.marginLeft = `${amountToShift}em`;
};

(function () {
    "use strict";

    // Get input element
    const inputElementRef = document.querySelector("input[name=shiftAmount]");

    // Get target element
    const targetElementRef = document.getElementById("target");
    setShiftAmount(targetElementRef, 7);

    // Attach event listener na input change
    inputElementRef.addEventListener("change", getShiftAmount);
    

    // TODO: Set shift amount to X


    console.log(`Ready!`);
})();