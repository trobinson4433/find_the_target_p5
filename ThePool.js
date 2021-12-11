class pool {
  #mates
  constructor() {
    this.#mates = [];
  }
  
  cleanse() {
    this.#mates = [];
  }
  
  OnlytheBestSurvive(astros) {
    var totalFitness = 0;
    for (var i = 0; i<astros.length; i++) {
      totalFitness += astros[i].fitness 
    }
    gen.averagefitness = totalFitness/astros.length
  }

  addToPool(astro, averageFitness) {
    if (astro.fitness >= averageFitness) {
      var duplicates = 1 + floor(astro.fitness);
      for (var i = 0; i < duplicates; i++) {
        this.#mates.push(astro);
      }
    }
  }

  getMates() {
    return this.#mates
  }


}
