type tearecipe = {
  sugar: number;
  milk: number;
};

class masalahchai implements tearecipe {
  sugar = 12;
  milk = 24;
}

interface cupsize {
  size: "small" | "large";
}

// literal types example
type TeaType = "green" | "black" | "herbal";

function chaiordertype(t: TeaType) {
  console.log(t);
}
chaiordertype("green");

// readonly type .example which explain that we can not change the value of Appname outside after the initialization inside of types or const

type config = {
  readonly Appname: string;
  version: 2;
};

const configuration: config = {
  Appname: "Xsigner.ai",
  version: 2,
};

// configuration.Appname = "Xsigner.ai";

// Alias example
