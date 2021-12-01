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
    
    this.lower = this.#y + (this.#height/2);
    this.higher = this.#y - (this.#height/2);
    this.left = this.#x - (this.#width/2);
    this.right = this.#x + (this.#width/2);
    console.log(this.lower);
   
  }
  
  show() {
    fill(50,50,50);
    rect(this.#x, this.#y, this.#width, this.#height);
  }

  boundaries() {
    return [this.lower, this.higher, this.left, this.right]
  }
  
}