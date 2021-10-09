var current_number = 1;
var prev_number = null;

function roll_the_dice() {
    current_number = Math.floor(Math.random() * (6) + 1);
    document.getElementById('current_number').innerHTML = current_number;
    document.getElementById('prev_rolls').innerHTML = prev_number;
    prev_number = current_number;
    return current_number;
}

document.getElementById('roll_button').onclick = function() {
    current_number = roll_the_dice();
}

document.getElementById('help_btn').onclick = function() {
    window.alert("This is a simple dice roller game. Simply click the 'Roll The Dice' button below and a random number "
    + "between 1 and 6 will be generated")
}

//onclick was null for some reason...solution taken from 
//https://stackoverflow.com/questions/17080502/uncaught-typeerror-cannot-set-property-onclick-of-null
//also moved src tag to bottom of page to fix this