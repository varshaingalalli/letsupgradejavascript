
//program to search a particular character in a sring
var str = "hello world";
var n = str.search("w");

console.log(n);

//program to convert minutes to seconds
let m=20;
s=m*60;
console.log('20 mins in seconds is ' +s);

//program to search a particular element in array
var array = [-10, -20, 30, -40, -50];

var found = array.find(function (element) {
return element > 0;
});
console.log(found);

//Program to display only elements containing 'a' in the term of array
var arr=['ball', 'ant']
for(let i=0;i<arr.length;i++)
{ var b=arr[i].search("a");
   if (b>=0)
   
    console.log(arr[b]);

}

// Print an array in reverse order
Array = ["abc","xyz","mno"];
console.log(Array);
Array = ["abc","xyz","mno"].reverse();
console.log(Array);