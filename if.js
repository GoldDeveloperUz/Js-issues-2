// // If1
// let a = 5;
// if (a > 0) a += 1;
// console.log(a);

// // If2
// a = -3;
// if (a > 0) a += 1;
// else a -= 2;
// console.log(a);

// // If3
// a = 0;
// if (a > 0) a += 1;
// else if (a < 0) a -= 2;
// else a = 10;
// console.log(a);

// // If4
// let x = 3, y = -1, z = 4, count = 0;
// if (x > 0) count++;
// if (y > 0) count++;
// if (z > 0) count++;
// console.log(count);

// // If5
// x = -2; y = 0; z = 5;
// let pos = 0, neg = 0;
// if (x > 0) pos++; else if (x < 0) neg++;
// if (y > 0) pos++; else if (y < 0) neg++;
// if (z > 0) pos++; else if (z < 0) neg++;
// console.log(pos, neg);

// // If6
// a = 8; b = 12;
// if (a > b) console.log(a);
// else console.log(b);

// // If7
// a = 4; b = 9;
// if (a < b) console.log(1);
// else console.log(2);

// // If8
// a = 5; b = 3;
// if (a > b) console.log(a, b);
// else console.log(b, a);

// // If9
// let A = 4.5, B = 9.2;
// if (A > B) { let t = A; A = B; B = t; }
// console.log(A, B);

// // If10
// A = 3; B = 5;
// if (A != B) { A = A + B; B = A; }
// else { A = 0; B = 0; }
// console.log(A, B);

// // If11
// A = 7; B = 4;
// if (A != B) {
//   if (A > B) { B = A; }
//   else { A = B; }
// } else { A = 0; B = 0; }
// console.log(A, B);

// // If12
// a = 3; b = 7; c = 1;
// if (a < b && a < c) console.log(a);
// else if (b < a && b < c) console.log(b);
// else console.log(c);

// // If13
// a = 8; b = 4; c = 6;
// if ((a > b && a < c) || (a < b && a > c)) console.log(a);
// else if ((b > a && b < c) || (b < a && b > c)) console.log(b);
// else console.log(c);

// // If14
// a = 7; b = 2; c = 9;
// let min, max;
// if (a < b && a < c) min = a;
// else if (b < a && b < c) min = b;
// else min = c;
// if (a > b && a > c) max = a;
// else if (b > a && b > c) max = b;
// else max = c;
// console.log(min, max);

// // If15
// a = 2; b = 5; c = 8;
// if (a < b && a < c) console.log(b + c);
// else if (b < a && b < c) console.log(a + c);
// else console.log(a + b);

// // If16
// A = 2; B = 4; C = 6;
// if (A < B && B < C) { A *= 2; B *= 2; C *= 2; }
// else { A = -A; B = -B; C = -C; }
// console.log(A, B, C);

// // If17
// A = 3; B = 5; C = 7;
// if ((A < B && B < C) || (A > B && B > C)) { A *= 2; B *= 2; C *= 2; }
// else { A = -A; B = -B; C = -C; }
// console.log(A, B, C);

// // If18
// a = 2; b = 2; c = 5;
// if (a == b) console.log(3);
// else if (a == c) console.log(2);
// else console.log(1);

// // If19
// let n1 = 4, n2 = 7, n3 = 7, n4 = 7;
// if (n1 != n2 && n1 != n3 && n1 != n4) console.log(1);
// else if (n2 != n1 && n2 != n3 && n2 != n4) console.log(2);
// else if (n3 != n1 && n3 != n2 && n3 != n4) console.log(3);
// else console.log(4);

// // If20
// let A1 = 2, B1 = 6, C1 = 4;
// let dB = Math.abs(A1 - B1);
// let dC = Math.abs(A1 - C1);
// if (dB < dC) console.log("B", dB);
// else console.log("C", dC);

// // If21
// let X = 0, Y = 5;
// if (X == 0 && Y == 0) console.log(0);
// else if (Y == 0) console.log(1);
// else if (X == 0) console.log(2);
// else console.log(3);

// // If22
// X = -3; Y = -5;
// if (X > 0 && Y > 0) console.log(1);
// else if (X < 0 && Y > 0) console.log(2);
// else if (X < 0 && Y < 0) console.log(3);
// else console.log(4);

// // If23
// let x1 = 2, y1 = 3, x2 = 2, y2 = 7, x3 = 6, y3 = 3;
// let x4, y4;
// if (x1 == x2) x4 = x3; else if (x1 == x3) x4 = x2; else x4 = x1;
// if (y1 == y2) y4 = y3; else if (y1 == y3) y4 = y2; else y4 = y1;
// console.log(x4, y4);

// // If24
// let xVal = -3;
// let f;
// if (xVal > 0) f = 2 * Math.sin(xVal);
// else f = 6 - xVal;
// console.log(f);

// // If25
// let X1 = 1;
// if (X1 < -2 || X1 > 2) console.log(2 * X1);
// else console.log(-3 * X1);

// // If26
// xVal = 3;
// if (xVal <= 0) f = -xVal;
// else if (xVal < 2) f = xVal * xVal;
// else f = 4;
// console.log(f);

// // If27
// xVal = 2.4;
// if (xVal < 0) f = 0;
// else if (Math.floor(xVal) % 2 == 0) f = 1;
// else f = -1;
// console.log(f);

// // If28
// let year = 2000;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) console.log(366);
// else console.log(365);

// // If29
// let num = -5;
// if (num == 0) console.log("nol son");
// else if (num > 0 && num % 2 == 0) console.log("musbat juft son");
// else if (num > 0) console.log("musbat toq son");
// else if (num < 0 && num % 2 == 0) console.log("manfiy juft son");
// else console.log("manfiy toq son");

// // If30
// num = 234;
// let s = "";
// if (num % 2 == 0) s += "juft ";
// else s += "toq ";
// if (num < 10) s += "bir xonali son";
// else if (num < 100) s += "ikki xonali son";
// else s += "uch xonali son";
// console.log(s);

