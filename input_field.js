const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

numberInput.addEventListener("input", function () {
    const value = parseInt(numberInput.value);

    if (value % 2 != 0 && value > 0) {
        output.innerHTML = `The next 3 odd numbers are: ${value + 2}, ${value + 4
            }, ${value + 6}`;
    } else if (value % 2 == 0 && value > 0) {
        output.innerHTML = `The next 3 even numbers are: ${value + 2}, ${value + 4
            }, ${value + 6}`;
    } else if (value == 0) {
        output.innerHTML = "'0' is a Whole Number";
    } else {
        output.innerHTML = "Enter a positive value";
    }
});
