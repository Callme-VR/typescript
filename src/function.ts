function makechai(type: string, cups: number) {
  console.log(`make ${cups} cups of ${type}`);
}
makechai("visja", 3);

// for return datatypes  using :number  and :string etc

function orderchais(): number {
  //   return "visha";
  return 20;
}

// logger fuction
function loger(): void {
  console.log("order placed");
}

// defualt paramertr and optional paramertr
function orderchai(type: String = "msala") {
  console.log(`order ${type} chai`);
}

function orderhcia2(order: {
  type: String;
  cups: number;
  siez: "small" | "medium" | "large";
}): number {
  return order.cups * 20;
}
