// 기본 타입 템플릿

// 1. string
const myString: string = "Oz-cording";
console.log("String:", typeof myString);

// 2. number
const myNumber: number = 0;
console.log("Number:", typeof myNumber);

// 3. boolean
const myBoolean: boolean = true;
console.log("Boolean:", typeof myBoolean);

// 4. null
const myNull: null = null;
console.log("Null:", myNull);

// 5. any
let myAny: any = "아무거나";
console.log("Any:", myAny);

// myAny 값 변경
myAny = 123;
console.log("changed to number:", myAny);

myAny = false;
console.log("changed to boolean:", myAny);
