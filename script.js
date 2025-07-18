document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const toFahrenheitBtn = document.getElementById('toFahrenheit');
    const toKelvinBtn = document.getElementById('toKelvin');
    const resetBtn = document.getElementById('reset');

    // Conversion functions
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    // Update other fields based on Celsius input
    function updateFromCelsius() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
            kelvinInput.value = celsiusToKelvin(celsius).toFixed(2);
        }
    }

    // Update other fields based on Fahrenheit input
    function updateFromFahrenheit() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = fahrenheitToCelsius(fahrenheit);
            celsiusInput.value = celsius.toFixed(2);
            kelvinInput.value = celsiusToKelvin(celsius).toFixed(2);
        }
    }

    // Update other fields based on Kelvin input
    function updateFromKelvin() {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
            const celsius = kelvinToCelsius(kelvin);
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
        }
    }

    // Event listeners
    celsiusInput.addEventListener('input', updateFromCelsius);
    fahrenheitInput.addEventListener('input', updateFromFahrenheit);
    kelvinInput.addEventListener('input', updateFromKelvin);

    // Button event listeners
    toFahrenheitBtn.addEventListener('click', function() {
        if (celsiusInput.value === '') {
            alert('Please enter a Celsius value first');
            celsiusInput.focus();
            return;
        }
        updateFromCelsius();
    });

    toKelvinBtn.addEventListener('click', function() {
        if (celsiusInput.value === '') {
            alert('Please enter a Celsius value first');
            celsiusInput.focus();
            return;
        }
        updateFromCelsius();
    });

    resetBtn.addEventListener('click', function() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        celsiusInput.focus();
    });

    // Set focus to Celsius input on page load
    celsiusInput.focus();
});