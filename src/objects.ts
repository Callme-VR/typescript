const chai = {
  name: "masalachai",
  price: 20,
  ishot: true,
};

// declare the object type
// type chai

let tea: {
  name: string;
  price: number;
  ishot: boolean;
};
tea = {
  name: "green tea",
  price: 20,
  ishot: true,
};

// alias object
// resume datatype  in the alias

type teas = {
  name: string;
  price: number;
  ishot: string[];
};

const masalachai: teas = {
  name: "masalachai",
  price: 20,
  ishot: ["hot", "cold"],
};

type cup = {
  size: String;
  color: String;
};
let cupsize: cup = {
  size: "large",
  color: "red",
};

// ducktail example in typescript

type brew = {
  brewtime: number;
  bean: string;
};

const cofffe: brew = {
  brewtime: 10,
  bean: "arabica",
};

// data type ko split krna in ts

type items = { name: string; price: number };
type address = {
  street: string;
  city: string;
  state: string;
  pincode: number;
};

type Order = {
  id: String;
  items: items[];
  address: address;
};

//

type chais = {
  name: String;
  price: number;
  ishot: boolean;
};

const updatedchai = (updates: Partial<chais>) => {
  console.log(updates);
};

updatedchai({ price: 30 });
updatedchai({ name: "green chai", ishot: false });
updatedchai({});

const updatedchai2 = (updates: Required<chais>) => {
  console.log(updates);
};

updatedchai2({ name: "green chai", price: 20, ishot: true });
// in required all proper are required

// updatedchai2({});
// make all proper in data types in partial
