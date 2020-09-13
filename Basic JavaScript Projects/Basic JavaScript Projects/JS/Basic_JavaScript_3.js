function adding_Numbers(){
    var sum = 10 + 11;
    document.getElementById("Math").innerHTML = "10 + 11 = " + sum;
}

function subbing_Numbers(){
    var Subtract = 8 - 3;
    document.getElementById("Math2").innerHTML = "8 - 3 = " + Subtract;
}

function more_Math(){
    var fancy_Math = (2 * 10) % 7;
    document.getElementById("Math3").innerHTML = "2 multiplied by 10, divided by 7 gives you" +
    " a remainder of " + fancy_Math;
}

function increment(){
    var x = 18;
    x++;
    document.write(x);
}

function decrement(){
    var y = 24;
    y--;
    document.write(y);
}

function rando(){
    var under_100 = Math.random() * 100;
    document.getElementById("Math4").innerHTML = under_100;
}