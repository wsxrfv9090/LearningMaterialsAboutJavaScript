let a = [ 1, 2, 3, 6, 10 ];
let b = [ 'david', 'eddie', 'alex', 'micheal' ];

console.log(a[0]);
console.log(a[1]);
console.log(a);
console.log(b);
console.log(typeof a);
let c = [ 4, 'alex', true ];
console.log(c);
console.log(a[8]);
console.log(a.length);


a[10] = 77;
console.log(a);
console.log(a.length);

a.push(77);
console.log(a);
console.log(a.length);
a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);