let b1=document.getElementById("1");
b1.addEventListener("mouseover",function(){
let r=Math.floor(Math.random()*100);
b1.innerHTML=r;
});
b1.addEventListener("mouseout",function(){
b1.innerHTML="1";
});

let b2=document.getElementById("2");
let s="yelow";
b2.addEventListener("mouseover",function(){
    if(s=="yellow"){
        b2.style.backgroundColor=s;
        s="red";
    }
    else{
        b2.style.backgroundColor=s;
        s="yellow";
    }

});
b2.addEventListener("mouseout",function(){
    b2.style.backgroundColor="white";
});

let b3=document.getElementById("3");
b3.addEventListener("mouseover",function(){
let r1=Math.floor(Math.random()*256);
let r2=Math.floor(Math.random()*256);
let r3=Math.floor(Math.random()*256);
b3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
});
b3.addEventListener("mouseout",function(){
b3.style.backgroundColor="white";
});

let b4=document.getElementById("4");
b4.addEventListener("click",function(){
let r1=Math.floor(Math.random()*256);
let r2=Math.floor(Math.random()*256);
let r3=Math.floor(Math.random()*256);
b1.style.backgroundColor=`rgb(${0},${r2},${r3})`;
b2.style.backgroundColor=`rgb(${r2},${0},${r3})`;
b3.style.backgroundColor=`rgb(${0},${r1},${0})`;
});
b4.addEventListener("mouseout",function(){
b1.style.backgroundColor="white";
b2.style.backgroundColor="white";
b3.style.backgroundColor="white";
});