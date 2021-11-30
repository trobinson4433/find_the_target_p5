class generation {
  constructor(population, lifespan) {
    this.population = population;
    this.lifespan = lifespan
    var astros = [];
    this.astros = astros
    this.count = 0;
    var matingPool = new pool();
    var temptarg = new target(0,-300);
    var tempobs = new obstacle(0,-150,300,30);
    this.tempobs = tempobs
    this.matingPool = matingPool;
    this.temptarg = temptarg;
    this.targx = this.temptarg.getTargetCenterX();
    this.targy = this.temptarg.getTargetCenterY();
    this.fastest = lifespan
    this.champion =0
    this.maxFit = 0
    this.averagefitness = 0;
  }
  
  populate() {
    for (var i = 0; i < this.population; i++) {
      this.astros[i] = new astronaut(this.lifespan, []);
    }
  }
  
  update() {
    if (this.count < this.lifespan) {
      for (var i = 0; i< this.population; i++) {
        if (this.astros[i].complete == false && this.astros[i].rockets.crashed == false) {
          push();
          this.astros[i].rockets.move(this.count);
          this.astros[i].rockets.drawrock();
          pop();
          this.astros[i].rockets.collide(this.tempobs)
          this.astros[i].rockets.wallCrash();
          if (dist(this.astros[i].rockets.x, this.astros[i].rockets.y, this.targx, this.targy) < 15) {
            this.astros[i].complete = true;
            this.astros[i].time = this.count;
            if (this.astros[i].time < this.fastest) {
              this.fastest = this.astros[i].time;
              //this.champion = this.astros[i].directions
              console.log(this.fastest);
            }
          }
        } else {
          push();
          translate(this.astros[i].rockets.x,this.astros[i].rockets.y);
          this.astros[i].rockets.drawrock();
          pop();
        }
      }
      this.count++; 
      
    } else {
      this.count = 0;
      for (var i = 0; i < this.population; i++) {
        //this.astros[i].howFit(this.temptarg);
        this.astros[i].timeFit(this.temptarg);
        if (this.astros[i].fitness > this.maxFit) {
          this.champion = this.astros[i].directions;
          this.maxFit = this.astros[i].fitness
        }
        this.matingPool.OnlytheBestSurvive(this.astros)
        this.matingPool.addToPool(this.astros[i], this.averagefitness);
      }
      
      for (var j = 0; j < this.population; j++) {
        var baby = this.astros[j].breed(random(this.matingPool.mates));
        baby.mutation(0.01);
        this.astros[j] = baby
      }
      if (this.champion != 0) {
        this.astros[this.population-1] = new astronaut(this.lifespan, this.champion, true);
      }
      this.matingPool.cleanse();
      
    }
  }
  
    
}
