// 6. WAP to check whether a character is uppercase or lowercase?
let char = "L";
// let char = "l";
if (char >= "A" && char <= "Z") {
  console.log(`${char} is an uppercase`);
} else if (char >= "a" && char <= "z") {
  console.log(`${char} is a lowercase`);
} else {
  console.log(`Invalid character`);
}