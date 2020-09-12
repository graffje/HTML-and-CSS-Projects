function Ride_Function()    {   //define function//
    var Height, Can_ride;   //create variables//
    Height = document.getElementById("Height").value;   //define input for height//
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //define parameters for other var//
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //output//
}

function Vehicle(Make, Model, Year, Color) {    //define function/class//
    this.Vehicle_Make = Make;   //aspect of class//
    this.Vehicle_Model = Model; //same//
    this.Vehicle_Year = Year;   //same//
    this.Vehicle_Color = Color; //same//
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //new instantiation of class//
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //same//
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");    //same//
function myFunction() { //define function to create output for button//
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function countdown_Function() { //define function//
    document.getElementById("Counting_down").innerHTML = Count();   //define keyword id//
    function Count() {  //nested function//
        var Start_point = 8;    //starting value//
        function Minus_one() {Start_point -= 1;}    //step one of function//
        Minus_one();
        return Start_point; //value returned onscreen//
    }
}