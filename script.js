// burger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

// sicak menu
"use strict";
let sicakIcecekler = [
	{"isim":"Çay1","fiyat":1+" ₺","icerik":"çay ve sıcak su","resim":"./images/Turkish_tea2.jpg"},
	{"isim":"Çay2","fiyat":2+" ₺","icerik":"çay ve sıcak su","resim":"./images/Turkish_tea2.jpg"},
	{"isim":"Çay3","fiyat":3+" ₺","icerik":"çay ve sıcak su","resim":"./images/Turkish_tea2.jpg"},
	{"isim":"Çay4","fiyat":4+" ₺","icerik":"çay ve sıcak su","resim":"./images/Turkish_tea2.jpg"},
]

let sicakMenu = document.getElementById("sıcak-menu");


for(let icecek of sicakIcecekler){
let sicakIceceklerEkleme =  `
<div  class="icecekler">
<div  class="cay">
	<span class="cay-img">
		<img src="${icecek.resim}" alt="${icecek.isim}">
	</span>
</div>
<div class="menus product-description-price">
	<span class="product">${icecek.isim}</span>
		<div class="descripton">${icecek.icerik}</div>
			<div class="price">${icecek.fiyat}</div>
</div>
</div>`;

sicakMenu.insertAdjacentHTML("beforeend",sicakIceceklerEkleme);
}