class chai {
  flavou: string;
  price: number;

  // declare constructor

  constructor(flavou: string, price: number) {
    this.flavou = flavou;
    this.price = price;
  }
}
const maslachai = new chai("msala", 20);

// what this is refers here

// access modifier
// public,privete,protected

class chai2 {
  public flavou: string = "malsa";
  private price: number = 20;
}

// static in typescript
class Ekchai {
  static flaour = "chaicode caffe";
  constructor(public flaour: string) {}
}
console.log(Ekchai.flaour);

// abstract classes

abstract class drikn {
  abstract make(): void;
}

class mydrink extends drikn {
  make() {
    console.log("make a drink");
  }
}
