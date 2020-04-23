
document.addEventListener("DOMContentLoaded",()=>{
  //alert("we golden")
let snakePatttern = [0];
console.log(snakePatttern)

let score = 1;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;
let dirction = 1;
let width = 50;
let val = Math.floor(Math.random()*2500);
document.getElementById("score").innerHTML = score;




  for(let i = 0; i<2500; i++){
    let block = document.createElement("div");
    block.setAttribute("class","block");
    block.setAttribute("id",i);
    document.getElementById("grid").append(block)
  }
function renderGrid(){
  for(let i = 0; i<2500; i++){

    document.getElementById(i).setAttribute("class","block");

  }
}
function renderSnake(){
  for(let k of snakePatttern){
    if(k == val){
      val = Math.floor(Math.random()*2500);
      document.getElementById(val).setAttribute("class","apple");
      score++;
      document.getElementById("score").innerHTML = score;
    }
  }
 if(snakePatttern.length>score){
   snakePatttern.shift();
 }
function renderApple(val){
    document.getElementById(val).setAttribute("class","apple");
  }

renderApple(val);
  for(let j of snakePatttern){
    if( j > 2499 || j < 0){
      alert("GAME OVER")
    }
    //console.log(j)
    document.getElementById(j).setAttribute("class","snake");
  }
}

renderSnake();



function control(e){
  if(e.keyCode == 39){
    direction = 1;
  }
  else if(e.keyCode == 38){
    direction = -width;
  }
  else if(e.keyCode == 37){
    direction = -1;
  }
  else if(e.keyCode == 40){
    direction = width;
  }
  setInterval(()=>{
    let dir = snakePatttern[snakePatttern.length-1]+direction;
    snakePatttern.push(dir);
    console.log(snakePatttern);
    //snakePatttern.shift();
    console.log(snakePatttern);
    renderGrid();
    renderSnake();
  },2000)
  }

document.addEventListener("keyup", control);

})
