// // 1
// let a = 5;
// let P = 4 * a;
// console.log("1. P =", P);

// // 2
// a = 5;
// let S = a * a;
// console.log("2. S =", S);

// // 3
// let b = 3;
// S = a * b;
// P = 2 * (a + b);
// console.log("3. S =", S, "P =", P);

// // 4
// let d = 10;
// let pi = 3.14;
// let L = pi * d;
// console.log("4. L =", L);

// // 5
// a = 4;
// let V = a ** 3;
// S = 6 * a ** 2;
// console.log("5. V =", V, "S =", S);

// // 6
// a = 2; b = 3; let c = 4;
// V = a * b * c;
// S = 2 * (a * b + b * c + a * c);
// console.log("6. V =", V, "S =", S);

// // 7
// let R = 7;
// L = 2 * pi * R;
// S = pi * R ** 2;
// console.log("7. L =", L, "S =", S);

// // 8
// a = 8; b = 12;
// let arif = (a + b) / 2;
// console.log("8. O‘rta arifmetik =", arif);

// // 9
// a = 4; b = 9;
// let geom = Math.sqrt(a * b);
// console.log("9. O‘rta geometrik =", geom);

// // 10 
// a = 6; b = 2;
// let sum = a ** 2 + b ** 2;
// let diff = a ** 2 - b ** 2;
// let prod = a ** 2 * b ** 2;
// let div = a ** 2 / b ** 2;
// console.log("10. Yig‘indi =", sum, "Ayirma =", diff, "Ko‘paytma =", prod, "Nisbat =", div);

// // 11
// let a = -6, b = 3;
// let sum = Math.abs(a) + Math.abs(b);
// let diff = Math.abs(a) - Math.abs(b);
// let prod = Math.abs(a) * Math.abs(b);
// let div = Math.abs(a) / Math.abs(b);
// console.log("11. Yig‘indi =", sum, "Ayirma =", diff, "Ko‘paytma =", prod, "Nisbat =", div);

// // 12
// a = 3; b = 4;
// let c = Math.sqrt(a ** 2 + b ** 2);
// let P = a + b + c;
// console.log("12. c =", c, "P =", P);

// // 13
// let R1 = 6, R2 = 4, pi = 3.14;
// let S1 = pi * R1 ** 2;
// let S2 = pi * R2 ** 2;
// let S3 = S1 - S2;
// console.log("13. S1 =", S1, "S2 =", S2, "S3 =", S3);

// // 14
// let L = 31.4;
// let R = L / (2 * pi);
// let S = pi * R ** 2;
// console.log("14. R =", R, "S =", S);

// // 15
// S = 78.5;
// let D = Math.sqrt((4 * S) / pi);
// L = pi * D;
// console.log("15. D =", D, "L =", L);

// // 16
// let x1 = 5, x2 = 12;
// let distance = Math.abs(x2 - x1);
// console.log("16. Masofa =", distance);

// // 17
// let A = 2, B = 10, C = 6;
// let AC = Math.abs(C - A);
// let BC = Math.abs(C - B);
// let sumDist = AC + BC;
// console.log("17. AC =", AC, "BC =", BC, "Yig‘indi =", sumDist);

// // 18
// A = 2; B = 8; C = 5;
// AC = Math.abs(C - A);
// BC = Math.abs(B - C);
// let mult = AC * BC;
// console.log("18. AC =", AC, "BC =", BC, "Ko‘paytma =", mult);

// // 19
// let x1r = 2, y1 = 3, x2r = 7, y2 = 9;
// let width = Math.abs(x2r - x1r);
// let height = Math.abs(y2 - y1);
// P = 2 * (width + height);
// S = width * height;
// console.log("19. P =", P, "S =", S);

// // 20
// x1 = 2; y1 = 3; x2 = 7; y2 = 11;
// distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// console.log("20. Masofa =", distance);

// // 21. Uchburchak perimetri va yuzasi (Giron formulasi)
// let x1 = 0, y1 = 0, x2 = 0, y2 = 3, x3 = 4, y3 = 0;
// let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// let b = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
// let c = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
// let P = a + b + c;
// let p = P / 2;
// let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
// console.log("21. P =", P, "S =", S);

// // 22. A va B qiymatlarini almashtirish
// let A = 5, B = 10;
// let temp = A;
// A = B;
// B = temp;
// console.log("22. A =", A, "B =", B);

// // 23. A, B, C: A→B, B→C, C→A
// A = 1; B = 2; let C = 3;
// temp = A;
// A = B;
// B = C;
// C = temp;
// console.log("23. A =", A, "B =", B, "C =", C);

// // 24. A, B, C: A→C, C→B, B→A
// A = 1; B = 2; C = 3;
// temp = A;
// A = C;
// C = B;
// B = temp;
// console.log("24. A =", A, "B =", B, "C =", C);

// // 25. y = 3·x⁶ – 6·x² – 7
// let x = 2;
// let y = 3 * x ** 6 - 6 * x ** 2 - 7;
// console.log("25. y =", y);

// // 26. y = 4·(x–3)⁶ – 7·(x–3)³ + 2
// x = 4;
// y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
// console.log("26. y =", y);

// // 27. A⁸ ni 3 ta ko‘paytirish orqali
// let a1 = 2;
// let a2 = a1 * a1; // a²
// let a4 = a2 * a2; // a⁴
// let a8 = a4 * a4; // a⁸
// console.log("27. a² =", a2, "a⁴ =", a4, "a⁸ =", a8);

// // 28. A¹⁵ ni 2 yordamchi orqali
// a1 = 2;
// let a3 = a1 * a1 * a1; // a³
// let a5 = a3 * a1 * a1; // a⁵
// let a15 = a5 * a5 * a5; // a¹⁵
// console.log("28. a³ =", a3, "a⁵ =", a5, "a¹⁵ =", a15);

// // 29. Gradusdan radianlarga o‘tish
// let alpha = 180;
// let pi = 3.14;
// let rad = alpha * pi / 180;
// console.log("29. Radian =", rad);

// // 30. Radianlardan gradusga o‘tish
// rad = 3.14;
// let grad = rad * 180 / pi;
// console.log("30. Gradus =", grad);

// // 31. Fahrenheit → Celsius
// let TF = 100;
// let TC = (TF - 32) * 5 / 9;
// console.log("31. T_C =", TC);

// // 32. Celsius → Fahrenheit
// TC = 25;
// TF = TC * 9 / 5 + 32;
// console.log("32. T_F =", TF);

// // 33. X kg konfet A so‘m, 1 kg va Y kg narxi
// let X = 2, A = 10000, Y = 3;
// let oneKg = A / X;
// let Ykg = oneKg * Y;
// console.log("33. 1kg =", oneKg, "Y kg =", Ykg);

// // 34. Shokolad va iris narxlari
// let X1 = 2, A1 = 12000, Y1 = 3, B1 = 15000;
// let choco1 = A1 / X1;
// let iris1 = B1 / Y1;
// let ratio = choco1 / iris1;
// console.log("34. 1kg shokolad =", choco1, "1kg iris =", iris1, "Nisbat =", ratio);

// // 35. Qayiq harakati
// let V = 10, U = 2, T1 = 3, T2 = 2;
// let S = V * T1 + (V - U) * T2;
// console.log("35. S =", S);

// // 36. Ikkita avtomobil uzoqlashmoqda
// let V1 = 60, V2 = 80, S0 = 100, T = 2;
// let S_after = S0 + (V1 + V2) * T;
// console.log("36. Masofa =", S_after);

// // 37. Ikkita avtomobil bir-biriga qarshi
// V1 = 60; V2 = 80; S0 = 300; T = 1;
// S_after = Math.abs(S0 - (V1 + V2) * T);
// console.log("37. Yaqinlashgandan keyingi masofa =", S_after);

// // 38. Chiziqli tenglama A·x + B = 0
// A = 2; B = -6;
// x = -B / A;
// console.log("38. x =", x);

// // 39. Kvadrat tenglama A·x² + B·x + C = 0
// A = 1; B = -3; C = 2;
// let D = B ** 2 - 4 * A * C;
// if (D > 0) {
//   let x1 = (-B + Math.sqrt(D)) / (2 * A);
//   let x2 = (-B - Math.sqrt(D)) / (2 * A);
//   console.log("39. x1 =", x1, "x2 =", x2);
// } else {
//   console.log("39. Haqiqiy ildiz yo‘q");
// }

// // 40. Tenglamalar sistemasi
// let A1s = 1, B1s = 2, C1s = 3;
// let A2s = 4, B2s = 5, C2s = 6;
// let Dsys = A1s * B2s - A2s * B1s;
// let xs = (C1s * B2s - C2s * B1s) / Dsys;
// let ys = (A1s * C2s - A2s * C1s) / Dsys;
// console.log("40. x =", xs, "y =", ys);
