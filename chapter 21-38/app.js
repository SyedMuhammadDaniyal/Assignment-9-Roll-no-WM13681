// Assignment 6

// Chapter 21-25

// Question 1
// var fname = prompt('Enter first name');
// var lname = prompt('Enter last name');
// var fullname = fname + " " +lname;
// alert('Hello ' + " " + fullname + ' Welcome to our site...')

// Question 2
// var phoneModel = prompt('Enter your fav phone');
// var length = phoneModel.length;
// document.write("My fav phone is: ", phoneModel);
// document.write("<pre>\nlength of chars ", length,"</pre>")

// Question 3
var country = 'Pakistani';
var n_index = country.indexOf('n');
document.write('String: ', country);
document.write('<pre>\n index of "n" :', n_index, '</pre>')

// Queastion 4
var string = 'Hello World';
var index = string.lastIndexOf('l')
document.write('String: ', string);
document.write('<br>last index of "l": ', index)

// Question 5
var country = 'Pakistani';
var third_index = country[3];
document.write('<br><br>String: ', country);
document.write('<br> index of "n" :', third_index, '<br>');

// Question 6
// var fname = prompt('Enter first name');
// var lname = prompt('Enter last name');
// var fullname = fname.concat(lname);
// alert('Hello ' + " " + fullname + ' Welcome to our site...')

// Question 7
var city = 'Hyderabad';
var newCity = city.replace('Hyder', 'Islam')
document.write('<br><br>City: ', city);
document.write('<br> After replacement :', newCity, '<br>');

// Quesiton 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write('<br><br>Message: ', message);
document.write('<br> <br>After replacement :', newMessage, '<br>');

// Question 9
var number = '472';
document.write('<br>Value: ', number);
document.write("<br>Type: ", typeof (number));
number = parseInt(number);
document.write('<br>Value: ', number);
document.write("<br>Type: ", typeof (number));

// Question 10
// var input = prompt('Enter something');
// document.write('<br><br>User Input: ', input);
// document.write('<br>Upper Case :', input.toUpperCase(), '<br>');

// Question 11
// var input = prompt('Enter something');
// document.write('<br><br>User Input: ', input);
// var a =  input.split(" ");
// final_input = "";
// for(item in a){
//     var fletter = a[item][0].toUpperCase();
//     var remaining_letters = a[item].slice(1, );
//     var final_input = final_input+ " " + fletter.concat(remaining_letters);

// }
// document.write('<br>title Case :', final_input, '<br>');

// Question 12
var num = 36.36;
document.write("<br>Number: ", num);
document.write('<br> String: ', num.toString().replace('.', ""));

// Question 13
// var name = prompt("Enter your name:");
// if ((name.indexOf(String.fromCharCode(33)) > -1) || (name.indexOf(String.fromCharCode(44)) > -1) || (name.indexOf(String.fromCharCode(46)) > -1) || (name.indexOf(String.fromCharCode(64))) > -1) {
//     alert('Enter valid name...')
// }else{
//     alert('Welcome')
// }

// Question 14
// var order = prompt('Welcome to our bvakery... What do you want to order').toLowerCase();
// var items = ['pastry', 'cookie', 'spring roll']
// if(items.includes(order) == true){
//     document.write("<br>", order , " is availabe at index ", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br>", order , " is not availabe in our bakery")

// }

// Question 15


// question 16
var uni = 'Univarsity of Karachi'
var lst = uni.split("");
for (char in lst) {
    document.write("<br>", lst[char])
}

// Quesiton 17
// var country = prompt("Enter your country");
// document.write("<br>User input: " , country);
// document.write('<br>Last index character: ', country[country.length - 1])

// Question 18
var sentence = "The quick brown fox jumps over the lazy dog";
document.write('<br>Sentence: >', sentence);
var count = 0;
for (var item in sentence) {
    if (item == 'the') {
        count = count + 1;
    }
}
document.write("<br>There are ", count, " ocurence(s) of 'the' in sentece.")



// Chapter 26-30

// Question 1
// var n = parseFloat(prompt("Enter a number"));
// document.write("<br>Number: ", n);
// document.write("<br>Round off value: ", Math.round(n));
// document.write("<br>Ceil: ", Math.ceil(n));
// document.write("<br>Floor: ", Math.floor(n));

// Question 2
// var n = parseFloat(prompt('Enter a number'));
// if (n >= 0) {
//     var negativeFloat = -Math.abs(n);
// }
// document.write("<br>Number: ", negativeFloat);
// document.write("<br>Round off value: ", Math.round(negativeFloat));
// document.write("<br>Ceil: ", Math.ceil(negativeFloat));
// document.write("<br>Floor: ", Math.floor(negativeFloat));

// Question 3
// var n = prompt('Enter a number');
// document.write('<br>The absolute value of ', n, ' is ',Math.abs(n))

// Question 4
document.write("<br>Random dice value: ", Math.round(Math.random() * 10));
document.write("<br>Random dice value: ", Math.round(Math.random() * 10));

// Question 5
var number = Math.round(Math.random()) + 1;
document.write("<br>", number);
if (number == 1) {
    document.write('<br>Random coin value: Heads');
} else {
    document.write('<br>Random coin value: Tails');
}

// Quesiton 6
document.write('<br>Random numner between 1 and 100: ', Math.round(Math.random() * 100));

// Quesiton 7
// var weight = parseInt(prompt("Enter your weight"));
// document.write('<br>Your weight is ', (weight + Math.random()));

// Question 8
// var secNo  = Math.random()*10;
// var userInput = prompt("Enter any nuber");
// if(secNo === userInput){
//     alert("Congratulation you guess the correct number");
// }else{
//     alert('Opps you are wrong. Try again next time');
// }




// Chapter 31-34

// Question 1
var date = new Date();
document.write("<br>",date);

// Quesiton 2
var date = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
document.write("<br>Current month: ", months[date.getMonth()]);

// Question 3
var date = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
document.write("<br>Current day: ", days[date.getDay()]);

// Question 4
var date = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
if(days[date.getDay()] == 'Sun' || days[date.getDay()] == 'Sat'){
    document.write('<br>It is fun day...')
} 

// Quesiton 5
var date = new Date();
var date1 = date.getDate();
if(date1 < 16){
    document.write("First fifteen days of month...")
}else{
    document.write("Last days of month...")
}

// Question 6
var date1 = new Date();
var time_ms = date1.getMilliseconds();
var time_m = date1.getMinutes();
document.write("date : "+ date1 +"<br>")

document.write("time in milisecond : "+time_ms+"<br>")

document.write("time in minutes : "+time_m+"<br>")

// Question 7
var date = new Date();
var hr = date.getHours();
if(hr < 12){
    document.write('It is am')
}else{
    'It is pm'
}

// Question 8
var date = new Date();
var month = date.getMonth();
var lmonth = (11 - month) + month;
var day = date.getDay();
var lday = (31 - day) + day;
date1 = new Date(2020, lmonth, lday);
document.write(date1)

// Quesiton 9
const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date(2015, 5, 18);
const secondDate = new Date(2015, 11, 31);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
document.write("<br>Diff days: ",diffDays)

// Quesiton 10
var age = prompt('Enter your age...');
var date = new Date();
var currentYear = date.getFullYear();
var age1 = 2020 - age;
document.write("<br>Your age is: ", age);
document.write("<br>Your birth year is: ", age1);




// Chapter 35-38

// Queaiton 1
function date_time() {
    document.write("<br>", new Date());
}
date_time()

// Question 2
function greeting(fname, lname) {
    document.write("<br>Hey! ", fname, " ", lname, " welcome to our site....")
}
greeting('Muhammad', 'Daniyal')

// Question 3
function sum(n1, n2) {
    return n1 + n2;
}
document.write("<br>Sum of numbers: ", sum(1, 2));

// Question 4
function calculator(n1, n2, operator) {
    if (operator == '+') {
        return (n1 + n2);
    }
    if (operator == '-') {
        return (n1 - n2);
    }
    if (operator == '*') {
        return (n1 * n2);
    }
    if (operator == '/') {
        return (n1 / n2);
    }
}

document.write("<br>", calculator(1, 2, '/'))

// Question 5
function square(n) {
    return n ** 2
}
document.write("<br>", square(2))

// Question 6
function factorial(n) {
    var number = n
    for (var i = 1; i < 5; i++) {
        number = number * i;
    }
    document.write('<br>Factorial of ', n, ' is ', number);
    return n
}
factorial(5)

// Question 7
function counter(start, end) {
    for (start; start < end; start++) {
        document.write("<br>", start)
    }
}
counter(1, 5)

// Quesiton 8
function hypotenous(base, perp) {
    function squares(base, perp) {
        return [base ** 2, perp ** 2]
    }
    var hyp = squares(base, perp);
    return hyp[0] + hyp[1]
}
document.write("<br>hypotenos: ", hypotenous(2, 2))

// Question 9
function area(width, height) {
    return width * height
}
document.write('<br>Area of rectangle: ', area(2, 3))

// Question 10
// var word = prompt("Enter any word");
// function palindrome(word) {
//     var new_word = ""
//     for (var i = word.length - 1; i >= 0; i--) {
//         new_word = new_word + word[i]
//     }
//     if (word == new_word) {
//         alert('Yes ' + word + ' is palindrome...')
//     }
// }
// palindrome(word)

// Question 11
// var str = prompt('Enter anything');
// function titleCase(str) {
//     var str_lst = str.split(" ");
//     var final_output = "";
//     for (item in str_lst) {
//         var fletter = str_lst[item][0].toUpperCase();
//         var remaining = str_lst[item].slice(1,);
//         final_output = final_output + fletter.concat(remaining);
//     }
//     document.write('<br>Input text :', str, '<br>');
//     document.write('<br>title Case :', final_output, '<br>');
// }
// titleCase(str)

// Quesiton 12
// var text = 'Web Development Tutorial';
// function longest(text) {
//     var lst = text.split(" ");
//     var len = 0;
//     var lst1 = []
//     for (i in lst) {
//         if (lst[i].length > len) {
//             len = lst[i].length;
//             lst1 = [lst[i], len]
//         }
//     }
//     alert(lst1[0])
// }
// longest(text)

// Quesiton 13
var str = "JSResourceS.com";
function counter(str, letter){
    var n = 0
for(i in str){
    if(str[i] == letter){
        n = n + 1;
    }   
}
document.write('<br>Occurence of ', letter, " in '" + str + "' is: ", n)
}
counter(str, 'k')

// Question 14
function calcCircumference(radius){
    document.write('<br>Circumference of circle: ', 2*Math.PI*radius)
}
calcCircumference(4)

function calcArea(radius){
    document.write('<br>Area of circle: ', Math.PI*(radius**2))
}
calcArea(5)