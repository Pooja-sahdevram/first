h; /*js opeartor are symbol that are used to perform oprations on operend
there are 6 oprator in js*/

//************************************************************* */

//1) Arithmetic :  + - * / increment decrement.
console.log("Arithmetic opeartor");
let x = 5,
  y = 5;
console.log(x + y); //10
console.log("Addition is:" + x + y); //55

x = x++; //post
console.log(x); //5
x++; //increment in x only
console.log(x); //6

//************************************************************** */

//2).comparsion operator :==, === ,!- ,!== ,>,>=,<,<=
console.log("comparison opeartor");

//i)isequal to ==
let a = 2,
  A = "2";
console.log(a == A); //true

//ii)isequal to  ===      same type (strictly equalto)
let b = 2,
  B = "2";
console.log(b === B); //false

//iii)notequal to !=
let c = 2,
  C = "2";
console.log(c != C); //false

//iv)notequal to whith no type check
let b1 = 2,
  B1 = 2;
console.log(b1 !== B1); //false

//v) less than >
let c1 = 2,
  c2 = 2;
console.log(c1 > c2); //false

//vi) less than >
(c1 = 2), (c2 = 2);
console.log(c1 >= c2); //true

//vii) grater >
(c1 = 2), (c2 = 2);
console.log(c1 < c2); //false

//viii) grater than >
(c1 = 2), (c2 = 2);
console.log(c1 <= c2); //true

//************************************************************** */

//3).Bitwise operator  "perform on binary numbers only":  & ,|, ^,~,
console.log("Bitwise opeartor");

//i). bitwise and &
x = 5; //00000101
y = 4; //00000100
console.log(x & y); //00000100 ==>4

//ii). bitwise or |
x = 4; //00000100
y = 2; //00000010
console.log(x | y); //00000110 =>6

//iii). bitwise xor ^
x = 4; //00000100
y = 6; //00000110
console.log(x ^ y); //00000010 =>2

//iv). not
x = 4; //00000100
console.log(~x); //11111101 =>2

//v). leftshift <<     x*2's power shift value
x = 5; //0000000000000101==>0000000000001010
console.log(x << 1); //11111101 =>2

//vi). rightshift    x/(2^shiftedvalue)
x = 10; //0000000000001010==>
console.log(x >> 2);

//vii). rightshift with 0 >>>    filled zeros in empty spaces
console.log(x >>> 2);

//************************************************************** */

//4).Logical operator  :  && || !
console.log("Logical opeartor");

//i).   Logical And &&
(a = 0), (b = 1);
console.log(a && b);

//ii).   Logical Or ||
(a = 0), (b = 1);
console.log(a || b);

//ii).   Logical not !
(a = 7), (b = 1);
console.log(!a);

//************************************************************** */

//5).Assignment operator = ,+=,-=,*=,/=,%=
console.log("ASSignment opeartor");
a = 4;
console.log(a);
a += 4;
console.log(a);
a -= 4;
console.log(a);
a *= 4;
console.log(a);
a /= 4;
console.log(a);
a %= 4;
console.log(a);

//************************************************************** */

//6).Special operator ?:  ,  delete instanceof in new typeof void
console.log("ASSignment opeartor");

//i).conditional operator ?:
console.log(4 === 7 && "pooja" ? "hi" : "by");

//ii).comma operator ,
a = (2, 4, 5);

console.log(a);

//iii).delete operator delete  ==>  delete  object's value
let animal = {
  namme: "herry",
  age: 5,
};
console.log(animal.namme);
delete animal.namme;
console.log(animal.namme);

//iv).in operator check property exist or not
console.log("age" in animal ? true : false);

//v).instance operator check property exist or not
console.log(animal instanceof String);

//vi).new
class Car {
  constructor(kname) {}
}
let l = new Car();

//vii).typeof
console.log(l);

//viii).void
//<a href ="javasccript:void(0)>hello</hello>
