// for for-in ,for-of, while,do-while

// for
for (i = 1; i < 11; i++) {
  console.log(i + "\t");
}
i = 11;

//while
while (i < 21) {
  console.log(i + "\t");
  i++;
}

i = 1;
//do-while
do {
  console.log(i + "\t");
  i++;
} while (i > 2);

//for-in
let persone = {
  fname: "jone",
  lname: "dsuza",
  age: 20,
};
let employee1 = ""; //initlize with empty string is important otherwise outer is undefinedjonedsuza20
var x;
for (x in persone) {
  employee1 += persone[x];
}
console.log(employee1);

//for-of

let Array = ["A", "B", "C"];
for (value of Array) {
  console.log(value); //simple loop
}
