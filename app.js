// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
// Write an ES2015 Version

const PI = 3.14;

// Quiz

// What is the difference between var and let?
// Answer: You cannot redeclare let and let is also block scoped.
// With var you can redeclare and it is just function scoped.

// What is the difference between var and const?
// Answer: You cannot reassign or redelcare const and const is block scoped.
// with var you can reassign and redeclare and var is function scoped. 

// What is the difference between let and const?
// Answer: const cannot be reassigned as let can be reassigned.

// What is hoisting?
// Answer: When a variable is called before initialization of said variable.
// making the variable return "undefined" until being initialized. This is typical
// of the var keyword. let and const do not allow this.