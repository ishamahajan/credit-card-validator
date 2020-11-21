# Getting Started with Credit Card Validator

This project was developed using ReactJS and bootstrapped with Create React App.
This application helps validate the credit card number using Luhn algorithm. 

## How it works

User needs to input the  credit card number in the input field. Placeholder value for this field is 0000 0000 0000 0000.
This field only accepts digits.

The validation begins right when the user enters first digit. The card type is determined by the card's earlier digits.
For incorrect numbers an error message saying 'Invalid Card Number' is displayed. Also the inout field border turns red.

The final card validation is done when user presses eneter, after adding the digits. 
Based on Luhn's algorithm, if the number is correct, a message saying 'Valid Card Number' is displayed. For incorrect numbers a error message saying is displayed.


