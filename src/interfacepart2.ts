// interface and generics

// interface main goal is to give the  and shape face to data
// interface the  define object face and structure
// and dont genrate the code of javascript

interface chair {
  flaor: string;
  price: number;
  milk?: boolean; // optional property
}

const masalchai: chair = {
  flaor: "masala",
  price: 50,
};

interface pen {
  readonly id: number;
  color: string;
}
const useofpen: pen = {
  id: 1,
  color: "blue",
};

// useofpen.id=3
// didt change because of readnoly property

interface duscountcal {
  (price: number): number /*it only  method defination of it*/;
}
type DiscountCalc = (price: number) => number;

const calculate: DiscountCalc = (price) => price * 0.3;

interface t {
  start(): void;
  stop(): void;
}

const machine: t = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface chairating {
  [flavou: string]: number;
}

const rating: chairating = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}
interface user {
  age: number;
}

const getin: User = { name: "visj" };

// interface A {
//   a: string;
// }
// interface B {
//   b: string;
// }


// interface c extends A,B{
// }

// we define it by using explicit usage and 