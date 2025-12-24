// let subs: number | string = 12;
// let apiRequest: "pending" | "success" | "failed" = "pending";
// apiRequest = "pending";

// let airlines: "seated" | "standing";

// airlines = "seated";

// in unions we can use methods that are common to all types in union
// in union we can define anyvarable type as union of array and other types

// edgecase and example

const orders = ["12", "23", "34"];

// let currentorder: string  ;
let currentorder: string | undefined ;

for (let order of orders) {
  if (order === "12") {
    currentorder = order;
    break;
  }
  currentorder="14;"
}

console.log(currentorder);
// this error show the variable might be used before assigned  is string or you can chnage it ot undefined type for feeting the thing