let isCelsiusToFahrenheit = true;

function convertTemperature() {
    let inputField = document.getElementById("main-input");
    let resultField = document.getElementById("main-result");
    let formulaField = document.getElementById("cara-konversi");
    let inputValue = parseFloat(inputField.value);

    if (isNaN(inputValue)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    let result, formula;
    if (isCelsiusToFahrenheit) {
        result = (inputValue * 9 / 5) + 32;
        formula = `${inputValue} × 9/5 + 32 = ${result.toFixed(2)} °F`;
    } else {
        result = (inputValue - 32) * 5 / 9;
        formula = `(${inputValue} - 32) × 5/9 = ${result.toFixed(2)} °C`;
    }

    resultField.value = result.toFixed(2);
    formulaField.value = formula;
}

function resetFields() {
    document.getElementById("main-input").value = "";
    document.getElementById("main-result").value = "";
    document.getElementById("cara-konversi").value = "";
}

function reverseConversion() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    document.querySelector("label[for='main-input']").innerHTML = isCelsiusToFahrenheit ? "Celcius (&deg;C):" : "Fahrenheit (&deg;F):";
    document.querySelector("label[for='main-result']").innerHTML = isCelsiusToFahrenheit ? "Fahrenheit (&deg;F):" : "Celcius (&deg;C):";
    resetFields();
}