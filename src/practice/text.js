console.log("hii");
let obj = [
  {
    name: "Mika",
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
    return (a.name - b.name);
});
obj.forEach((e)=>{
    console.log(`${e.name}`)
})


// let b = ["mika", "alia", "ali", "shivani"]
// console.log(b.sort())


