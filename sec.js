
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let Started = false;
let level =0;

let h2= document.querySelector("H2");

document.addEventListener("keypress", function(){
//console.log("game started");
 if( Started == false){
    console.log("Game Started");
    Started=true;

    levelUp();

 }
});

function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function (){
        btn.classList.remove("Flash");
    }, 250 ); 
}
    function UserFlash(btn){
        btn.classList.add("UserFlash");
        setTimeout(function (){
            btn.classList.remove("UserFlash");
        }, 250 ); 



};
function levelUp(){
    userSeq =[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn)
    gameFlash(randBtn);
}

function checkAns(idx) {
//console.log("user level is:",level);
//let idx=level-1;
if(userSeq[idx]===gameSeq[idx]) {
   // console.log("same value")
   if(userSeq.length==gameSeq.length){
   setTimeout(levelUp,1000);
   }
}else{
    h2.innerHTML =`GameOVER! your score was<b> ${level}</b> </br> Press any key to start .`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },140 )
   reset();
 }
}




function btnPress() {
  // console.log(this);
    let btn=(this);
    //btnFlash(btn);
    UserFlash(btn);

    userColor=btn.getAttribute("id");
   // console.log(userColor)
  userSeq.push(userColor);

   checkAns(userSeq.length-1);


}

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
    btn.addEventListener("click",btnPress);


}
function reset() {
    Started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}