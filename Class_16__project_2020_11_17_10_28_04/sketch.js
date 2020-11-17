var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var banana,bananaImg;
var r;
var bananaGroup,obstaclesGroup;
var obstacle,obstacleImg;
var m;
var survivalTime = 0;
var score = 0;
var bGroundImg,bGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  bananaImg = loadImage("banana.png");
  
  obstacleImg = loadImage("obstacle.png");
  
  bGroundImg = loadImage("jungle.jpg");
  
  
 
}



function setup() {
  createCanvas(600,400);
  background("white");
  
  bGround = createSprite(500,100,1200,600);
  bGround.addImage("bGround",bGroundImg);
  bGround.x = bGround.width/2;
  bGround.velocityX = -2;
  
  monkey=createSprite(200,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  ground.visible = false;

  bananaGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("white");
  

  if(bGround.x < 100)
    {
      bGround.x = bGround.width/2;
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score,500,60);
  
  
    
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 if(keyDown("space") && monkey.y >=314.3) {
        monkey.velocityY = -12;
          
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.7;
  console.log(monkey.y);
  
  if(bananaGroup.isTouching(monkey))
    {
      score = score + 2;
      bananaGroup.destroyEach();
    }
  
  if(obstaclesGroup.isTouching(monkey))
    {
      monkey.scale = 0.1;
    }
  
  fruits();
  obstacles();
  
  monkey.collide(ground);
  drawSprites();
  
  switch(score)
    {
      case 10: monkey.scale = 0.2;
        break;
        
      case 20: monkey.scale = 0.4;
        break;
        
      case 30: monkey.scale = 0.6;
        break;
        
      case 40: monkey.scale = 0.8;
        break;
        
      default : break;  
        
}
}
function fruits()
{
  r = Math.round(random(120,200));
  
  if(frameCount%80 == 0)
    {
      banana  = createSprite(600,r,20,20);
      banana.velocityX = -3
      banana.lifetime = 200;
      banana.scale = 0.1;
      banana.addImage(bananaImg);
      bananaGroup.add(banana);
    }
}

function obstacles()
{
  if(frameCount%300 == 0)
    {
      obstacle = createSprite(600,320,10,10);
      obstacle.addImage(obstacleImg);
      obstacle.scale = 0.1;
      obstacle.velocityX = -5;
      obstaclesGroup.add(obstacle);
    }
}

