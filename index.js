let guess=null

let display=document.getElementsByTagName('p')[0]

function set1(){
    guess=1;
}
function set2(){
    guess=2;
}
function set3(){
    guess=3;
}
function set4(){
    guess=4;
}
function set5(){
    guess=5;
}
function set6(){
    guess=6;
}
function set7(){
    guess=7;
}
function set8(){
    guess=8;
}
function set9(){
    guess=9;
}

function check(){
    let ran=parseInt(Math.random()*10)
    if(guess==ran){
        display.innerHTML="You are right"
    }
    else{
        display.innerHTML='You are wrong'
    }
}

