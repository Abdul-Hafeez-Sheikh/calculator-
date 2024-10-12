var screenDiv = document.getElementsByClassName('screen')[0];

function getValue(value) {
    switch(value) {
        case '=':
            try {
                var res = eval(screenDiv.innerText);
                screenDiv.innerText = res;
            } catch (error) {
                screenDiv.innerText = "Error";
            }
            break;
        case '': 
            screenDiv.innerText = '';
            break;
        case 'back': 
            screenDiv.innerText = screenDiv.innerText.slice(0, -1);
            break;
        default:
            screenDiv.innerText += value;
    }
}

var num = 100;
console.log(`The result is: ${num + 100} and the result can be seen in the console.`);

var array = [0, 1, 2, 3, 4];
var array2 = [0, 1, 2, 3, 4];
var array3 = [...array, ...array2]; 
array3 = [100, ...array3];
console.log(array3);
