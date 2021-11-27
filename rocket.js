class rocket {
  constructor(directions, lifespan, champion) {
    this.directions = directions;
    this.lifespan = lifespan;
    this.x = 0;
    this.y = 0;
    this.champion = champion
    this.crashed = false
  }
  
  
  drawrock() {
    if (this.champion == true) {
      fill(100,204,100);
      rect(0,0,10,20);
    } else {
      fill(255, 204, 100);
      rect(0,0,10,20);
    }
  }
  
  wallCrash() {
    if (this.y > 30 || this.x >width/2 || this.x < -width/2 || this.y < -height+30) {
      this.crashed = true;
    }
    
  }
  
  collide(obstacle) {
    if (this.y < obstacle.lower && this.x >obstacle.left && this.x < obstacle.right && this.y > obstacle.higher) {
      this.crashed = true;
    }
    
  }
   
  move(count) {
    
    var c = this.directions[count];
    this.x -= c.x;
    this.y -= c.y;
    translate(this.x,this.y);
    rotate(c.heading()-90);
    
    
  }
  
}
