/*
Code By : M.Hudzaifah Assyahid
mail : muhammadhudzaifahassyahid5@gmail.com
github : https://github.com/hudzzz01

Code menghitung gaji karyawan serta memutuskan menabung atau tidak, tugas kuliah
code to calculate emplaye salary and make dasition for save money or not, course homework

*/

function HitungMenabung(nama,jamKerjaKaryawan,pengeluaran){

    //jam kerja john
    //working hours john
        //var jamKerjaKaryawan = 52
    var pendapatanMingguIni
        //var pengeluaran = 600000
    var print

    //peraturan standar gaji dan uang lembur
    //standart regulation employes salary
    const gajiNormalPerjam = 15000
    const gajiLemburPerjam = gajiNormalPerjam+gajiNormalPerjam/2

    //penghitungan gaji dan uang lembur karyawan
    //calculation employe salary and overtime working salary
    if(jamKerjaKaryawan > 40){
        //pisahkan jam kerja lembur dan normal
        //slice standart salary and overtime salary
        pendapatanMingguIni = ((jamKerjaKaryawan-40)*gajiLemburPerjam)+((jamKerjaKaryawan = 40)*gajiNormalPerjam)
    }else{
        pendapatanMingguIni = jamKerjaKaryawan*gajiNormalPerjam
    }

    //keputusan menabung
    //desition for save money
    if(pendapatanMingguIni>pengeluaran){
        print = `${nama} Bisa menabung dengan tabungan sebesar Rp.${String(pendapatanMingguIni-pengeluaran)}`
    }else if(pendapatanMingguIni == pengeluaran){
        print = `${nama} tidak bisa menabung karena sisa uang Rp.${pendapatanMingguIni-pengeluaran}`
    }else{
        print = `${nama} cari tambahan karena minus Rp.${pendapatanMingguIni-pengeluaran}`
    }

    return print

}

function parsing(){
    let nama2 = document.getElementById('nama').value
    let nama = document.getElementById('nama').value
    let week = document.getElementById('jamKerja').value
    let pengeluaran = document.getElementById('pengeluaran').value
    let hasil = document.getElementById("hasil").innerHTML = HitungMenabung(nama,week,pengeluaran)
    
}



//console.log(nama,week,pengeluaran)