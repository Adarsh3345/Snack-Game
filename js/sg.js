let inputDir={x: 0,y: 0};
const foodsound=new Audio('food.mp3');
const gameoversound=new Audio('gameover.mp3');
const movesound=new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let score=0;
let highscore=0;
let speed=5;
let lastPaintTime=0;


if(window.matchMedia("(max-width: 480px)").matches){
    snakearr=[
        {x: 7 , y: 8}
    ]
    food={x: 3 , y: 6};
}
else{
    snakearr=[
        {x: 13 , y: 15}
    ]
    food={x: 6 , y: 7};
}
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){ //
        return;                                //
    }                                         //
    lastPaintTime=ctime;
    gameEngine();
}



function isCollide(sarr){
    
    for (let i = 1; i < snakearr.length; i++) {
        //snake collide with itself
        if(snakearr[i].x === snakearr[0].x && snakearr[i].y === snakearr[0].y){
            return true;
        }
    }

        //if snake collide to wall
        

        if(window.matchMedia("(max-width: 480px)").matches){
            if(snakearr[0].x >= 12 || snakearr[0].x <= 0 || snakearr[0].y >= 16 || snakearr[0].y <= 0){
                return true;
            }
        }
        else{
            if(snakearr[0].x >= 20 || snakearr[0].x <= 0 || snakearr[0].y >= 20 || snakearr[0].y <= 0){
                return true;
            }
        }

    
}


function gameEngine(){
   if(isCollide(snakearr)){
      gameoversound.play();
      musicsound.pause();
      inputDir={x: 0,y: 0};
      alert("Game Over. Press any key to play again!");
      highscore=Math.max(score,highscore);
      highscorebox.innerHTML="HIGHSCORE:"+highscore;
      score=0;
      scorebox.innerHTML="SCORE:0";
      speed=5;
      
      if(window.matchMedia("(max-width: 480px)").matches){
        snakearr=[{x: 7 , y: 8}]
    }
    else{
        snakearr=[{x: 13 , y: 15}];
    }
      musicsound.play();
      score=0;
   }

   if(snakearr[0].y === food.y && snakearr[0].x === food.x){
    score+= 1;
    scorebox.innerHTML="SCORE:" + score;
    if(score <= 10){
        speed=5 ;
    }
    else if(score >= 11 && score <= 20){
        speed=8;
    }
    else if(score >= 21 && score <= 30){
        speed=14;
    }
    else if(score <= 31){
        speed=20;
    }
   
    foodsound.play();
      snakearr.unshift({x:snakearr[0].x + inputDir.x, y:snakearr[0].y + inputDir.y });
      
      if(window.matchMedia("(max-width: 480px)").matches){
        let a=3;
        let b=10;
        food={x:Math.round(a + (b - a)* Math.random()), y:Math.round(a + (b - a)* Math.random())}
        console.log(food);
      }
      else{
        let a=3;
        let b=17;
        food={x:Math.round(a + (b - a)* Math.random()), y:Math.round(a + (b - a)* Math.random())}
      }
   }

   //move
   for (let i = snakearr.length - 2; i>=0; i--) {
    snakearr[i+1]={...snakearr[i]}; //now reference problem
   }
   
   snakearr[0].x+=inputDir.x;
   snakearr[0].y+=inputDir.y;


    board.innerHTML="";
    //snake
    snakearr.forEach((e,index)=> {
       let snackElement = document.createElement('div');
       snackElement.style.gridRowStart=e.y;
       snackElement.style.gridColumnStart=e.x;
       
       if(index === 0){
        snackElement.classList.add('head');
       }
       else{
        snackElement.classList.add('snack');
       }
       board.appendChild(snackElement);
    })
    //food
    foodElement = document.createElement('div');
       foodElement.style.gridRowStart=food.y;
       foodElement.style.gridColumnStart=food.x;
       foodElement.classList.add('food');
       board.appendChild(foodElement);
}







if(window.matchMedia("(max-width: 480px)").matches){
    window.requestAnimationFrame(main)

    window.addEventListener('touchmove',e =>{
        inputDir={x:0,y:1}
        movesound.play();
        switch(e.key){
            case "swipe up":
                // console.log("ArrowUp")
                musicsound.play();
                inputDir.x= 0;
                inputDir.y= -1;
                break;
    
            case "swipe down":
                // console.log("ArrowDown")
                musicsound.play();
                inputDir.x= 0;
                inputDir.y= 1;
                break;
    
            case "swipe left":
                // console.log("ArrowLeft")
                musicsound.play();
                inputDir.x= -1;
                inputDir.y= 0;
                break;
    
            case "swipe right":
                // console.log("ArrowRight")
                musicsound.play();
                inputDir.x= 1;
                inputDir.y= 0;
                break;
    
            default:
                break;    
        }
    })
  }

  
  else{
    window.requestAnimationFrame(main)

    window.addEventListener('keydown',e =>{
        inputDir={x:0,y:1}
        movesound.play();
        switch(e.key){
            case "ArrowUp":
                // console.log("ArrowUp")
                musicsound.play();
                inputDir.x= 0;
                inputDir.y= -1;
                break;
    
            case "ArrowDown":
                // console.log("ArrowDown")
                musicsound.play();
                inputDir.x= 0;
                inputDir.y= 1;
                break;
    
            case "ArrowLeft":
                // console.log("ArrowLeft")
                musicsound.play();
                inputDir.x= -1;
                inputDir.y= 0;
                break;
    
            case "ArrowRight":
                // console.log("ArrowRight")
                musicsound.play();
                inputDir.x= 1;
                inputDir.y= 0;
                break;
    
            default:
                break;    
        }
    })
  }






