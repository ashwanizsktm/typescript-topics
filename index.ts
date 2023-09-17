// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// types

/*
const name:string = 'Ashwani';
const age:number = 25;
const isMarried:boolean = false;
const haveVoted:null = null;

const namesArr:string[] = ['ashwani', 'jame']  //any datatype can't be assigned under this as it is array with string
//this can be written as 
const nameArr1:Array<string> = ['Rahul', 'Raghav', false]; 
// type boolean can't be instted inside this.

const obj:object = {
  name: 'As',
  age: 25
}

// types with function
// with fn we can pass the args types and return types as well

const getFullName = (fname:string, lname:string):string => {
    return fname + ' ' + lname;
}
console.log(getFullName('ashwani', 'kumar'));
*/

// Interfaces:- with interface we can actully give strict tying by giving
// types to the user props.
/*
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}
*/

// now age props in User interface is optional so we can either put in or not.
/*
const user: UserInterface = {
  name: 'Ashwani',
  //age: '25'
  // here we can see that it accets only number so it'll give error & hits as well Type 'string' is not assignable to type 'number'.(2322)
  age: 24,
  getMessage() {
    return 'Hello' + ' ' + this.name;
  },
};
console.log(user.getMessage());
*/

// types behaves the same way this is just an option
// nested, note:- this will work the same way inside the interface.
// only diff. is we don't put = operator infront of any interface.
// Defining Airplane Type
/*
type Airplane = {
  model: string;
  flightNumber: string;
}
*/

// nested
// looking at this example will make u understand about the nested type.

/*
Index signatures can be used when you are unsure of how many properties an object will have but you are sure of the type of properties of an object.
*/

/*
type Seat = {
  [key: string]: string;
};

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  hasTastyFood: boolean;
  flightNumber: string;
  caterer: Caterer;
  seats: Seat[];
};

const airplane: Airplane = {
  model: '2333',
  hasTastyFood: true,
  flightNumber: 'MH021',
  caterer: {
    name: 'abc',
    address: 'Banglore',
    phone: 556634,
  },
  seats: [
    {
      name: 'Mark Allen',
      number: 'A3',
    },
    {
      name: 'John Doe',
      number: 'B5',
    },
  ],
};
console.log(airplane);

*/
/**
 * see this for more details
 * https://hackernoon.com/assign-types-to-nested-objects-in-typescript
 */

// union

const Number: string | number = 23;
// we can either put any of the type here
/*
 usecase:- let's suppose we are making an api call & we know the type of errors are going to be string but we don't know whether we get an error or not so in that case we'll put the initial value as null see the below example..
 */

const Errors: string | null = null;

// remember never use something like this, this not the recemmended way or not supporable.
const SomeProps: string | null | object | string[] | undefined = null;

// aliases

// we can define alias as type and use it inside the UserInterface.
/*
type FRAMEWORKS = string[];

interface UserInterface {
  frameworks: FRAMEWORKS;
  name: string;
}

const user: UserInterface = {
  name: 'Ashwani',
  frameworks: ['Angular', 'React', 'View'],
};
console.log(user);
*/

// combining aliases
/*
type PopularTag = string;
type IsPopularTag = PopularTag | null;

const popularTags: PopularTag[] = ['div tag', 'span tag'];
const isPopularTag: IsPopularTag = null;
*/

// any, void, never, unknown data types inside typescript.

// void when we don't return anything in function then we use void

/*
const getMessage = (fname: string, lname: string): void => {
  console.log(fname + ' ' + lname);
};

getMessage('Ashwani', 'kumar');
*/

// void means undefined or null. let's see that in action with proof.
/*
if we try to assign anything in the someProps except undefined & null it'll throw an error.
*/
// let someProps: void = 'sdsd';
/*
  let someProps: void = null;
  let someProps1: void = undefined;
*/

// In above 2 statement we won't get any error.

/*
 any is the worst type in typescript it does't let you what type of data is going to be.
*/

//it can only be usefull in such a case where we no idea at all what type

const someProps: any = 'hello'; // in the some props we can assing the value of any type, string, number, boolean array object and whatever can be.
