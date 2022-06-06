// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// //this is the title element
// console.log(document.title);
// console.log(document.doctype);
// //this is the log for head elements
// console.log(document.head);
// //this is the log for body elements
// console.log(document.body);
// //this is the log for all html
// console.log(document.all);
// console.log(document.all[10]);
// //this changes the header  
// document.all[10].textContent = 'We just changed the header';

//This is the log for all form, links, and image elements
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// //////////////////////////////////////////////////////////////

// Access the DOM with GETELEMENTBYID

// console.log(document.getElementById('header-title'));

// // Creation of an object variable using the document function.

// let headerTitle = document.getElementById('header-title');

// headerTitle.textContent = "Im changing the Header";

// headerTitle.style.color = 'orange';

///////////////////GetElementByClassName////////////////////////
var items = document.getElementsByClassName('list-group-item');

//This is the log for all items
console.log(items);
console.log(items[1]);

// Styling property Attributes through the variable

// items[1].textContent = "Hello World! Number 2"
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'black';
// items[1].style.color = 'blue';
// items[1].textContent = '[[]]--[[8]]--[[8]] wee-ooo wee-ooo';

// items[0].textContent = "Hello World! Number 2"
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'orange';
// items[0].style.color = 'blue';
// items[0].textContent = '[[]]--[[8]]--[[8]] wee-ooo wee-ooo';

// items[2].textContent = "Hello World! Number 2"
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'pink';
// items[2].style.color = 'blue';
// items[2].textContent = '[[]]--[[8]]--[[8]] wee-ooo wee-ooo';

//This is a counter which looks all the way until 10.
// for (let i = 1; 1 <= 10; i++) {
// //Execute code
//     console.log(i);
// }
//i++ is 1 +=2 is 2
// for (let i = 1; i <= 20; +=2) {
//     console.log(i);

// }

//This is a counter which looks all the way until 100 
// for (let i = 100; i >= 0; i -=2) {
//     console.log(i);
// }

// incrementing a value 
// for (var i = 0; i < items.length; i++) {
//  items[i].style.backgroundColor = 'gray';
//  items[i].textContent = 'I changed the list';
//  items[1].style.color = 'pink';
// }

//Creating an array
// const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

// for(let i = 0; i < myDiamonds.length; i++) {
//     console.log(i, myDiamonds[i]);
// }

// Creating GetElementbyTagName
// var li =document.getElementsByTagName('li');
//     console.log(li);
//     console.log(li[1]);

//Styling property Attributes through the variable
// li[1].textContent = "Hello 2";
// li[2].style.backgroundColor = 'red';
// li[1].style.color = 'orange';
// li[4].style.backgroundColor = 'green';
// li[6].textContent = 'huh';
// li[7].style.backgroundColor = 'teal';
// li[6].style.color = 'pink'; 
// li[3].style.color = 'purple';
// li[3].style.backgroundColor = 'lightblue';
// li[2].style.backgroundColor = 'pink';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Change Content';

// }

///////////////////// Query Selector //////////////////////////////

var header = document.querySelector('#main-header');
//Gives header border a solid blue line
header.style.borderBottom = 'solid 10px blue';
//select input and change the input box text
var input = document.querySelector('input');
input.value = "WHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT";
// select button and change the text to SEND
var submit = document.querySelector("input[type='submit']");
submit.value ='SEND';
// select the first item and change the text color to red
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// select the last item aka last child and change the text to coral
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';

///////////////////////////querySelectorAll////////////////////////////
// Variable name titles connect to title in html
var titles = document.querySelectorAll('.title');
// log for titles
console.log(titles);
// selected the header 2 title [0] and changed the text content
titles[0].textContent = 'hello lucas';
// select all odd listed-items 
var odd = document.querySelectorAll('li:nth-child(odd)')
// select all even listed-items
var even = document.querySelectorAll('li:nth-child(even)')

// Creating the variables
for (var i = 0; i <odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}
