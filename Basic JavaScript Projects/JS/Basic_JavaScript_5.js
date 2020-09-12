document.write(typeof 50);

document.write("<br>");

document.write(25E400);

document.write("<br>");

document.write(-25E400);

document.write("<br>")

document.write(115>30);

document.write("<br>")

document.write(115<30);

console.log(8*2);

document.write("<br>")

document.write(100 + "50");

console.log(8<5);

document.write("<br>")

document.write(30+30==60);

document.write("<br>")

document.write(40+40==90);

document.write("<br>")

document.write(1985===1985);
document.write(" [same same]");

document.write("<br>")

document.write("October"===1985);
document.write(" [different different]");

document.write("<br>")

document.write(2020==="Twenty twenty");
document.write(" [same value different type]");

document.write("<br>")

document.write(2020===2010);
document.write(" [same type different value]");

document.write("<br>")

document.write(53 > 5 && 24 > 1);
document.write( "[logical and]")

document.write("<br>")

document.write(5 > 53 && 24 > 1);
document.write( "[logical and]")

document.write("<br>")

document.write(5 > 53 || 24 > 1);
document.write( "[logical or]")

document.write("<br>")

document.write(5 > 53 || 24 < 1);
document.write( "[logical or]")

function not_Function() {
    document.getElementById("Not").innerHTML = !(55 > 20);
}

function not_not_Function() {
    document.getElementById("Not_not").innerHTML = !(55 < 20);
}