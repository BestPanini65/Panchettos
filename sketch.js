let chuteDeFrites = [];
let fritesAttrapees;
let objectifFrites;
let mode;

let rayonCercle;

function setup() {
  createCanvas(600, 850);
  
  imageMode(CENTER);
  arriereGobelet = loadImage("Gobelet.png");
  avantGobelet = loadImage("Devant.png");
  gobeletRempli = loadImage("Frites.png");
  
  sonette = loadSound('Sonette_de_comptoir.wav');
  
  gobelet = new container();
  logo = new gobeletDevant();
  
  fritesAttrapees = 0;
  rayonCercle=0;
  accelerationCercle = 20;
  objectifFrites = 10;
  mode = 0;
  
  motifCroustillant = loadImage("motif_Croustillant.png");
  motifFondant = loadImage("motif_Fondant.png");
  
  for (i=0; i<100; i++){
    chuteDeFrites[i] = new frite(i);
  }
}

function draw() {
  background('#EBAB7B');
  
  affichage();
  
  if (fritesAttrapees == objectifFrites){
    setup();
  }
  
  if (mode == 0){
    strokeWeight(3);
    stroke(255);
    fill(0,0,0,0);
    circle(width/2,height/2,rayonCercle);
    rayonCercle=rayonCercle+accelerationCercle;
    if (accelerationCercle > 1) {
      accelerationCercle = accelerationCercle -0.2;
    }
    image(gobeletRempli, width/2, height/2-100, gobeletRempli.width, gobeletRempli.height);
    
    if (keyIsPressed && key == "Enter"){
      fritesAttrapees=0;
      mode = 1;
    }
  }
  
  else {
    gobelet.afficher();
    gobelet.bouger();
  
    genererFrites();
  
    logo.dessiner();
    logo.bouger();
    
    
    gobelet.selectionner(true);
    logo.selectionner(true);
  }
}

function genererFrites(){
    for (i=0;i<chuteDeFrites.length;i++){
      if (chuteDeFrites[i].y > -200){
        chuteDeFrites[i].afficher();
        chuteDeFrites[i].suivre();
        if (keyIsPressed == false){
          chuteDeFrites[i].tomber();
        }
      }
      
      if (keyIsPressed && key == " "){
        chuteDeFrites[i].tomber();
      }
      
    }
}

function mousePressed(){
  gobelet.tempX = mouseX - gobelet.x;
  gobelet.tempY = mouseY - gobelet.y;   
  logo.tempX = mouseX - logo.x;
  logo.tempY = mouseY - logo.y;
}

function keyPressed(){
  if (keyIsPressed && key == " " && mode != 0){
    sonette.play();
  }
}