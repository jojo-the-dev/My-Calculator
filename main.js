function appendToDisplay(value){
    //Get display area input element
    let display = document.getElementById('display');

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