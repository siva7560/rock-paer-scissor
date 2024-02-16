let score= JSON.parse(localStorage.getItem('score')) ||
{
    win : 0,
    lose : 0,
    tie : 0,
  
};
let rock_image='<img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png" alt=""></img>';
let paper_image='<img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png" alt=""></img>';
let scissor_image='<img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png" alt=""></img>';
function reset(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    localStorage.removeItem('score');
       show();
}

show();
let result;
function game(user_move){
    let com_move=move();
   let image;
   let im;
   if(com_move === 'rock'){
    im=rock_image;
        
   }
   else if(com_move=== 'paper'){
    im=paper_image;
        
   }
   else if(com_move=== 'scissor'){
    im=scissor_image;
        
   }
    if(user_move === 'rock'){
        if(com_move === 'rock'){
            result='match tied';
            
        }
        if(com_move === 'paper'){
            result='you lose';
        }
        if(com_move === 'scissor'){
            result='you won';
        }
        image=rock_image;
    }
    else if(user_move === 'paper'){
        if(com_move === 'rock'){
            result='you won';
        }
        if(com_move === 'paper'){
            result='match tied';
        }
        if(com_move === 'scissor'){
            result='you lose';
        }
        image=paper_image;
    }
    else if(user_move === 'scissor'){
        if(com_move === 'rock'){
            result='you lose';
        }
        if(com_move === 'paper'){
            result='you won';
        }
        if(com_move === 'scissor'){
            result='match tied';
        }
        image=scissor_image;
    }
    if(result==='you won'){
        score.win++;
    }
   else  if(result==='you lose'){
        score.lose++;
    }
     else if(result==='match tied'){
        score.tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.result').innerHTML= result;
    document.querySelector('.moves').innerHTML=`your move : "${image}" . computer move : ${im}`;
   show();
   
}
 function show(){
    document.querySelector('.score').innerHTML=`win : ${score.win} , lose : ${score.lose} , Tie : ${score.tie}`;
  }
function move(){
   let num=Math.random();
   let com_move;
   if(num>=0 && num <1/3){
    com_move='rock';
   }
   else if(num>=1/3 && num <2/3){
    com_move='paper';
   }
   else if(num>=2/3 && num <1){
    com_move='scissor';
   }
 return com_move;
}
let isautoplay=false;
let id;
function autoplay(){
    if(!isautoplay){
    id=setInterval( function(){
        game(move());
    },1000);
isautoplay=true;
}
else{
    clearInterval(id);
    isautoplay=false;
}

}


      
