

let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];

 let  started=false;
 let level=0;
 let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
     btn.classList.remove("flash")  ; 
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function()  {
     btn.classList.remove("userflash")  ; 
    }, 250);
}
function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    //random btn choose;
    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let ranBtn = documnet.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    /*console.log(ranIdx);
    console.log(randColor);
    console.log(ranBtn);*/
   gameflash(ranBtn);
    }
    function checkAns(idx){
        //console.log("curr level:",level);
        if(userSeq[idx]==gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelup,1000);
           
            }
        }else{
            h2.innerText.html=`Game Over! your score was <b>${level}</b><br> Press any key to start ${level}`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";

            },150)
            reset();
        }
        
    }
    function btnPress(){
       // console.log(this);
        let btn = this;
        userflash(btn);
        userColor=btn.getAttribute("id");
        console.log(userColor);
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    }
    let allBtns=document.querySelectorAll(".btn")
        for(btn of allBtns){
            btn.addEventListener("click",btnPress);
        }
        function reset(){
            started=false;
            gameSeq=[];
            userSeq=[];
            level=0;


        }
    
   