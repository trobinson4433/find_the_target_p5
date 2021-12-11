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
    this.rockets = new rocket(this.directions);
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
  
  mutation(frequency) {
    for (var i =0; i < this.lifespan; i++) {
      if (random() < frequency) {
        this.directions[i] = createVector(random(-1,1),random(-1,1)).setMag(8);
      }
    }
  }
 
  
  howFit(target) {
    targx= target.getTargetCenterX();
    targy = target.getTargetCenterY();
    var d = dist(this.rockets.x, this.rockets.y, targx, targy);
    this.fitness = map(d, 0, width, width, 0);
    
    if (this.complete == true) {
      this.fitness *= 10
    }

    if (this.crashed == true) {
      this.fitness /= 100
    }

  }
  
  timeFit(target) {
    var targx = target.getTargetCenterX();
    var targy = target.getTargetCenterY();
    //console.log(targx)
    var d = dist(this.rockets.x, this.rockets.y, targx, targy);
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
