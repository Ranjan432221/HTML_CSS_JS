// let n = prompt("enter any number");
// for(let i = 1;i<= n;i++)
// {
//     console.log("apna college");
// }
let sum = 0;
for(let i = 1;i<= 5;i++)
{
    sum = sum + i;
}
console.log("sum =",sum);
// for(let i= 0;i<=n;i++)
// {
//     console.log("i=",i);
// }
// let a = prompt("enter any no");
// let b = a**2;
// console.log(b);
// for(let i=1;i<=6;i++)
// {
//     console.log(i);
// }
//WHILE LOOP
// let i = 1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }
//DO WHILE LOOP
// let i =1;
// do
// {
//     console.log(i);
//     i++;
// }while(i<=11);
//FOR OFF LOOP =>SYNTAX=>for(let variable of string variable)
//it is use for only string 
// let str = "ranjan";
// let length = 0;
// for(let i of str)//iterator-->charactor
// {
//     console.log("i=",i)
//     length++;
// }
// console.log(length);
//FOR IN LOOP=>SYNTAX=>for(let variable in variable)
//it returns key of  any object
// let student ={
//     cgpa:7.8,
//     marks: 120,
//     educat:12,
//     str:"ranjan",
// };
// for(let key in student)
// {
//     console.log("key=",key ,"value=",student[key]);
// }
//practice question
// let num = 100;
// for(let i = 0;i<=num;i++)
// {
//     //even number
//     if(i%2==0)
//     {
//         console.log("i=",i);
//     }
// }
//practice question2
// let gameNumber = 25;
// let userName = prompt("guess the game number:");
// while(userName != gameNumber){
//     userName = prompt("you entered the wrong  number.guess again:");
//  }console.log("congratulation,you enterd the right number");
//STRING
//create a string in a store a variable with double quotes
//let a = "ranjan" =>ranjan is store like a string
//string
// let a = "ranjan";
// console.log(a[0]);//e
//Template Literals
// let obj = {
//     item:"pen",
//     price:10,
// };
// // let output=`the cost of ${obj.item} is ${obj.price} rupees`;

// //=>above is string interpolation

// console.log(output);

// console.log("the cost of",obj.item,"is",obj.price,"rupees");

// let specialString = `this is a template lioterals`;

// console.log(typeof specialString);

// //we can combine all value in string through template literals

//escape character is giving the next line"\n,gap=>\t

//STRING METHOD=>kuch kaam karke deta hai e.g-->str.toUpperCase

//-->str.toLowerCase ,str.trim()-->to remove white space of starting and end of string

//str.slice(start,end);str.concate(str1)-->str+str1;

//str.replace(searchVal,newVal);str.CharAt(placeval)

//original strings are immutable cause eia kabhi nehi change hota hai

// let str = "ranjan";

// str = str.toUpperCase();

// console.log(str);

// let str = "hello";

// let str2 = "ranjan";

// console.log(str.concat(str2));

// console.log(str.replace("h","y"));

// console.log(str.replace("lo","p"));

// let marks = [87,89,90,67,78];
// console.log(marks);
// console.log(marks,length);//property int he array 
// //property gives value but method gives some work
// let hero = ["ironman","shaktiman","spiderman","antman"];
// console.log(hero);
//array is a mutable, we can change the value in particular place in array
//below the example with solution
// let arr = [34,67,89,98];
// arr[1] = 66;
// console.log(arr);
//array looping over
// let heroes = ["ironman","thor","hulk","spiderman","antman"];
// // for(let i = 0;i<heroes.length;i++)
// // {
// //     console.log(heroes[i]);
// // }
// //for of 
// for(let j of heroes)
// {
//     console.log(j);
// }
// let cities = ["delhi","pune","pune","hyderabad","gurgaon"];
// for(let j of cities)
// {
//     console.log(j.toUpperCase());
//}
//ARRAY METHODS
//Concate():
//shift(),slice(),splice()
// let marvel = ["thor","spiderman","ironman"];
// let heroes = ["spidermanant","batman","jungleman"];
// let final = marvel.concat(heroes);
// console.log(final);
// let arr = l[1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//splice(indexno,deleteno,addno)
//console.log(arr);
//add element
// arr.splice(2,0,101,102,203);
// console.log(arr);
//Replace emlement
// arr.splice(3,1,101);
// console.log(arr);
//FUNCTION IN JAVASCRIPT=>block of code that perform a specific tast can be iunvoked whenever needed
//function sum (a,b){
    //console.log(a+b);
//     s = a+b;
//     return s;
// }
// let val = sum(2,3);
// console.log(val);
//function parameters =>like local variable of function 
//ARROW FUNCTION(=>)
//modern javascript ki andar jo extra features add hua thha that is ARROW FUNCTION
//SYNTAXX OF ARROW FUNCTION=>const functionName = (val,val...)=>{};
// const sum =(a,b) =>{
//     let e = a/b;
//     return e;
// }
// let val1 = sum(10,5);
// console.log(val1);
// const arrowSum = (a,b) =>{
//     return a+b;
// }
// let val1 = arrowSum(10,20);
// console.log(val1);
// function mul(a,b)
// {
//     return a*b;
// }
// let val2 = mul(12,4);
// console.log(`the multi ply of a and b is = ${val2}`);
// const arrowMulti = (a,b) =>
// {
//     return a*b;
// } 
// let b = arrowMulti(2,3);
// console.log(`the multiplication of two number= ${b}`);
// const arrow = ()=>
// {
//     console.log("it is a hello world");
// };
// function countVowels(str){
//     //"ranjan kumar sahoo" count = 1;
//     let count =0;
//     for(const char of str){
//        if(char ==="a" || char === "e" || char === "i" || char === "o"|| char == "u"){
//        count++;
//        }

// // }
// console.log(count);
// };
const countVowelss = (str) =>{
    count = 0;
    for(let char of str){
        if(char === "a" ||
           char === "e" ||
         char === "i" ||
         char === "o" ||
        char === "u"){
            count++;
        }
    }
    console.log(count);
}
