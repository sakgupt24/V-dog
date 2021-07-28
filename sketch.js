//Create variables here
var dog, happydog, database, foods, foodStock, dogImg


function preload(){
  dogImg=loadImage("images/Dog.png")
}

function setup() {
  database=firebase.database
	createCanvas(500,500);
    dog=creatSprite(250,250,20,20)
    dog.addImage(dogImg)
    foodStock=database.ref('food');
    foodStock.on("value" , readStock)
}


function draw() {  
background("46, 139, 87");

if (KeyDown(UP_ARROW)) {
  writeStock(food5)
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here

}
