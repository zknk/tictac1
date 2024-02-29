const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let countA=0;//a==x
  let countB=0;
  const win=document.querySelectorAll('h2');
  const winA=win[0];
  const winB=win[1];
  
let turnO=true;///0 turn
const box=document.querySelectorAll('input');
const btn=document.querySelector('button');
const head=document.querySelector('h1');

box.forEach(element => {
  element.addEventListener('click',()=>{
    console.log('buton clicked');
    if(turnO){
      element.value="O";
      element
      turnO=false;
    }
    else{
      element.value="X";
      turnO=true;
    }
    element.disabled=true;
    checkWinner();
  });
});

const checkWinner= () => {
  for (let pattern of winPatterns){
    let op1=box[pattern[0]].value;
    let op2=box[pattern[1]].value;
    let op3=box[pattern[2]].value;
   
  if (op1!="" && op2!="" && op3!="") {
    if(op1===op2 && op2===op3){
      head.innerText="Winner is "+op1;
      if(op1==="X"){
        countA=countA+1;
        winA.innerText="A : "+countA;
      }
      else{
        countB=countB+1;
        winB.innerText="B : "+countB;
      }  
    }
  }
}
};

btn.addEventListener('click',()=>{
  box.forEach(element => {
    element.value="";
    element.disabled=false;
  });
})