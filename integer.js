// // Integer1
// let L = 250; 
// let meters = L / 100;
// console.log("Integer1: " + meters + " metr");

// // Integer2
// let M = 3500; 
// let tons = M / 1000;
// console.log("Integer2: " + tons + " tonna");

// // Integer3
// let bytes = 2500;
// let kilobytes = Math.floor(bytes / 1024);
// console.log("Integer3: " + kilobytes + " KB");

// // Integer4
// let A = 25, B = 7;
// let kesmalar_soni = Math.floor(A / B);
// console.log("Integer4: " + kesmalar_soni + " ta kesma joylashadi");

// // Integer5
// let qoldiq = A % B;
// console.log("Integer5: qolgan uzunlik = " + qoldiq);

// // Integer6
// let n6 = 47;
// let onlik = Math.floor(n6 / 10);
// let birlik = n6 % 10;
// console.log("Integer6: onlik = " + onlik + ", birlik = " + birlik);

// // Integer7
// let yig7 = onlik + birlik;
// let kop7 = onlik * birlik;
// console.log("Integer7: yigindi = " + yig7 + ", kopaytma = " + kop7);

// // Integer8
// let teskari8 = birlik * 10 + onlik;
// console.log("Integer8: teskari son = " + teskari8);

// // Integer9
// let n9 = 345;
// let yuzlik = Math.floor(n9 / 100);
// console.log("Integer9: yuzlik = " + yuzlik);

// // Integer10
// let onlik10 = Math.floor(n9 / 10) % 10;
// let birlik10 = n9 % 10;
// console.log("Integer10: birlik = " + birlik10 + ", onlik = " + onlik10);

// // Integer11
// let yig11 = yuzlik + onlik10 + birlik10;
// let kop11 = yuzlik * onlik10 * birlik10;
// console.log("Integer11: yigindi = " + yig11 + ", kopaytma = " + kop11);

// // Integer12
// let teskari12 = birlik10 * 100 + onlik10 * 10 + yuzlik;
// console.log("Integer12: teskari = " + teskari12);

// // Integer13
// let yangi13 = (n9 % 100) * 10 + yuzlik;
// console.log("Integer13: " + yangi13);

// // Integer14
// let yangi14 = birlik10 * 100 + Math.floor(n9 / 10);
// console.log("Integer14: " + yangi14);

// // Integer15
// let yangi15 = onlik10 * 100 + yuzlik * 10 + birlik10;
// console.log("Integer15: " + yangi15);

// // Integer16
// let yangi16 = yuzlik * 100 + birlik10 * 10 + onlik10;
// console.log("Integer16: " + yangi16);

// // Integer17
// let n17 = 4785;
// let yuzlik17 = Math.floor(n17 / 100) % 10;
// console.log("Integer17: yuzlik = " + yuzlik17);

// // Integer18
// let minglik = Math.floor(n17 / 1000);
// console.log("Integer18: minglik = " + minglik);

// // Integer19
// let N19 = 3600;
// let minutes = Math.floor(N19 / 60);
// console.log("Integer19: " + minutes + " daqiqa otgan");

// // Integer20
// let hours = Math.floor(N19 / 3600);
// console.log("Integer20: " + hours + " soat otgan");

// // Integer21
// let sec21 = N19 % 60;
// console.log("Integer21: songgi daqiqadan otgan soniyalar = " + sec21);

// // Integer22
// let sec22 = N19 % 3600;
// console.log("Integer22: songgi soatdan otgan soniyalar = " + sec22);

// // Integer23
// let min23 = Math.floor((N19 % 3600) / 60);
// console.log("Integer23: songgi soatdan otgan toliq daqiqalar = " + min23);

// // Integer24
// let K = 10; 
// let day24 = (1 + (K - 1)) % 7; 
// console.log("Integer24: " + day24 + " (0yakshanba, 1dushanba, ...)");

// // Integer25
// let day25 = (4 + (K - 1)) % 7;
// console.log("Integer25: " + day25);

// // Integer26
// let day26 = ((2 + (K - 1)) % 7) + 1; 
// console.log("Integer26: " + day26 + " (1dushanba, 7yakshanba)");

// // Integer27
// let day27 = ((6 + (K - 1)) % 7) + 1; 
// console.log("Integer27: " + day27);

// // Integer28
// let N = 3; 
// let day28 = ((N - 1 + (K - 1)) % 7) + 1;
// console.log("Integer28: " + day28);

// // Integer29
// A = 20; B = 10; let C = 4;
// let kv_soni = Math.floor(A / C) * Math.floor(B / C);
// let bush_maydon = A * B - kv_soni * (C ** 2);
// console.log("Integer29: kv_soni = " + kv_soni + ", bosh maydon = " + bush_maydon);

// // Integer30
// let year = 1901;
// let century = Math.floor((year - 1) / 100) + 1;
// console.log("Integer30: " + century + "-asr");
