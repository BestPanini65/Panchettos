class container{
  constructor(){
    this.w = 297;
    this.h = 370;
    this.epaisseur = 3;
    this.x = width/2;
    this.y = height/2-28;
    this.tempX = 0;
    this.tempY = 0;
    this.selection = false;
  }
  
  afficher(){
    fill(255,0,0);
    strokeWeight(this.epaisseur);
    image(arriereGobelet, this.x, this.y, this.w, this.h);
  }
  
  selectionner(selectionnable){
    if (mouseIsPressed && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 && mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && selectionnable){
      this.selection=true;
    }
    
    if (mouseIsPressed == false){
      this.x = width/2;
      this.y = height/2-28;
    }
  }
  
  bouger(){
    if (this.selection == true && mouseIsPressed){
      this.x = mouseX - this.tempX;
      this.y = mouseY - this.tempY;
    }
    
    else {
      this.selection = 0;
    }
  }
}

class gobeletDevant extends container {
  constructor(){
    super();
  }
  dessiner(){
    image(avantGobelet, this.x, this.y, this.w, this.h);
  }
  
  selectionner(selectionnable){
    if (mouseIsPressed && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 && mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && selectionnable){
      this.selection=true;
    }
    
    if (mouseIsPressed == false){
      this.x = width/2;
      this.y = height/2-28;
    }
  }
  
  bouger(){
    if (this.selection == true && mouseIsPressed){
      this.x = mouseX - this.tempX;
      this.y = mouseY - this.tempY;
    }
    
    else {
      this.selection = 0;
    }
  }
  
}

class frite {
  constructor(diffY){
    this.diffY = diffY;
    this.taille = int(random(300,350));
    this.x = random(width/2-150, width/2+150);
    this.y = -300-this.diffY*200;
    this.vitesse = 10;
    this.attrapee = 0;
    
    this.xTemp = 0;
    this.yTemp = 0;
  }
  
  afficher(){
    strokeWeight(3);
    stroke(212,201,75);
    fill(212,201,75);
    rect(this.x, this.y,this.taille/7,this.taille);
    fill(239,231,84);
    noStroke();
    rect(this.x, this.y,this.taille/10,this.taille);
  }
  
  tomber(){
    this.y = this.y + this.vitesse
    
    if (this.y + this.taille/2 + 50 >= gobelet.y && this.y + this.taille/2 - 50 <= gobelet.y && this.x > gobelet.x - 120 && this.x < gobelet.x + 60 && this.vitesse != 0){
      fritesAttrapees++;
    }
    
    if (this.y + this.taille/2 + 50 >= gobelet.y && this.y + this.taille/2 - 50 <= gobelet.y && this.x > gobelet.x - 120 && this.x < gobelet.x + 60){
      this.attrapee = 1;
      this.xTemp = gobelet.x - this.x;
      this.yTemp = gobelet.y - this.y;
    }
  }
  
  suivre(){
    if (this.attrapee == 1){
      this.vitesse = 0;
      this.x = gobelet.x - this.xTemp;
      this.y = gobelet.y - this.yTemp;
    }
  }
}

function affichage(){
  image(motifCroustillant, 300, 725, 160, 25);
  image(motifFondant, 465, 699, 144, 98);

  noStroke();
  
  fill(0);
  textFont("Impact");
  textStyle(NORMAL);
  textSize(38);
  text('Croque les frites à pleine dents', 55, 670);

  textSize(26);
  textFont("Berlin Sans FB");
  text('Avec notre menu : ', 20, 710);

  fill(223, 128, 43); //243, 158, 73
  textStyle(BOLD);
  text('Croustillant', 225, 710);

  fill(0);
  textStyle(NORMAL);
  text('&', 385, 710);

  fill(239, 231, 84); //239, 231, 84
  textStyle(BOLD);
  text('Fondant', 415, 710);

  fill(0);
  textFont("Myriad Pro");
  textStyle(NORMAL);
  textSize(16);
  text('KROBAB, 1082 Avenue des Aleds', 353, 820);
  text('tel : xx.xx.xx.xx.xx', 455, 832);
}