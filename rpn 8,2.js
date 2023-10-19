/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
   function dataHandlings (input) {
    return input;
   }
        for(let i = 0; i < input.length; i++){
            console.log('Nomor ID :' + input[i][0]);
            console.log('Nama Lengkap :' + input [i][1]);
            console.log('TTL :' + input [i][2] + ' ' + input[i][3]);
            console.log('hobi :' + input[i][4]);
            
           
        }
   
    

   

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input1){

input1.splice(1, 3, 'Roman Alamsya Elsharawy', 'Provinsi Bandar Lampung','21/05/1989','pria', 'SMA International Metro');
input1.pop(4);

console.log(input1);

let bulanmei = input1[3].split('/');
if( bulanmei[1] == '05') {
    console.log('mei');
}

let bulan = [ bulanmei[2], bulanmei[0], bulanmei[1] ];
console.log(bulan);

console.log( bulanmei.join('-'));

console.log(input1[1].slice(0, 15));

}

dataHandling2(input1);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */