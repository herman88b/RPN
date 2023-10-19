//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let Word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
 
console.log( Word + ' '+ second +' ' + third +' ' + fourth +' ' + fifth  +' '+ sixth + ' ' + seventh + ' ');
// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = ['wow JavaScript', 'is so', ' cool'];
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);
console.log( word[0]+ word[1] + word[2]);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';

let exampleFirstWord3 = word3.substring(0, 3);
let exampleFirstWord4 = word3.substring(3, 12);
let exampleFirstWord5 = word3.substring(12, 22);
let exampleFirstWord6 = word3.substring(22, 25);




console.log('First Word: ' + exampleFirstWord3 + exampleFirstWord4 + exampleFirstWord5 + exampleFirstWord6);



// ---------------------------------------
console.log(' ');
// ---------------------------------------

