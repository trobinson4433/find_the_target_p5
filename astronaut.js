class astronaut {
  constructor(lifespan, directions, champion=false) {
    this.lifespan = lifespan;
    this.directions = directions;
    this.fitness = 0;
    this.complete = false;
    this.crashed = false;
    this.time = 0;
    this.champion = champion;
    
    
    if (this.directions.length === 0) {
      for (var i = 0; i<lifespan; i++) {
        this.directions.push(createVector(random(-1,1),random(-1,1)).setMag(8));
    }
    }
    this.rockets = new rocket(this.directions, this.lifespan,this.champion);
  }
  
  
  breed(astroB) {
    var newDirections = [];
    for (var i = 0; i < this.lifespan; i++) {
      if (random() < 0.5) {
        newDirections.push(this.directions[newDirections.length])
      } else {
        newDirections.push(astroB.directions[newDirections.length])
      }
    }
    var babyAstro = new astronaut(this.lifespan, newDirections);
    return babyAstro;
  }
  
  mutation() {
    for (var i =0; i < this.lifespan; i++) {
      if (random() < 0.01) {
        this.directions[i] = createVector(random(-1,1),random(-1,1)).setMag(8);
      }
    }
  }
 
  
  howFit(target) {
    var d = dist(this.rockets.x, this.rockets.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);
    
    if (this.complete == true) {
      this.fitness *= 10
    }

    if (this.crashed == true) {
      this.fitness /= 100
    }

  }
  
    timeFit(target) {
    var d = dist(this.rockets.x, this.rockets.y, target.x, target.y);
    //this.fitness = 1000/(d**2);
    this.fitness = map(d, 0, width, width, 0);
    if (this.complete == true) {
      this.fitness *= 10 * (this.lifespan - this.time);
    }
    if (this.rockets.crashed == true) {
      this.fitness = (this.fitness/2) 
    }
  }
}
