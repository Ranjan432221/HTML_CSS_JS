//forEach Loop in Arrays//
//CallbackFunction :here it is a function to execute fir each element in the array
//* A callback is a function passed as an argument to another function
//Syntax=> arr.forEach(CallBackFunction)
//"abc"toUpperCase->here to upper case is a method cause we alwys use "touppercase for string"
function abc(){
    console.log("hello");
}
//function normal variable ki tarah kahi se bhi pass kia ja sakta hai
function myFunction(abc){
    return abc;
}
let arr = [1,2,3,4,5];
// arr.forEach(function printValue(value)
// {
//   console.log(value);
// });
arr.forEach((val) =>
{
   console.log(val);
})
//if we store the string it gives the string as a output
let array = ["ranjan","rahul","raghab","rathor"];

// array.forEach( function print(val){
//     console.log(val);
// })

array.forEach((val)=>{
    console.log(val);
});

array.forEach((val)=>{
    console.log(val.toUpperCase());
});
//here we use parameter thats are optional (i)->value, index,arrayItself
const arrr = ["delhi","pune","hyderabad","ganjam","odisha"];

arrr.forEach(function printarrr(result,idex,arrr){
    console.log(result.toUpperCase(),idex,arrr);
})


//WHAT IS HIGHER ORDER FUNCTION ?
// ans: kisi dusere function ko as a parameter use karte hay or yaa Kisi function ko return karte hai
// kisi dusre function mai callBack dikhe to usko Higher order function/method bolte hai
//javascripts are method are either take another function is a parameter insidethem or they return another function as there output
//q) FOR GIVEN ARRAY OF NUMBERS,PRINT THE SQUARE OF EACH VALUE USING THE FOREACH LOOP

let newArr = [1,2,3,4,5,6];

newArr.forEach(function printvalue(val){
    console.log(val * val);
});

let num = [4,5,6,7,8,9,10];
num.forEach((val,idex)=>{
    console.log("below the value");
    console.log(val * val,idex);
})

let number = [11,12,13,14];
//we can define a forEach function in new method that i have written in given below

let calSquare = (number) => {
    console.log(number * number);
}
 number.forEach(calSquare);


 // it is just a simple function i have written in below
  let x = r(6,7);
   
  function r(a,b){
    console.log(a*b);
  }

  //it is gives the ans of the html id result write it below 
   let y = t(3,4);
  document.getElementById("result").innerHTML = y;

  function t(u,v) {
    return u*v;
  }

  // SOME ARRAY METHOD ->it is very very important for making website
  //everyone use this type of method in their own web development
  // 1st -> MAP => it is maximum similar with the forEach
  // here maps returns new array but forEach not return new array its return only the some work
  //defn of map = Create a new Array with the result of some operation.the value its callback returns 
  //are used to form a new array

  //SYNTAX: arr_name.map(callBackFunx(value,index,array)) 

  let numbers = [1,2,3,4,5,6];
   
  numbers.map((value,index)=>{
     console.log(value,index);
  });


  let nUm = [23,34,45,56];
   let store = nUm.map((val)=>{
    return val*2;
   });

   console.log(store);


   // 2nd array -> Filter method ->defn ->creates a new array of element that five true for a condition /filter.
   //eg:all even elements

   let ar = [2,3,4,5,6,7,8,9];
    let evenAr = ar.filter((val)=>{
    //  return val%2 === 0;
    return val > 3;
   });
   console.log("evenn arr=",evenAr);

   //3rd array -> Reduce method->defn -> perform some operations & reduces the array to single value.
   //it return that single value. eg:find sum ,find avg -> here we have to take orethan one value but ans only one
   let newAr = [1,2,3,4,5,6];
   const output = newAr.reduce((prev,curr)=>{
    return prev + curr;
   });
   console.log("the sum of a number is =",output);


   // find the largest number ?

   let largest = [11,22,12,34,32];

   let resLargest = largest.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
   });
   console.log(resLargest);

   //Q) we are given array of marks of students.Filter out of the marks of students that scored 90+

   let studentsMarks = [34,56,91,98,97,90];
    let markResult = studentsMarks.filter((val)=>{
        return val > 90;
    });
    console.log("the students of amrks above the 90",markResult);


    // problem with ans

    let n = prompt("enter the anynumber");
    let Arr = [];
    for(let i=1;i<=n;i++){
        Arr[i-1] = i;
    }
    console.log(Arr);

    let resOfArr = Arr.reduce((prev,curr)=>{
        return prev + curr;
    });
    console.log("the sum of all number present arr = ",resOfArr);


    let resfArr = Arr.reduce((prev,curr)=>{
        return prev * curr;
    });
    console.log("the product of all number present arr = ",resfArr);
