class target {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
 drawtarg() {
   fill(155,50,0);
   ellipse(this.x, this.y, 20, 20);
 }
}