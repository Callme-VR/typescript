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
