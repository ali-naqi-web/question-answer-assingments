// // // // // // // Assignment 02
// // // // // // // Ask the user to enter a number

// // // // // // question 1
// // // // // // var inputNum = Number(prompt("Enter a number:"));

// // // // // // // Check conditions for positive, negative, or zero
// // // // // // if (inputNum > 0) {
// // // // // //     alert(inputNum + " is a positive number.");
// // // // // // } else if (inputNum < 0) {
// // // // // //     alert(inputNum + " is a negative number.");
// // // // // // } else {
// // // // // //     alert(inputNum + " is zero.");
// // // // // // }

// // // // // // question 2
// // // // // // Ask the user to enter a number/integer
// // // // // var num = prompt("Enter a number:");
// // // // // var number = Number(num);

// // // // // // Determine whether it is even or odd using the modulus operator (%)
// // // // // if (number % 2 === 0) {
// // // // //     alert(number + " is an even number.");
// // // // // } else {
// // // // //     alert(number + " is an odd number.");
// // // // // }

// // // // // question 3
// // // // // Ask the user to enter their age
// // // // // var ageInput = prompt("Enter your age:");
// // // // // var age = Number(ageInput);

// // // // // // Check voting eligibility and conditions
// // // // // if (age < 0) {
// // // // //     alert("Invalid age");
// // // // // } else if (age >= 18) {
// // // // //     alert("You are eligible to vote.");
// // // // // } else {
// // // // //     alert("You are not eligible to vote.");
// // // // // }

// // // // // question 4

// // // // // Take three numbers from the user
// // // // // var num1 = Number(prompt("First Number:"));
// // // // // var num2 = Number(prompt("Second Number:"));
// // // // // var num3 = Number(prompt("Third Number:"));

// // // // // // Find the largest number using conditional statements
// // // // // if (num1 >= num2 && num1 >= num3) {
// // // // //     alert(num1 + " is the largest number.");
// // // // // } else if (num2 >= num1 && num2 >= num3) {
// // // // //     alert(num2 + " is the largest number.");
// // // // // } else {
// // // // //     alert(num3 + " is the largest number.");
// // // // // }

// // // // // question 5
// // // // // Fixed credentials
// // // // // var correctUser = "admin";
// // // // // var correctPass = "admin123";

// // // // // // Ask the user to enter their username and password
// // // // // var username = prompt("Enter username:");
// // // // // var password = prompt("Enter password:");

// // // // // // Check authentication conditions
// // // // // if (username !== correectUser) {
// // // // //     alert("Invalid Usrname");
// // // // // } else if (password !== correctPass) {
// // // // //     alert("Invalid Password");
// // // // // } else {
// // // // //     alert("Login Successful! Welcome Admin.");
// // // // // }

// // // // // question 6
// // // // // Ask the user to enter their percentage
// // // // var Percentage += prompt("Enter percentage:");
// // // // 

// // // // // Validate percentage (must be between 0 and 100)
// // // // if (percentage < 0 || percentage > 100) {
// // // //     alert("Error: Invalid percentage! Please enter a value between 0 and 100.");
// // // // } else if (percentage >= 90) {
// // // //     alert("Your Grade is A+.");
// // // // } else if (percentage >= 80) {
// // // //     alert("Your Grade is A.");
// // // // } else if (percentage >= 70) {
// // // //     alert("Your Grade is B.");
// // // // } else if (percentage >= 60) {
// // // //     alert("Your Grade is C.");
// // // // } else if (percentage >= 50) {
// // // //     alert("Your Grade is D.");
// // // // } else {
// // // //     alert("Your Grade is Fail.");
// // // // }

// // // // question 7

// // // var purchaseAmount = prompt("Enter purchase amount:");
// // // purchaseAmount = Number(purchaseAmount);

// // // // Reject negative purchase amounts
// // // if (isNaN(purchaseAmount) || purchaseAmount < 0) {
// // //     alert("Invalid input: Purchase amount cannot be negative.");
// // // } else {
// // //     var discountPercent = 0;

// // //     // Determine discount percentage based on purchase amount
// // //     if (purchaseAmount >= 10000) {
// // //         discountPercent = 20;
// // //     } else if (purchaseAmount >= 5000) {
// // //         discountPercent = 10;
// // //     } else if (purchaseAmount >= 2000) {
// // //         discountPercent = 5;
// // //     } else {
// // //         discountPercent = 0;
// // //     }

// // //     // Calculate discount and final payable amounts
// // //     var discountAmount = (purchaseAmount * discountPercent) / 100;
// // //     var finalAmount = purchaseAmount - discountAmount;

// // //     // Display results using alert or console.log
// // //     alert(
// // //         "Original Amount: Rs. " + purchaseAmount.toFixed(2) + 
// // //         "Discount: " + discountPercent + "%\n" +
// // //         "Discount Amount: Rs. " + discountAmount.toFixed(2) + 
// // //         "Final Amount: Rs. " + finalAmount.toFixed(2)
// // //     );
// // // }

// // // question 8

// // var year = +prompt("Enter Year:");
// //

// // // Validate input
// // if year===nan || year <= 0) {
// //     alert("Invalid input: Please enter a valid positive year.");
// // } else {
// //     // Leap year rules check
// //     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
// //         alert(year + " is a Leap Year.");
// //     } else {
// //         alert(year + " is not a Leap Year.");
// //     }
// // }

// // question 9

// var age = prompt("Enter Age:");
// var experience = prompt("Enter Years of Experience:");
// var jsKnowledge = prompt("Do you have JavaScript knowledge? (yes or no):");

// if (age < 0 || experience < 0) {
//     alert("Invalid input: Age and experience cannot be negative.");
// } else {
//     if (age >= 18 && age <= 30 && experience >= 1 && jsKnowledge === "yes") {
//         alert("Congratulations! You are eligible to apply.");
//     } else {
//         alert("Sorry! You do not meet the requirements.");
//     }
// }
// // question 10

// var balance = 25000;
// var enteredPin = prompt("Enter PIN:");

// if (enteredPin !== "1234") {
//     alert("Error: Incorrect PIN! Access Denied.");
// } else {
//     var withdrawalAmount = prompt("Enter Amount:");

//     if (withdrawalAmount <= 0) {
//         alert("Error: Withdrawal amount must be greater than zero.");
//     } else if (withdrawalAmount > balance) {
//         alert("Error: Insufficient balance. Available balance is Rs. " + balance);
//     } else if (withdrawalAmount % 500 !== 0) {
//         alert("Error: Amount must be a multiple of Rs. 500.");
//     } else {
//         balance = balance - withdrawalAmount;
//         alert(
//             "Withdrawal Successful!\n" +
//             "Withdrawn Amount: Rs. " + withdrawalAmount + "\n" +
//             "Remaining Balance: Rs. " + balance
//         );
//     }
// }

// // question 11
// var units = prompt("Enter Consumed Units:");

// if (units < 0) {
//     alert("Invalid input: Units cannot be negative.");
// } else {
//     var ratePerUnit = 0;

//     if (units <= 100) {
//         ratePerUnit = 10;
//     } else if (units <= 200) {
//         ratePerUnit = 15;
//     } else if (units <= 300) {
//         ratePerUnit = 20;
//     } else {
//         ratePerUnit = 25;
//     }

//     var electricityCharges = units * ratePerUnit;
//     var serviceCharges = 150;
//     var tax = electricityCharges * 0.05;
//     var totalBill = electricityCharges + serviceCharges + tax;

//     alert(
//         "Electricity Charges: Rs. " + electricityCharges + "\n" +
//         "Service Charges: Rs. " + serviceCharges + "\n" +
//         "Tax: Rs. " + tax + "\n" +
//         "Total Bill: Rs. " + totalBill
//     );
// }

// // question 12

// var english = prompt("Enter English Marks (0-100):");
// var math = prompt("Enter Mathematics Marks (0-100):");
// var science = prompt("Enter Science Marks (0-100):");
// var computer = prompt("Enter Computer Marks (0-100):");
// var urdu = prompt("Enter Urdu Marks (0-100):");

// if (
//     english < 0 || english > 100 ||
//     math < 0 || math > 100 ||
//     science < 0 || science > 100 ||
//     computer < 0 || computer > 100 ||
//     urdu < 0 || urdu > 100
// ) {
//     alert("Invalid input: Marks must be between 0 and 100.");
// } else {
//     var totalMarks = 500;
//     // Using Number() for addition so strings don't concatenate together
//     var obtainedMarks = Number(english) + Number(math) + Number(science) + Number(computer) + Number(urdu);
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     var isPass = (english >= 40 && math >= 40 && science >= 40 && computer >= 40 && urdu >= 40);
//     var grade = "";
//     var resultStatus = "";

//     if (isPass === false) {
//         resultStatus = "FAIL";
//         grade = "F";
//     } else {
//         resultStatus = "PASS";
//         if (percentage >= 80) {
//             grade = "A+";
//         } else if (percentage >= 70) {
//             grade = "A";
//         } else if (percentage >= 60) {
//             grade = "B";
//         } else if (percentage >= 50) {
//             grade = "C";
//         } else {
//             grade = "D";
//         }
//     }

//     alert(
//         "Total Marks: " + totalMarks + "\n" +
//         "Obtained Marks: " + obtainedMarks + "\n" +
//         "Percentage: " + percentage + "%\n" +
//         "Grade: " + grade + "\n" +
//         "Result: " + resultStatus
//     );
// }

// // question 13


// var signal = prompt("Enter Traffic Signal Color (Red, Yellow, Green):");
// var lowerSignal = signal.toLowerCase();

// if (lowerSignal === "red") {
//     alert("Stop");
// } else if (lowerSignal === "yellow") {
//     alert("Get Ready");
// } else if (lowerSignal === "green") {
//     alert("Go");
// } else {
//     alert("Invalid Signal");
// }

// // question 14

// var age = prompt("Enter Age:");
// var dayType = prompt("Enter Day Type (weekday or weekend):");

// if (age < 0) {
//     alert("Invalid input: Age cannot be negative.");
// } else {
//     var basePrice = 0;
//     var isFree = false;

//     if (age < 5) {
//         basePrice = 0;
//         isFree = true;
//     } else if (age >= 5 && age <= 12) {
//         basePrice = 300;
//     } else if (age >= 13 && age <= 59) {
//         basePrice = 700;
//     } else {
//         basePrice = 400;
//     }

//     var weekendSurcharge = 0;
//     if (dayType === "weekend" && isFree === false) {
//         weekendSurcharge = 100;
//     }

//     var finalPrice = Number(basePrice) + Number(weekendSurcharge);

//     alert(
//         "Base Ticket Price: Rs. " + basePrice + "\n" +
//         "Weekend Surcharge: Rs. " + weekendSurcharge + "\n" +
//         "Final Ticket Price: Rs. " + finalPrice
//     );
// }
// // question 15

// var basicSalary = prompt("Enter Basic Salary:");
// var yearsOfService = prompt("Enter Years of Service:");

// if (basicSalary < 0 || yearsOfService < 0) {
//     alert("Invalid input: Salary and years of service cannot be negative.");
// } else {
//     var bonusPercent = 0;

//     if (yearsOfService < 1) {
//         bonusPercent = 0;
//     } else if (yearsOfService >= 1 && yearsOfService <= 3) {
//         bonusPercent = 5;
//     } else if (yearsOfService > 3 && yearsOfService <= 5) {
//         bonusPercent = 10;
//     } else {
//         bonusPercent = 15;
//     }

//     var bonusAmount = (basicSalary * bonusPercent) / 100;

//     var taxRate = 0;
//     if (basicSalary >= 100000) {
//         taxRate = 0.05;
//     } else {
//         taxRate = 0.02;
//     }

//     var taxAmount = basicSalary * taxRate;
//     var finalSalary = Number(basicSalary) + Number(bonusAmount) - Number(taxAmount);

//     alert(
//         "Basic Salary: Rs. " + basicSalary + "\n" +
//         "Bonus: Rs. " + bonusAmount + "\n" +
//         "Tax: Rs. " + taxAmount + "\n" +
//         "Final Salary: Rs. " + finalSalary
//     );
// }