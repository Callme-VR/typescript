// let drink = "chasi";
//  never types example and forcefull type assertion

type User = {
  name: string;
};

let UserName = '{"name":"John"}';

let userObject = JSON.parse(UserName) as number;
// we here forcefully asserted the type of userObject to number using as number.
// change it to as User to make it work

console.log(userObject);

// if i changes the in userobject  as user in place of number then it will give error because userobject is not of type user it is of type any so we have to forcefully assert the type to user using as user.
// User her takes as string and we are trying to assign it to number so it will give error

const inputElement = document.getElementById("username") as HTMLInputElement;

// here we are forcefully asserting the type of inputElement to HTMLInputElement using as HTMLInputElement

// because getElementById returns HTMLElement or null but we know that the element with id username is an input element so we are asserting it to HTMLInputElement

let newValue: unknown;

newValue = "Hello";
newValue = 123;

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   }
// }

// const data: unknown = "code with chai";
// const strdata: string = data as string;

// type guard

type Role = "admin" | "user";
function redirect(role: Role): void {
  if (role == "admin") {
    console.log("user direct hogay admin per");
    return;
  }

  if (role == "user") {
    console.log("user direct hogay user per");
    return;
  }
  role;
}

// .when you hover on the role it will show never beacause it is not covered in any of the if conditions and any other role is not defines outside above two one

// type chaiorder = {
//   type: string;
//   sugar: number;
//   strong: boolean;
// };

// function makechai(order: chaiorder) {
//   console.log(order);
// }
