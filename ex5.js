
//Write a JavaScript program that does the following:

//Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
//Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
//Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS months




var loanamt = prompt("Enter loan amount:");
var nummonths = prompt("Enter the number of months you wish to pay off the loan:");

loanamt = parseInt(loanamt);
nummonths = parseInt(nummonths);


{
    console.log("To pay off $" + loanamt + " it will take $" + (loanamt/nummonths) + " per month, for "
    + nummonths + " months.");
}

