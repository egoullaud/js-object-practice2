const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  }
};

bird.eat = function () {
  if (this.hungerScale === 0) {
    console.log(`${name} is not hungry.`);
  } else if (this.hungerScale !== 0) {
    this.hungerScale -= 1;
    console.log(`omnomnomnom!`);
  }
};

bird.eat();
console.log(bird.isHappy());
