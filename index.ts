/*========= TYPESCRIPT =========== */

// types

/*
const name:string = 'Ashwani';
const age:number = 25;
const isMarried:boolean = false;
const haveVoted:null = null;

const namesArr:string[] = ['ashwani', 'jame']  //array of strings

const obj:object = {
  name: 'As',
  age: 25
}

// types with function
// with fn we pass the args types and return types.

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

//  const Number: string | number = 23;

// we can either put any of the type here
/*
 usecase:- let's suppose we are making an api call & we know the type of errors are going to be string but we don't know whether we get an error or not so in that case we'll put the initial value as null see the below example..
 */

const Errors: string | null = null;

/*
 remember never use something like this, this not the recemmended way or not supporable.
 */

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
 any is the worst type in typescript it does't let know you what type of data is going to be.
*/

// it can only be usefull in such a case where we no idea at all what type

// const someProps: any = 'hello';

// in the some props we can assing the value of any type, string, number, boolean array object and whatever can be.

// never
/*
 this mean that the something will never happen it is used in the such cases
 as you see from the example.
 */

/*
  const doSomeThing = ():never => {
    throw 'Error'
  }
*/

/*
 unknown it is an alternative to any but it's naming is so clear that we don't know what kind of type we are going to put inside;
*/

const someProps: unknown = 24;

// let's see the other example to see the difference between any and unknown.

/*

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; // no error
let s2: string = vUnknown; //Type 'unknown' is not assignable to type 'string'.(2322)
console.log(s1);

console.log(vAny.foo()) // it'll not throw an error
console.log(vUnknown.foo()) // Property 'foo' does not exist on type 'unknown'.(2339)

*/

// Type Assertion/typecasting : it actually means converting one data type to other
/*
let vUnknown: unknown = 10;

// let s2: number = vUnknown;

// error Type 'unknown' is not assignable to type 'number'.(2322)
// so to fix this we use type Assertion

let s2: number = vUnknown as number;

console.log(s2);
*/

// lets see a another useful case

//let pageNumber: string = '10';

//let pageNumericNumber: number = pageNumber as number;

// this will also throw an error in the editor
/*
  Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.(2352)
*/

// so the above line cnn be written as something like this.

/*
let pageNumericNumber: number = pageNumber as unknown as number;
console.log(pageNumericNumber);
*/

// typescript with DOM here the typeassertion/ typecasting plays an important role.
// typescript doesn't know anything about our markup

/*
const inputBox = document.querySelector('.input-box');
console.log(inputBox.value) // we get error so to fix that we use typecast
*/

/*
const inputBox = document.querySelector('.input-box') as HTMLInputElement;
// console.log(inputBox.value);

// adding listeners to it.

inputBox.addEventListener('mouseup', (event: Event) => {
  // console.log(event.target.value) // this line won't read the value on target so
  // that we use typecast here

  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
*/

// tyscript classes
/*
class User {
  private firstName: string;
  private lastname: string;
  readonly unchangableName: string;
  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastname = lname;
    this.unchangableName = fname;
  }

  getUnchangableName(): void {
    // this.unchangableName = 'Foo';
    // Cannot assign to 'unchangableName' because it is a read-only property.(2540)
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastname;
  }
}

  const user: User = new User('Ashwani', 'Kumar');

  console.log(user);
  console.log(user.getFullName());

*/
// console.log(user.firstName)
//Property 'firstName' is private and only accessible within class 'User'

/*
 * By default every property of a class is public
 * by wring private will not let me access that.
 * protected we use with interfaces
 */

// classes with interfaces

/*
interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  firstName: string;
  lastname: string;
  static readonly maxAge = 25;
  // by writing static keyword before readony it'll be accessble outside of the class.

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastname = lname;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastname;
  }
}

// console.log(User.maxAge);

// let's inherit the user class
class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

// 1. without using constructor inside the Admin class it'll also have all the
// properties of a class.

const admin = new Admin('Ashwani', 'kumar');

console.log(admin.firstName);
console.log(admin.lastname);
admin.setEditor(`FullName: ${admin.firstName} ${admin.lastname}`);
console.log(admin.getEditor());
*/

// example 2. with proper constructor instantiation
/*
// parent class
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age; // if age property with types is not present in class there'lll be type error.
  }
}

// student class
class Student extends User {
  private marks: number;
  constructor(name: string, age: number, marks: number) {
    super(name, age); // by calling super() we are accessing the name and age props of parent class. it'll throw an error once we don't use super class
    this.marks = marks;
  }
}

const student: Student = new Student('Rahul', 25, 255);
console.log(student);

// teacher class
class Teacher extends Student {
  private classSize: number;
  constructor(name: string, age: number, marks: number, classSize: number) {
    super(name, age, marks);
    this.classSize = classSize;
  }
}

const teacher: Teacher = new Teacher('Mohan', 45, 500, 13);
console.log(teacher);
*/

// Enums :- it used for types and assignin values also. it is recommended to use enum properties in the upeercase letters

/*
enum StatusEnum {
  NOT_STARTED = '[STATUS] Not started',
  IN_PROGRESS = '[STATUS] In Progress',
  DONE = '[STATUS] Done',
}

// as you can see it's a simple object where we can access the values..

console.log(StatusEnum.NOT_STARTED);


// it can we used with interfaces

interface Task {
  id: number;
  status: StatusEnum;
}

// finally we can access the values also.
const task: Task = {
  id: 23,
  status: StatusEnum.DONE,
};

console.log(task);
*/

// generics typescript.

/*
 * Generics gives a lot of opportuinity to implement in the javascript.
 */

// the <T> is a generic we can whatever we want inside <type> , <ksjdkdf>, but
// as a convention we write <T> if we hover on the function call then we see the
// types which we are passing inside the function args

/*
const addId = <T>(obj: T) => {
  const id = Math.random().toString(20);
  return {
    ...obj,
    id,
  };
};

interface UserInterface {
  name: string;
}

const user: UserInterface = {
  name: 'Ashwani',
};
*/
// const result = addId<UserInterface>(user);
// there is an isue with this line user can pass data like this as well see below

// const result = addId<string>('Fooooo');

// but our function only excepts the arguments to be an object so in that case code will break so we can refactor the code.

/*
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(20);
  return {
    ...obj,
    id,
  };
};

interface UserInterface {
  name: string;
}

const user: UserInterface = {
  name: 'Ashwani',
};

const result = addId<UserInterface>(user); // good

// const result1 = addId<string>('Fooooo');
// error Type 'string' does not satisfy the constraint 'object'.(2344)
*/

// ======= generics with interfaces ====== with same example
/*
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(20);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T> {
  name: string;
  data: T;
}

const user: UserInterface<{ meta: string }> = {
  name: 'Ashwani',
  data: {
    meta: 'meta',
  },
};

const user1: UserInterface<string[]> = {
  name: 'Ramesh',
  data: ['typescript', 'Javascript'],
};

const result = addId<UserInterface<object>>(user);
console.log(result);
const result1 = addId<UserInterface<string[]>>(user1);
console.log(result1);
*/
// now this is super flexible bcz now we don't need to add extra interface
// inside the interface and do the nesting of interfaces.

// generics with passing various datatypes

// let's just consider the previous example
/*
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(20);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<number, string> = {
  name: 'Ashwani',
  data: 25,
  meta: 'Meta informations',
};

const result = addId<UserInterface<number, string>>(user);
console.log(result);
*/

// as we can see we can pass various data type and the way we call super useful and great.

/**======== Happy coading ============= */
