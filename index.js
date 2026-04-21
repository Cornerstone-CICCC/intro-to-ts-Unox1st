// =======================
// Number Manipulation
// =======================
// a. doubleNumber
function doubleNumber(num) {
    return num * 2;
}
// b. squareNumber
function squareNumber(num) {
    return num * num;
}
// =======================
// Boolean Logic
// =======================
// a. isEven
function isEven(num) {
    return num % 2 === 0;
}
// b. isAdult
function isAdult(age) {
    return age >= 18;
}
// =======================
// String Manipulation
// =======================
// a. reverseString
function reverseString(str) {
    return str.split("").reverse().join("");
}
// b. capitalizeString
function capitalizeString(str) {
    return str.toUpperCase();
}
// =======================
// Usage and Output
// =======================
console.log("Double 5:", doubleNumber(5));
console.log("Square 4:", squareNumber(4));
console.log("Is 10 even?:", isEven(10));
console.log("Is 15 even?:", isEven(15));
console.log("Is age 20 adult?:", isAdult(20));
console.log("Is age 16 adult?:", isAdult(16));
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Capitalize 'hello':", capitalizeString("hello"));
export {};
