// 3. prompt trong js:
// let input = prompt("Enter something ?");
// console.log(typeof input);

//
// let a = 10;
// a = "hello";
// a = 1000;
// console.log("a = " + a);
// const b = 20;
// b = "hihi";
// console.log(b);

// 4. Toán tử trong js: +, -, *, /, **, %;
// let a = 10;
// let b = 8;
// console.log(10 % 8);
// let a = 10;
// a += 30; // <=> a = a + 30; => a = 40
// a -= 30; // <=> a = a - 30; => a = ?
// a *= 2; // => a = 20
// a /= 2 + a * 2;
// console.log("a = " + a);
// let b = 20;
// let c = a ** b;
// let d = 9;
// console.log("Căn bậc 2 của " + d + " = " + Math.sqrt(d));
// console.log("C = " + c);

// Tính diện tích tam giác khi biết 3 cạnh
// Khai báo 3 biến a b c => s: diện tích

// let a = prompt("Enter a");
// let b = 7;
// let c = 8;
// let h = Math.sqrt(49 - 6.5 ** 2);
// console.log((h * c) / 2);

// // let h = Math.sqrt(b ** 2 - (c / 2) ** 2);
// // console.log("h = " + h);

// // let s = (h * c) / 2;
// // console.log("Diện tích hình tam giác là " + s);

// let a = Number(prompt("Enter a "));
// let c = a + 10;
// console.log("c = " + c);

// 5. Array in JS: Lưu nhiều phần tử khác nhau

// let array = [1, "helo", "trời khá nóng", 5, true, false];
// Truy cập vào các vị trí trong mảng
// array.push("Phần tử mới");
// array.push("Phần tử mới");
// array[array.length] = "Phần tử mỡi";
// console.log(array);
// console.log(array.length);

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

//6. For trong js: vòng lặp dùng để thực hiện 1 hành vi giống nhau nhiều lần
// for(điểm bắt đầu; điều kiện để vòng for chạy, những thay đổi của điểm bắt đầu sau mỗi lần lặp) {}
// for (let i = 10; i > 1; i--) {
//   console.log(i);
// }

// 7. Điều kiện: ==, != , < , <=, >, >=, &&, ||;

let check1 = 10 != 10;
let check2 = 20 > 10;
let finalCheck = check1 || check2;
console.log(finalCheck);
