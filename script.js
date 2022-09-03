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


"use strict";
let sicakIcecekler = [
	{"alt":"Çay1","fiyat":1},
	{"alt":"Çay2","fiyat":2},
	{"alt":"Çay3","fiyat":3},
	{"alt":"Çay4","fiyat":4},
]

let sicakMenu = document.getElementById("sıcak-menu");


for(let icecek of sicakIcecekler){
let sicakIceceklerEkleme =  `
<div  class="icecekler">
<div  class="cay">
	<span class="cay-img">
		<img src="./images/Turkish_tea2.jpg" alt="${icecek.alt}">
	</span>
</div>
<div class="menus product-description-price">
	<span class="product">${icecek.alt}</span>
		<div class="descripton">Şu amk çayını 2dk sonra getirin</div>
			<div class="price">${icecek.fiyat}</div>
</div>
</div>`;

sicakMenu.insertAdjacentHTML("beforeend",sicakIceceklerEkleme);
}