class rocket {
  #directions
  #x
  #y
  #champion
  #crashed
  constructor(directions, champion) {
    this.#directions = directions;
    this.x = 0;
    this.y = 0;
    this.champion = champion
    this.#crashed = false
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
      this.#crashed = true;
    }
    
  }
  
  collide(obstacle) {
    var boundary = obstacle.boundaries()
    if (this.y < boundary[0] && this.x > boundary[2] && this.x < boundary[3] && this.y > boundary[1]) {
      this.#crashed = true;
    }
    
  }
   
  move(count) {
    
    var c = this.#directions[count];
    this.x -= c.x;
    this.y -= c.y;
    translate(this.x,this.y);
    rotate(c.heading()-90); 
  }

  hasCrashed() {
    return this.#crashed
  }
  
}
