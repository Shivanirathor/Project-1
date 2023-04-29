console.log("hii");
let obj = [
  {
    name: "Zika",
  },
  {
    name: "Alia",
  },
  {
    name: "Riya",
},
{
    name: "Shivani",
},
];
obj.sort((a,b)=>{
  if(a.name < b.name){
    return -1;
  }
  if(a.name > b.name){
    return 1;
  }
  return 0;
});

console.log(obj);


// let b = []
// console.log(b.sort())





// =======================
// sort, filter, reduce, map, includes

// let arr1 = ["mika", "alia", "ali", "shivani"]
// console.log(arr1.sort());
// const map = arr1.map((x)=>{
//   return x+123;
// })
// console.log(map)
// let a = [3,2,3,2,3]
// const result = a.filter((x)=>{
//    return x - 2; 
// })
// console.log(result)

// let b = [10,2,33,20,3]
// const map = b.map((x)=>{
//   return x*2;
// });
// console.log(map);



// let arr = ["mika", "alia", "ali", "shivani"]
// let givenName = "ali12";

// console.log(arr.includes((givenName)));



// =======
// const number = [1,2,"Afroj","shivani","shaily","harish","vishal",5,10];

// // const
// const numbers = [1,2,3,4,5,6];
// const sumnumbers = numbers.reduce((total, item) => total + item, 3); //hello is initial value
// console.log(sumnumbers);






