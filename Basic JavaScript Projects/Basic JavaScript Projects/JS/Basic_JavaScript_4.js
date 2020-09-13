function new_Diction() {
    var GOAT = {
        Name: "Lillard",
        Position: "PG",
        Number: "The Letter O",
        Age: 30,
        College: "Weber State",
        Hometown: "Oakland",
    };
    delete GOAT.Number;
    document.getElementById("Dictionary").innerHTML = GOAT.Number;
}