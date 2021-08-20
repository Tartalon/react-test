function button() {
  return "button";
}

class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }
  nextSlide() {
    console.log("Moving forward");
  }
  prevSlide() {
    console.log("Moving back");
  }
  whoAmI() {
    console.log(this.width, this.height, this.count);
  }
}
