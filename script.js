// burger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// sicak menu
"use strict";
let sicakIcecekler = [
  {"isim": "Çay1","fiyat": 1 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay2","fiyat": 2 + " ₺","icerik": "çay ve sıcak su","resim": "./images/galeriResim1.jpg",},
  {"isim": "Çay3","fiyat": 3 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay4","fiyat": 4 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg"},
];
let sogukIcecekler = [
  {"isim": "Çay1","fiyat": 1 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay2","fiyat": 2 + " ₺","icerik": "çay ve sıcak su","resim": "./images/galeriResim1.jpg",},
  {"isim": "Çay3","fiyat": 3 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay4","fiyat": 4 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg"},
];
let atistirmaliklar = [
  {"isim": "Çay1","fiyat": 1 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay2","fiyat": 2 + " ₺","icerik": "çay ve sıcak su","resim": "./images/galeriResim1.jpg",},
  {"isim": "Çay3","fiyat": 3 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg",},
  {"isim": "Çay4","fiyat": 4 + " ₺","icerik": "çay ve sıcak su","resim": "./images/Turkish_tea2.jpg"},
];


let sicakMenu     = document.getElementById("sıcak-menu");
let sogukMenu     = document.getElementById("soguk-menu");
let atistirmaMenu = document.getElementById("atistirma-menu");

for (let icecekSicak of sicakIcecekler) {
  let sicakIceceklerEkleme = `
    <div  class="icecekler">
      <div  class="cay">
        <span class="menus menus-img">
          <img src="${icecekSicak.resim}" alt="${icecekSicak.isim}" class="icecek-resim">
        </span>
      </div>
        <div class="product-description-price">
	        <span class="product">${icecekSicak.isim}</span>
		        <div class="description">${icecekSicak.icerik}</div>
			        <div class="price">${icecekSicak.fiyat}</div>
      </div>
    </div>`;

  sicakMenu.insertAdjacentHTML("beforeend", sicakIceceklerEkleme);
}

for (let icecekSoguk of sogukIcecekler) {
  let sogukIceceklerEkleme = `
    <div  class="icecekler">
      <div  class="cay">
        <span class="menus menus-img">
          <img src="${icecekSoguk.resim}" alt="${icecekSoguk.isim}" class="icecek-resim">
        </span>
      </div>
        <div class="product-description-price">
	        <span class="product">${icecekSoguk.isim}</span>
		        <div class="description">${icecekSoguk.icerik}</div>
			        <div class="price">${icecekSoguk.fiyat}</div>
      </div>
    </div>`;

  sogukMenu.insertAdjacentHTML("beforeend", sogukIceceklerEkleme);
}

for (let atistirma of atistirmaliklar) {
  let atistirmalikEkleme = `
    <div  class="icecekler">
      <div  class="cay">
        <span class="menus menus-img">
          <img src="${atistirma.resim}" alt="${atistirma.isim}" class="icecek-resim">
        </span>
      </div>
        <div class="product-description-price">
	        <span class="product">${atistirma.isim}</span>
		        <div class="description">${atistirma.icerik}</div>
			        <div class="price">${atistirma.fiyat}</div>
      </div>
    </div>`;
    atistirmaMenu.insertAdjacentHTML("beforeend", atistirmalikEkleme);
  }
  //
  //
  /* Bu bar beni sikecek */
/* Bu bar beni sikecek */
/* Bu bar beni sikecek */
// Get the container element
var btnContainer = document.getElementById("scrt");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("scrolling-kartlar");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



