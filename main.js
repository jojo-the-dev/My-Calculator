function appendToDisplay(value){
    //Get display area input element
    let display = document.getElementById('display');
    
    if (value === 'x') {
        value = '*'; // Change 'x' to '*' for multiplication
    } else if (value === '÷') {
        value = '/'; // Change '÷' to '/' for division
    }

    // Append the value to the display
    display.value += value;
}

function calculate(){
    let display = document.getElementById('display');
    let expression = display.value;

    try {
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}