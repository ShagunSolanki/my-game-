
var player1,player1img;
var cloud;

function preload() {
   player1img = loadAnimation("girl.gif");
   cloudimg = loadImage("cloud.png")
}

function setup(){
    var canvas = createCanvas(1200,400);

    player1 = createSprite(600,350,50,50);
    player1.addAnimation("walking",player1img);
player1.scale = 0.4
    cloudsGroup = new Group();



    
}

function draw(){
    background(0);


    spawnClouds();
    selectalphapbets();
    drawSprites();

}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      cloud = createSprite(1200,120,30,50);
      cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudimg)
      cloud.scale = 0.2;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 400;
      
      
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }

  function selectalphapbets(){
      var rand = Math.round(random(1,26));
      if (frameCount % 80 === 0) {
          textSize(30)
          fill("white");
          console.log(rand)
          if(rand === 1){
              text("A", 600,200);
          }
          if(rand === 2){
            text("B", 600,200);
        }
        if(rand === 3){
            text("C", 600,200);
        }
        if(rand === 4){
            text("D", 600,200);
        }
        if(rand === 5){
            text("E", 600,200);
        }
  }
}

