"use strict";

var a = 3;
var b = 2;
var result;

document.write("<h1>Arithmetic Operators</h1>");

document.write("<h2>Addition</h2>");
result = a + b
document.write(a + " + " + b + " = " + result);

document.write("<h2>Subtraction</h2>");
result = a - b
document.write(a + " - " + b + " = " + result);

document.write("<h2>Multiplication</h2>");
result = a * b
document.write(a + " * " + b + " = " + result);

document.write("<h2>Division</h2>");
result = a / b
document.write(a + " / " + b + " = " + result);

document.write("Modulous: ");
result = a % b
document.write(a + " % " + b + " = " + result);

document.write("<h1>Postfix and Prefix Increments</h1>");
document.write("<h2>Postfix</h2>")
document.write("Given a = " + a + "<br>");
a++;
document.write("After a++ is executed a = " + a);