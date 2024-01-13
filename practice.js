var bar = "bar";
let baz = "baz";

function foo() {
  // All variables are accessible within functions.
  {
    const qux = "qux";
    console.log(qux); // qux
    var bar = "barr";

  }

  console.log(bar); // bar
  console.log(baz); // baz
}

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
// console.log(qux); // ReferenceError: qux is not defined
foo();
