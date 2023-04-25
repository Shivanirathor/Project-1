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


// let b = ["mika", "alia", "ali", "shivani"]
// console.log(b.sort())


