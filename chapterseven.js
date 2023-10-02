class Cat {
  static species = "felis catus";
  #isSleeping;
  paws = 4;
  sound = "meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }

  static herd() {
    throw new Error("You can't do that.");
  }
  play() {
    console.log(`Playing with ${this.favoriteToy}.`);
    this.#takeNap();
  }

  #takeNap() {
    this.#isSleeping = true;
  }
}

class Shorthair extends Cat {
  fur = "short";
  constructor(name, favoriteToy) {
    super(name, favoriteToy);
  }
}
