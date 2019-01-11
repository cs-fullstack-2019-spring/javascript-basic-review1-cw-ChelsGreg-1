

//Bonus for Ex 4: Keep prompting until the User actually enters a number


var ftemp = parseInt(ftemp);
var other = " ";

do {
    other = prompt("What is the temperature in Fahrenheit?");
}
while (other !== ftemp);

console.log(ftemp + " Fahrenheit equals " + ctemp + " Celcius.")