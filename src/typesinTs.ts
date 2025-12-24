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
