var Alpha = 10;
function Add_numbers_1() {
    document.write(20 + Alpha + "<br>");
}
function Add_numbers_2() {
    document.write(Alpha + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Beta = 10;
    document.write(20 + Beta + "<br>");
}
function Add_numbers_4() {
    document.write(Beta + 100 + "<br>");
}
Add_numbers_3
Add_numbers_4

var Gamma = 10;
function Add_numbers_5() {
    document.write(15 + Gamma + "<br>");
}
function Add_numbers_6() {
    document.write(Gamma + 100 + "<br>")
}
Add_numbers_5();
Add_numbers_6();

function bye() {
    if (new Date() .getHours() > 18) {
    document.getElementById("Sign_Off").innerHTML = "Night night!";
    }
}

if (5 > 4) {
    document.write("The left number is larger than the right number.")
}

function Name_Function() {
    Name = document.getElementById("Name").value;
    if (Name == "Jesse") {
        Alpha = "Your name is the same as mine!";
    }
    else {
        Alpha = "Your name is not the same as mine :(";
    }
    document.getElementById("What_was_that?").innerHTML = Alpha;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Good afternoon!";
    
    }
    else {
        Reply = "Good night!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
