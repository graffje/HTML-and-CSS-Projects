function rocky() {      //define function
    var part_1 = "If you smell";        //four variables
    var part_2 = "llllllllllll ";
    var part_3 = "what The Rock ";
    var part_4 = "is cookin'!";
    var sentence = part_1.concat(part_2, part_3, part_4);       // concat variables
    document.getElementById("Smash").innerHTML = sentence;      // display
}

function slice_Method() {   //define function
    var Quote = "With great power comes great responsibility."; //assign string
    var Clip = Quote.slice(5,16);   //create slice
    document.getElementById("Slice").innerHTML = Clip;  // display
}

function string_Method() {  //define function
    var X = 50005;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  // display
}

function precision_Method() {   //define function
    var Y = 843.2365910546;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8);  // display
}