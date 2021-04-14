class Pet {
    constructor(){
    this.petStock=0;
    this.image=loadImage('Dog.png');
    }

   updateFoodStock(petStock){
    this.petStock=petStock;
   }

 

  

    getpetStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.petStock!=0){
        for(var i=0;i<this.petStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}
