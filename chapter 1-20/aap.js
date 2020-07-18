// Assignment 1 -- Chapter 1

// Question 1
// alert("Welcome To Our Website, Have a Nice Day...!!!");

// Question 2
// alert("Error! Please enter a valid pasword");

// Question 3
// alert("Welcome to Js land..... \nHappy Coding!") 

// Question 4
// alert("Welcome to Js land...")

// var check = document.createElement('input');
// check.type = 'checkbox';
// checkbox.id = "id";
// var lable = document.createElement('label');
// lable.htmlFor = 'id';
// lable.appendChild(document.createTextNode('Prevent this page from creating additional dialogs.'))
// var myDiv = document.getElementById('myDiv');
// myDiv.appendChild(check);
// myDiv.appendChild(lable);
// confirm(myDiv) 

// Question 5
// run from console
// alert("Hello... I  Can run js from my web browser's console")

// Question 6 and 7
// in html file




// Assignment 1 --Chapter 2

// Question 1
var username;

// Question 2
var myName = "Syed Muhammad Daniyal";

// Question 3
// var message;
// message = 'Hello World';
// alert(message);

// Question 4
var Name = "Daniyal";
var age = '19 years old';
var skills = 'Certified in mobile application development';
// alert(Name);
// alert(age);
// alert(skills);

// Question 4
var food = 'pizza';
var str = ""
for(var i = 0; food.length > 0; i++){
    str += food;
    str += "\n";
    food = food.slice(0,-1);
}
// alert(str)

// Question 5
var email = "smdaniyal321@gmail.com";
// alert("My Email address is :  " + email);

// Question 6
var book = "A smarter way to learn JavaScript";
// alert(book)

// Question 7
var message = "Yah! I can write HTML content through Javascript"
// document.write()

// Question 8
var design = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬' ;
// alert(design)





// Assignment 1 --Chapter 3

// Queation 1
var age = 19;
// alert("I am " + age + " years old..")

// Question 2
var number_of_visits = 15;
// alert("You have visited " + number_of_visits + " times.");

// Question 3
var birth_year = 2000;
document.write("My birth year is " + birth_year + "<br>Date type of my declared variable is number")

// Question 4
// var name = prompt("Enter your name:");
// var prod = prompt("Which product you want:");
// var qty = prompt("Enter Quantity");
// document.write("<br>" + name + " ordered " + qty + " " + prod + "(s) on XYZ Clothing store.")






// Assignment 1 --Chapter 4

// Question 1
var fname, lname, address;

// Question 2
// legal variables
var abc, abc1, abc_xyz, abcXyz, abc_2_xyz;
// Illegal variables
// var 1abd, @abc, abc xyz, &abc, /abc;

// Question 3
// 3:a
document.write("<h1>Rules for naming JS variables</h1><br>")
// 3:b
document.write(" Variable names can only contain letter , $ , _  and number<br>")
// 3:c
document.write(" Variables must begin with a _ , $ , name <br>")
// 3:d
document.write("Variable names are case sensitive <br>")
// 3:e
document.write("Variable names should not be JS keywords False <br>")






// Assignment 1 --Chapter 5
// Question 1
// var n1 = prompt("Enter 1st no:");
// var n2 = prompt("Enter 2nd no:");
// var sum = n1 + n2;
// document.write("The sum of " + n1 + " and " + n2 + " is " + sum);

// Question 2

// Subtraction
// var n1 = prompt("Enter 1st no:");
// var n2 = prompt("Enter 2nd no:");
// var sum = n1 - n2;
// document.write("The diff of " + n1 + " and " + n2 + " is " + sum);

// Multiply
// var n1 = prompt("Enter 1st no:");
// var n2 = prompt("Enter 2nd no:");
// var sum = n1 * n2;
// document.write("The prod of " + n1 + " and " + n2 + " is " + sum);

// Divide
// var n1 = prompt("Enter 1st no:");
// var n2 = prompt("Enter 2nd no:");
// var sum = n1 / n2;
// document.write("The divident of " + n1 + " and " + n2 + " is " + sum);

// Modulas
// var n1 = prompt("Enter 1st no:");
// var n2 = prompt("Enter 2nd no:");
// var sum = n1 % n2;
// document.write("The modulas of " + n1 + " and " + n2 + " is " + sum);

// Question 3
var variable;
document.write("<br><br>Value after variable declaration is " + variable);
variable = 5;
document.write("<br>Initial value is ", variable++);
document.write("<br>Value after increment is " + variable);
document.write("<br>Value after addition is " + (variable+7));
document.write("<br>Value after decrement is " + --variable);
document.write("<br>The remainder is " + variable%3)

// Question 4
var cost_of_movie_ticket = 600;
var no_of_tickets = 5;
document.write("<br><br>Total cost to buy " + no_of_tickets + " tickets to a movie is " + cost_of_movie_ticket + "PKR")

// Question 5
// var no = prompt("Enter a number:");
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }




// Assignment 1 --Chapter 6-9

// Question 1
// var a = prompt("Enter value of a:");
// document.write("<br><br>Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>............................");
// document.write("<br><br>The value of ++a is: ",++a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a++ is:",a++);
// document.write("<br>The value of a is:",a);
// document.write("<br><br>The value of --a is: ",--a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a-- is: ",a--);
// document.write("<br>The value of a is: ",a);


// Question 2
var a = 2, b = 1;
document.write("<br><br>a is ",a);
document.write("<br>b is ",b);
var result = --a - --b + ++b + b--;
// --a = 1
// --a - --b = 1
// --a - --b + ++b = 2
// --a - --b + ++b + b-- = 3
document.write("<br>Result is ",result);


// Question 3
// var name = prompt("Enter your name: ");
// alert("Hello " + name + " Welcome to our site!!!")


// Question 4
// var no = prompt("Enter a number:");
// if(no === ""){
//     no = 5
// }
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// Question 5
// solution at index.html file





// Assignment 1 --Chapter 9-11

// Question 1
// var city = prompt("Enter your city name").toUpperCase();
// if(city == "KARACHI"){
//     alert("Welcome to the city of lights")
// }

// Question 2
// var gender = prompt("Enter your gender").toUpperCase();
// if(gender === 'MALE'){
//     alert('Good Morning Sir');
// }else if(gender === 'FEMALE'){
//     alert("Good Morning Ma'am")
// }

// Question 3
// var color = prompt("Enter color of traffic signal").toUpperCase();
// if(color === "RED"){
//     alert("Must Stop")
// }else if(color === "YELLOW"){
//     alert("Ready To Move")
// }else if(color === "GREEN"){
//     alert("Move Now")
// }

// Question 4
// var fuel = prompt("Enter fuel in litre");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }

// Question 5
// a
// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// } 

// // b
// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }

// // e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// // f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }


// Question 6
// var sub1 = prompt("Enter marks of sub1");
// var total1 = prompt("Enter total marks of sub1");

// var sub2 = prompt('Enter marks of sub2');
// var total2 = prompt("Enter total marks of sub2");

// var sub3 = prompt("Enter marks of sub3");
// var total3 = prompt("Enter total marks of sub3");

// var obt = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
// var total = parseInt(total1) + parseInt(total2) + parseInt(total3);

// var percentage = (obt/total) * 100;

// document.write("<h1>Mark Sheet</h1><br><br><br>");
// document.write("Obtained Marks = ",obt);
// document.write("<br>Total Marks = ",total);
// document.write("<br>Percentage = ", percentage);

// if (percentage >= 80){
//     document.write("<br>Grade = A one");
//     document.write("<br>Remarks = Excellent")
// }else if(percentage >= 70){
//     document.write("<br>Grade = A");
//     document.write("<br>Remarks = Good")
// }else if(percentage >= 60){
//     document.write("<br>Grade = B");
//     document.write("<br>Remarks = You Need To Improve")
// }else if(percentage < 60){
//     document.write("<br>Grade = Fail");
//     document.write("<br>Remarks = Sorry")
// }

// Quesiton 7
// var sec_number = 5;
// var user_input_number = prompt("Enter number");
// if (user_input_number === sec_number){
//     alert("Bingo! Correct answer");
// }else if (user_input_number === (sec_number+1)){
//     alert("Close enough to the correct answer")
// }

// Question 8
// var number = prompt("Enter a number");
// if (number%3 === 0){
//     alert("This number is divisible by 3")
// }

// Question 9
// var number = prompt("Enter a number");
// if (number%2 === 0){
//     alert('Even')
// }else if(number%2 !== 0){
//     alert('Odd')
// }

// Question 10
// var temp = prompt("Enter temperature");
// if(temp > 40){
//     alert('It is too hot outside.')
// }else if(temp > 30){
//     alert('The Weather today is Normal.')
// }else if(temp > 20){
//     alert("Today's weather is cool.")
// }else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// Question 11
// var fno = parseInt(prompt("Enter first no"));
// var lno = parseInt(prompt("Enter  second number"));
// var operator = prompt("Enter operator");
// if(operator === "+"){
//     alert('The sum is ' + (fno + lno));
// }else if(operator === "-"){
//     alert('The sum is ' + (fno - lno));
// }else if(operator === "*"){
//     alert('The sum is ' + (fno * lno));
// }else if(operator === "/"){
//     alert('The sum is ' + (fno/lno));
// }else if(operator === "%"){
//     alert('The sum is ' + (fno%lno));
// }





// Assignment 1 --Chapter 12-13

// Queation 1
// var letter = prompt("Enter a letter");
// if("abcdefghijklmnopqrstuvwxyz".indexOf(letter) > -1){
//     alert("This is lowercase")
// }else if("ABCDEFGHIJKLMNOPQURSTUVWXYZ".indexOf(letter) > -1){
//     alert("This is uppercase")
// }



// Question 2
// var no1 = parseInt(prompt("Enter 1st number"));
// var no2 = parseInt(prompt("Enter 2nd number"));
// if(no1> no2){
//     alert("1st number is greater");
// }else if(no2 > no1){
//     alert("2nd number is greater");
// }else if(no1 === no2){
//     alert("Both numbers are same");
// }

// Question 3
// var number = prompt("Enter a number");
// if (number > 0){
//     alert("number is positive")
// }else if(number < 0){
//     alert("number is negative")
// }else if(number === 0){
//     alert("number is equal to zero")
// }

// Question 4
// var str = prompt("Enter a letter").toLowerCase();
// if("aeiou".indexOf(str)> -1){
//     alert("True")
// }else{
//     alert("False")
// }

// Question 5
// var pas = "12345";
// var pas1 = prompt("Enter pasword 1");
// if (pas1 === pas){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Pasword")
// }

// Question 6
var greeting;
var hour = 13;
if(hour < 18){ 
    greeting = "Good day";
}
else{
     greeting = "Good evening";
}

// Question 7
// var time = parseInt(prompt("Enter time in 24hr format"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night")
// }





// Assignment 1 --Chapter 14-16

// Question 1
var students_list = new Array();

// Question 2
var students_list = new Array();

// Question 3
var string_array = ['a' , 'b' , 'c'];

// Question 4
var number_array = [1,2,3];

// Quesiton 5
var bolean_array = [ true, false, false, true];

// Question 6
var mixed_array = ['a', 1, 1.1, true];

// Question 7
var degree = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phill', 'Ph.D'];
for(i = 0; i< degree.length; i++){
    document.write("<br>",i+1,") ",degree[i]);
}

// Quesiton 8
// var name_array = ["Muhammad Daniyal", "Madani Raza", "Muhammad Nameer"];
// var score_array = [400,350,450];
// var percent_array = [(400/500)*100, (350/500)*100, (450/500)*100];
// for(i = 0; i < name_array.length; i++){
//     document.write("<br><br>Score of ",name_array[i], " is ", score_array[i] , ". Percentage is: ", percent_array[i]);
// }

// // Question 9
// var color = ['red', 'green', 'blue'];
// document.write("<br>The array before addition");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_first = prompt("Enter color to put in begining");
// document.write("<br>The array after adding color in beginning");
// color.unshift(color_first);
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_last = prompt("Enter color to put in begining");
// color.push(color_first);
// document.write("<br>The array after adding color in end");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }

// document.write("<br>The array after adding more colors");
// color.unshift("black", 'white', 'pink');
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// document.write("<br>The array after deleting first color");
// color.splice(0,1)
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }




// Question 10
var marks = [200,400,100,300];
document.write("<br>Score of students: ")
for(i = 0; i < marks.length; i++){
    document.write(marks[i] + "  ")
}

marks.sort();

document.write("<br>Ordered Scores of Students: ");
for(i = 0; i < marks.length; i++){
    document.write(marks[i] + "  ")
}

// Question 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write("<br>List of cities: ")
for(i = 0; i < cities.length; i++){
    document.write(cities[i] + " ");
}

document.write("<br>Selected cities: " ,cities.slice(2,4))

// Question 12
var list = ['This',"is",'my','cat'];
document.write("<br>Array<br>",list);
document.write("<br>String<br>",list.join(" "));

// Question 13
var devices = [];
devices.unshift('keyboard');
devices.unshift('mouse');
devices.unshift('monitor');
devices.unshift('printer');

document.write("<br>Devices");
document.write("<br>",devices);

for(i = 0 ; i < devices.length; i++){
    document.write("<br>Out:<br>",devices[i]);
}

// Question 14
var devices = [];
devices.push('keyboard');
devices.push('mouse');
devices.push('monitor');
devices.push('printer');

document.write("<br>Devices");
document.write("<br>",devices);

for(i = 0 ; i < devices.length; i++){
    document.write("<br>Out:<br>",devices[i]);
}

// Question 15
// solution at index.html page


// Assignment 1 --Chapter 17-20
// Question 1
var array_0f_array = [[] , [] , [] , []];

// Question 2
var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
document.write("<br>")
for(i = 0; i < array.length; i++){
    for(j = 0; j < array[i].length; j++){
        document.write(array[i][j]," ");
    }
    document.write("<br>")
}

// Question 3
for(i = 0; i<11; i++){
    document.write("<br>",i, "<br>");
}

// Question 4
// var number = parseInt(prompt("Enter number for multiplicaiton"));
// var length = parseInt(prompt("Enter length of multiplicaiton table"));

// for(i = 1; i< (length+1);i++){
//     document.write("<br>" + number + "   x    " + i + "    =    " + "    " + (number*i))
// }

// Question 5
var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawerry'];
for(i = 0; i < fruits.length ; i++){
    document.write(fruits[i], "<br>")
}
for(i = 0; i < fruits.length ; i++){
    document.write("Element at index ", i , " is " , fruits[i] , "<br>");
}

// Question 6
document.write("Counting<br>");
for(i = 1; i < 16; i++){
    document.write(i," ")
}

document.write("<br>Reverse Counting<br>");
for(i = 10; i > 0; i--){
    document.write(i," ");
}

document.write("<br>Even<br>");
for(i = 0; i < 21; i++){
    if(i%2 === 0){
        document.write(i," ")
    }
}

document.write("<br>Odd<br>");
for(i = 0; i < 21; i++){
    if(i%2 !== 0){
        document.write(i," ")
    }
}

document.write("<br>Series<br>");
for(i = 0; i < 11; i++){
    document.write(2*i,"K ")
}

// Question 7
// var items = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt("Welcome to pre to pro bakery! What do you want to order");
// if(items.indexOf(order) > -1){
//     document.write("<br><br>",order," is available at index", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br><br>We are sorry ", order, " is not available in our bakery")
// }

// Quesiton 8
var num = [24, 53, 78, 91, 12];
document.write("<br>Array items: ", num);
num.sort();
document.write("<br>Largest number: ", num[num.length - 1]);

// Question 9
var num = [24, 53, 78, 91, 12];
document.write("<br>Array items: ", num);
num.sort();
document.write("<br>Smallest number: ", num[0]);

// Question 10
document.write("<br>")
for(i = 0; i < 101; i++){
    if(i%5 === 0){
        document.write(i,", ")
    }
}