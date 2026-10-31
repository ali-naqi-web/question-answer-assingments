// // // // Assignment 1 //
// // // //Create variables to store the following information: 
// // // // • Full Name 
// // // // • Age 
// // // // • City 
// // // // • Course Name 
// // // // • Institute Name
// // // //  Display all the information in a properly formatted introduction.

// question 1

// // // //// code////
// // // // var  FullName =prompt("Enter your Full Name")
// // // // var  Age =prompt ("Enter your Age")
// // // // var  City =prompt ("Enter your City Name")
// // // // var  CourseName  =prompt ("Enter your Course Name")
// // // // var  InstituteName =prompt ("Enter your Institute Name")

// // // // display //

// // // // document.write("<h1>Your Full Name: " + FullName + "</h1>");
// // // // document.write("<h1>Your Age: " + Age + "</h1>");
// // // // document.write("<h1>Your City: " + City + "</h1>");
// // // // document.write("<h1>Your Course Name: " + CourseName + "</h1>");
// // // // document.write("<h1>Your Institute Name: " + InstituteName + "</h1>");


// // // // code with my idea


// // // // if (FullName && City && CourseName && InstituteName) {
// // // //  document.write("<h1>Your Full Name: " + FullName + "</h1>");

// // // //  document.write("<h1>Your City: " + City + "</h1>");
// // // //  document.write("<h1>Your Course Name: " + CourseName + "</h1>");
// // // //  document.write("<h1>Your Institute Name: " + InstituteName + "</h1>");
   
// // // // } else {
// // // //     document.write(" <h1> Invalid Data" + "</h1>")
// // // // }

// question 2


// // // // if (Age === Number) {
// // // //    document.write("<h1>Your Age: " + Age + "</h1>");  
// // // // } else {
// // // //     document.write("<h1> Invalid age"+"</h1>");
// // // // }

// // // // declare three variables ussing let const and var

// // // // let cities1=[pak , ind , afgh , ost , uk]
// // // // var cities2=[pak , ind , afgh , ost , uk]
// // // // const cities3=[pak , ind , afgh , ost , uk]

// question 3

// // // // DTATA TYPES VARIABLE

// // // // var myString = "Hello, World!";    // String
// // // // var myBoolean = true;              // Boolean
// // // // var myNumber = 42;                 // Number
// // // // var myUndefined ;                  // Undefined
// // // // var myNull = null;                 // Null

// // // // var studentName;   // VALID: Starts with a letter and uses camelCase.
// // // // var _totalMarks;   // VALID: Variable names can start with an underscore (_).
// // // // var $price;        // VALID: Variable names can start with a dollar sign ($).
// // // // var userAge;       // VALID: Uses normal alphanumeric characters.
// // // // var total_amount;  // VALID: Uses an underscore to separate words (snake_case).

// question 4


// // // // leagel and illegal

// // // // INVALID: var 1stStudent; 
// // // // REASON : Variable names cannot start with a number.


// // // // INVALID: var my-name;    
// // // // REASON : Hyphens (-) are not allowed because JavaScript thinks you are trying to subtract.

// // // // INVALID: var class;      
// // // // REASON : "class" is a reserved keyword in JavaScript used to create object classes.

// // // // INVALID: var first name; 
// // // // REASON : Spaces are not allowed inside variable names.

// // // // INVALID: var let;        
// // // // REASON : "let" is keyword used for variable declarations.

/// question 5



// // // //  prompt() var operator

// // // // calculator


// // // // var num1 = +prompt(" Enter your first number")
// // // // var num2 = +prompt( "Enter your next number")

// // // // var operator= prompt("Enter your one operator" , "+,/,*,-,%")
// // // // if (operator === "+") {
// // // //     var total = num1+ num2
// // // // document.write("<h1> your result is : " + total + "</h1>");
// // // // } else if (operator === "/") {
// // // //     var total = num1 / num2
// // // //   document.write("<h1> your result is : " + total + "</h1>");  
// // // // } else if (operator === "*") {
// // // //     var total = num1 * num2
// // // //   document.write("<h1> your result is : " + total + "</h1>");  
// // // // } else if (operator === "-") {
// // // //     var total = num1 - num2
// // // //   document.write("<h1> your result is : " + total + "</h1>");  
// // // // } else if (operator === "%") {
// // // //     var total = num1 % num2
// // // //   document.write("<h1> your result is : " + total + "</h1>");  
// // // // } else {
// // // //     document.write("<h1> Error valid" + "</h1>")
// // // // }

/// question 6

// // // // buy product total bill 


// // // // var prd1=+prompt("Enter price of 1st product")
// // // // var prd2=+prompt ("Enter price of 2nd product")
// // // // var prd3=+prompt ("Enter price of 3rd product")

// // // // var totalbill= prd1 + prd2 + prd3

// // // // document.write( "<h1> Total bill = "+ totalbill +"</h1>")

// // // // question 7


// // // // // A = 10 + 5 * 2
// // // // // Order of operations: Multiplication first (5 * 2 = 10), then addition (10 + 10).
// // // // var A = 10 + 5 * 2; 
// // // // console.log("A:", A); // Result: 20

// // // // // B = (10 + 5) * 2
// // // // // Order of operations: Parentheses first (10 + 5 = 15), then multiplication (15 * 2).
// // // // var B = (10 + 5) * 2; 
// // // // console.log("B:", B); // Result: 30

// // // // // C = 20 / 2 + 3 * 4 - 5
// // // // // Order of operations: Division and multiplication  (20 / 2 = 10, 3 * 4 = 12), 
// // // // // then addition and subtraction left-to-right (10 + 12 = 22, then 22 - 5).
// // // // var C = 20 / 2 + 3 * 4 - 5; 
// // // // console.log("C:", C); // Result: 17

// // // // // D = 5 + 2 * (8 - 3) / 5
// // // // // Order of operations:first (8 - 3 = 5), 
// // // // // then multiplication and division (2 * 5 = 10, then 10 / 5 = 2), 
// // // // // // then addition (5 + 2).
// // // // // var D = 5 + 2 * (8 - 3) / 5; 
// // // // // console.log("D:", D); // Result: 7

// // // // // // E = 30 % 4 + 6 * 2
// // // // // // Order of operations: percentage (%) and multiplication (*) and then add:
// // // // // // 1) 30 % 4 = 2
// // // // // // 2) 6 * 2 = 12
// // // // // // // 3) Addition: 2 + 12
// // // // // // var E = 30 % 4 + 6 * 2; 
// // // // // // console.log("E:", E); // Result: 14

// question 8

// // // // welcome message

// // // var firstname= prompt("Enter your First Name")
// // // var lastname=  prompt("Enter your Last Name")
// // // var City=      prompt ( "Enter your City Name")

// // // // document.write("<h1> FirstName is:" + firstname +"</h1>")

// // // // document.write("<h1> " + "Last Name  is : "+  lastname +"</h1>")

// // // // document.write("<h1> City Name "+ " is :"+" " + City +"</h1>")


// question 9


// // // //   ask for birth and age


// // // // var birth = prompt("Enter your year of birth:");
// // // // var currentYear = 2026;
// // // // var age =  currentYear - birth;


// // // // document.write("<h1>your Age is : " + age +"</h1>")

/// question 10


// // // // Ask the user to enter marks for five subjects (max 100 each)
// // // var sub1 = +(prompt("Enter marks for Subject Sci:"));
// // // var sub2 = +(prompt("Enter marks for Subject Math:"));
// // // var sub3 = +(prompt("Enter marks for Subject Eng:"));
// // // var sub4 = +(prompt("Enter marks for Subject IsL:"));
// // // var sub5 = +(prompt("Enter marks for Subject Urdu:"));

// // // // 1. Calculate Total Obtained Marks
// // // var totalObtained = sub1 + sub2 + sub3 + sub4 + sub5;

// // // // 2. Total Maximum Marks (5 subjects * 100 marks each)
// // // var totalMaxMarks = 500;

// // // // 3. Calculate Percentage
// // // var percentage = (totalObtained / totalMaxMarks) * 100;

// // // // Display the results

// // // if (percentage>= 50 && totalObtained<=totalMaxMarks) {
// // //     if (percentage <= 100) {
// // //     alert(
// // //     "your percentage is "+ percentage + "%"+
// // //     "Clap that you are passed!"
// // // );  
// // //  } else {
// // // alert ("invalid number")
// // // } 
// // // } else {
// // //      alert(
// // //     "your percentage is "+ percentage + "%"+
// // //     "you are Failed! Try again Best of Luck!"
// // // );
// // // }


//question 11


// // // Ask the user to enter an amount in PKR
// // var pkr = prompt("Enter PKR:");

// // // Fixed exchange rate: 1 USD = 280 PKR
// // var exchangeRate = 280;

// // // Convert PKR to USD
// // var usd = pkr / exchangeRate;

// // // Display the equivalent amount in USD
// // alert("Equivalent USD: $" + usd);

// question 12


// // Ask the user to enter the basic salary
// var basicSalary = +prompt("Basic Salary:");

// // 1. House Allowance: 20% of basic salary
// var houseAllowance = basicSalary * 0.20;

// // 2. Medical Allowance: 10% of basic salary
// var medicalAllowance = basicSalary * 0.10;

// // 3. Tax Deduction: 5% of basic salary
// var taxDeduction = basicSalary * 0.05;

// // 4. Gross Salary (Basic + House Allowance + Medical Allowance)
// var grossSalary = basicSalary + houseAllowance + medicalAllowance;

// // 5. Net Salary after tax (Gross Salary - Tax Deduction)
// var netSalary = grossSalary - taxDeduction;

// // Display the result matching the sample output format
// alert(
//     "Basic Salary: Rs. " + basicSalary + 
//     "House Allowance: Rs. " + houseAllowance  +
//     "Medical Allowance: Rs. " + medicalAllowance  +
//     "Gross Salary: Rs. " + grossSalary  +
//     "Tax Deduction: Rs. " + taxDeduction  +
//     "Net Salary: Rs. " + netSalary
// );


// ///--------------------------------Assignment 01 ------------------------------------------------///