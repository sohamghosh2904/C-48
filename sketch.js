const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var canvas;
var terrorist1;
var terrorist2;
var terrorist3;
var terrorist4;
var terrorist5;
var terroristImg;
var soldier1;
var soldier2;
var soldier3;
var soldierImg;

var terroristLeft=0;
var backgroundImg;
var bullet1;
var bulletImage;
var scene;
var bulletGroup;
var bullet2;
var enemyGroup;
var bulletGroup2;
var edges;
var bullet2Image;
var bullet3;
var bullet4;
var bullet5;
var bullet6;
var lives=2;
var gunSound;
var bulletGroup3;




function preload(){
backgroundImg=loadImage("bg.jpg");
terroristImg=loadImage("terrorist.jpg");
soldierImg=loadImage("soldier1.jpg");
bulletImage=loadImage("bullet2.png");
bullet2Image=loadImage("bullet1.jpg");
gunSound=loadSound("sound.mp3");


}


function setup() {
canvas=createCanvas(displayWidth-100,displayHeight-170);


engine=Engine.create();
world=engine.world;

terrorist1=createSprite(200,500,20,20);
terrorist1.addImage(terroristImg);
terrorist1.scale=0.1;

terrorist2=createSprite(200,200,20,20);
terrorist2.addImage(terroristImg);
terrorist2.scale=0.1;

terrorist3=createSprite(100,350,20,20);
terrorist3.addImage(terroristImg);
terrorist3.scale=0.1;

terrorist4=createSprite(400,150,20,20);
terrorist4.addImage(terroristImg);
terrorist4.scale=0.1;

terrorist5=createSprite(400,350,20,20);
terrorist5.addImage(terroristImg);
terrorist5.scale=0.1;

soldier1=createSprite(1100,300,20,20);
soldier1.addImage(soldierImg);
soldier1.scale=0.15;



bulletGroup=new Group();
bulletGroup2=new Group();
bulletGroup3=new Group();

}

function draw() {

background(backgroundImg); 
soldier1.velocityY=0;

Engine.update(engine);

if(keyDown("space")){
createBullet();
gunSound.play();
}

if(keyDown("s")){
    createBullet7();
    gunSound.play();
    }

if(keyDown("A")){
createBullet2();
gunSound.play();
}

if(keyDown("B")){
createBullet3()
gunSound.play();
}

if(keyDown("C")){
createBullet4();
gunSound.play();
}

if(keyDown("D")){
createBullet5();
gunSound.play();
}

if(keyDown("E")){
createBullet6();
gunSound.play();
}




if(keyDown("UP_ARROW")){
soldier1.velocityY=-3;
soldier1.velocityX=0;
//soldier2.velocityY=-3;
//soldier2.velocityX=0;


}

if(keyDown("DOWN_ARROW")){
soldier1.velocityY=3;
soldier1.velocityX=0;
}

if(keyDown("O")){
soldier2.velocityY=-3;
soldier2.velocityX=0;
}

if(keyDown("P")){
soldier2.velocityY=3;
soldier2.velocityX=0;
    }



fill("red");
textSize(15);
text("Terrorists Killed ="+terroristLeft,100,50);

fill("red");
textSize(15);
text("Lives left ="+lives,1000,55);

fill("green");
textSize(35);
text("Army Escape",500,100);



if(bulletGroup.isTouching(terrorist1)){
terrorist1.destroy();
terroristLeft=terroristLeft+1;
}

if(bulletGroup.isTouching(terrorist2)){
terrorist2.destroy();
terroristLeft=terroristLeft+1;
}

if(bulletGroup.isTouching(terrorist3)){
terrorist3.destroy();
terroristLeft=terroristLeft+1;
}

if(bulletGroup.isTouching(terrorist4)){
terrorist4.destroy();
terroristLeft=terroristLeft+1;
}

if(bulletGroup.isTouching(terrorist5)){
terrorist5.destroy();
terroristLeft=terroristLeft+1;
}

if(bulletGroup2.isTouching(soldier1)){
soldier1.destroy();


//soldier1.visible=false;
textSize(50);
stroke("yellow");
fill("red");
text("Game Resetting ",1000,200); 
reset2();
lives=lives- 1;
}

//if(bulletGroup2.isTouching(soldier2)){
//soldier2.destroy();
//soldier1.visible=false;
//textSize(50);
//stroke("yellow");
//fill("red");
//text("Game Resetting ",1000,200); 
//reset3();
//}


edges=createEdgeSprites();
soldier1.bounceOff(edges);
//soldier2.bounceOff(edges);
//soldier3.bounceOff(edges);
drawSprites();
}

function createBullet(){
bullet1=createSprite(10,200,40,20);
bullet1.addImage(bulletImage);
bullet1.scale=0.02;
bullet1.x=displayWidth-350;
bullet1.y=soldier1.y;
bullet1.velocityX=-10;
bullet1.lifetime=100;
bulletGroup.add(bullet1);

}

function createBullet2(){
bullet2=createSprite(10,200,40,20);
bullet2.addImage(bullet2Image);
bullet2.scale=0.02;
bullet2.x=terrorist1.x;
bullet2.y=terrorist1.y;
bullet2.velocityX=10;
bullet2.lifetime=100;
bulletGroup2.add(bullet2);
  
}

function createBullet3(){
bullet3=createSprite(10,200,40,20);
bullet3.addImage(bullet2Image);
bullet3.scale=0.02;
bullet3.x=terrorist2.x;
bullet3.y=terrorist2.y;
bullet3.velocityX=10;
bullet3.lifetime=100;
bulletGroup2.add(bullet3);
      
    }

    function createBullet4(){
    bullet4=createSprite(10,200,40,20);
    bullet4.addImage(bullet2Image);
    bullet4.scale=0.02;
    bullet4.x=terrorist3.x;
    bullet4.y=terrorist3.y;
    bullet4.velocityX=10;
    bullet4.lifetime=100;
    bulletGroup2.add(bullet4);
          
    }

    function createBullet5(){
        bullet5=createSprite(10,200,40,20);
        bullet5.addImage(bullet2Image);
        bullet5.scale=0.02;
        bullet5.x=terrorist4.x;
        bullet5.y=terrorist4.y;
        bullet5.velocityX=10;
        bullet5.lifetime=100;
        bulletGroup2.add(bullet5);
              
        }

        function createBullet6(){
            bullet6=createSprite(10,200,40,20);
            bullet6.addImage(bullet2Image);
            bullet6.scale=0.02;
            bullet6.x=terrorist5.x;
            bullet6.y=terrorist5.y;
            bullet6.velocityX=10;
            bullet6.lifetime=100;
            bulletGroup2.add(bullet6);
                  
            }
    
            function createBullet7(){
                bullet7=createSprite(10,200,40,20);
                bullet7.addImage(bulletImage);
                bullet7.scale=0.02;
                bullet7.x=displayWidth-350;
                bullet7.y=soldier2.y;
                bullet7.velocityX=-10;
                bullet7.lifetime=100;
                bulletGroup3.add(bullet7);
                
                }


     function reset(){
   // soldier1.velocityX=0;
   // soldier1.velocityY=0;
    soldier1.x=1100;
    soldier1.y=300;
    
     }

     function reset2(){
        soldier2=createSprite(1100,600,20,20);
        soldier2.addImage(soldierImg);
        soldier2.scale=0.15;
        soldier2.visible=true;

   
        
        
         }

    function reset3(){
    soldier3=createSprite(1100,600,20,20);
    soldier3.addImage(soldierImg);
    soldier3.scale=0.15;
    soldier3.visible=true;
        
    
    }

    



function createEnemies(){
enemyGroup.add(terrorist1);
enemyGroup.add(terrorist2);
enemyGroup.add(terrorist3);
enemyGroup.add(terrorist4);
enemyGroup.add(terrorist5);

}

