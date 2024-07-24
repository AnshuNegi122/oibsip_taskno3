document.getElementById('convert').addEventListener('click', function () {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('unit').value;
    let result;

    if (type === 'celsius') {
        // Convert Celsius to Fahrenheit and Kelvin
        const fahrenheit = (degrees * 9 / 5) + 32;
        const kelvin = degrees + 273.15;
        result = `${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K`;
    } else if (type === 'fahrenheit') {
        // Convert Fahrenheit to Celsius and Kelvin
        const celsius = (degrees - 32) * 5 / 9;
        const kelvin = (degrees - 32) * 5 / 9 + 273.15;
        result = `${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K`;
    } else if (type === 'kelvin') {
        // Convert Kelvin to Celsius and Fahrenheit
        const celsius = degrees - 273.15;
        const fahrenheit = (degrees - 273.15) * 9 / 5 + 32;
        result = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F`;
    }

    document.getElementById('result').value = result;
});