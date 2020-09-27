function Call_Loop() {  //define function
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {   //define function
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //define function
    var Dame = [];
    Dame[0] = "dribbling"   //set array
    Dame[1] = "shooting"
    Dame[2] = "passing"
    Dame[3] = "dunking"
    document.getElementById("Array").innerHTML = "As you can see, Dame is " +
        Dame[3] + ".";
}

function constant_function() {  //define function
    const My_Car = {type:"hatchback", make:"Kia", color:"blue"};    //set constant
    My_Car.color = "'Midnight blue'";   //change color
    My_Car.model = "Soul";  //add property
    document.getElementById("Constant").innerHTML = "My car is a " +
        My_Car.color + " " + My_Car.make + " " + My_Car.model;
}

function Clever() { //define function
    var ZZ = 5000;
    {
        let ZZ = 77;
    }
    document.getElementById("thingy").innerHTML = ZZ;
}

let pet = { //create object
    type: " cat.",  //add properties
    breed: " shorthair",
    gender: " male,",
    color: "gray and white,",
    description: function Let_this() {  //create method
        return "My pet is a " + this.color + this.gender + this.breed + this.type; 
        }
};
document.getElementById("Pet_Object").innerHTML = pet.description();