class obstacle {
  #x
  #y
  #width
  #height
  constructor(x,y,width,height){
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    
    //this.lower = this.#y + (this.#height/2);
    //this.higher = this.#y - (this.#height/2);
    //this.left = this.#x - (this.#width/2);
    //this.right = this.#x + (this.#width/2);
    
   
  }
  
  show() {
    fill(50,50,50);
    rect(this.#x, this.#y, this.#width, this.#height);
  }

  boundaries() {
    var lower = this.#y + (this.#height/2);
    var higher = this.#y - (this.#height/2);
    var left = this.#x - (this.#width/2);
    var right = this.#x + (this.#width/2);
    return [lower, higher, left, right]
  }
  
}