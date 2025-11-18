function kasir(){
	//1. deklarasi variabel
	let a = parseFloat(document.getElementById("qty").value)||0;
	let b = parseFloat(document.getElementById("harga").value)||0;

	//2.proses
	let hasil =a*b;

	//3.cetak
	document.getElementById("hasil").innerText=hasil;
}