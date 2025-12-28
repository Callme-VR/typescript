// array declaration

const chaiflavour: string[] = ["msala", "green", "lassi"];

const chaiprice: number[] = [20, 25, 30];

const rating: Array<number> = [4, 5, 3];

type chia = {
  neme: string;
  price: number;
};
const menu: chia[] = [
  {
    neme: "msala",
    price: 20,
  },
  {
    neme: "green",
    price: 25,
  },
  {
    neme: "lassi",
    price: 30,
  },
];

const menu2: chia[] = [
  {
    neme: "msala",
    price: 20,
  },
  {
    neme: "green",
    price: 25,
  },
  {
    neme: "lassi",
    price: 30,
  },
];
// multidimenasinal array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// tuple array

let chaituple: [string, number, boolean][];

chaituple = [
  ["msala", 20, true],
  ["green", 25, true],
  ["lassi", 30, true],
];

// redaonly tuple array

const location: readonly [number, number] = [23.4, 45.3];

const chaiItems: [name: string, price: number, available: boolean][] = [
  ["msala", 20, true],
  ["green", 25, true],
  ["lassi", 30, true],
];

//

enum cupsize {
  small,
  large,
  medium,
}

const size = cupsize.small;

// enum autincreament

enum status {
  pending = 100,
  success,
  failed,
}
const status1 = status.pending;
