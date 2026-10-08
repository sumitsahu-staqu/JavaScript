const API="https://api.github.com/users/akshaymarch7";
async function getData(){
try{
const data=await fetch(API);;
const res= await data.json();
console.log(res);
}
catch(err){
console.log(err.message);
}
}
getData();