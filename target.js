class target {
  #x
  #y
  constructor(x, y){
    this.#x = x;
    this.#y = y;
  }
 drawtarg() {
   fill(155,50,0);
   ellipse(this.#x, this.#y, 20, 20);
 }

 getTargetCenterX() {
   //console.log(this.#x);
   return this.#x;
 }

 getTargetCenterY() {
   //console.log(this.#y)
   return this.#y
 }
}