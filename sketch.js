var canvas;
var music;
var fixedRect1,fixedRect2,fixedRect3,fixedRect4;
var jb;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    fixedRect1 = createSprite(100,580,80,30);
    fixedRect1.shapeColor="blue";
    fixedRect2 = createSprite(200,580,80,30);
    fixedRect2.shapeColor="red";
    fixedRect3 = createSprite(300,580,80,30);
    fixedRect3.shapeColor="green";
    fixedRect4 = createSprite(400,580,80,30);
    fixedRect4.shapeColor="pink";
    jb = createSprite(200,200,20,20);
    jb.shapeColor ="white";

    //create 4 different surfaces



    //create box sprite and give velocity
    jb.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    if(jb.isTouching(fixedRect1)){
        jb.shapeColor = "red";
    }

    if(fixedRect2.isTouching(jb)){
        jb.shapeColor = "red";
        jb.velocityX = 0;
        music.stop();
        jb.bounceOff(fixedRect2);
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
