const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const namee = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;

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

document.getElementById("submitButton").onclick = function sendMail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "cafepavese@gmail.com",
		Password: "qjzowphebbakaplq",
		To: "denizakkuzu45@gmail.com",
		From: "cafepavese@gmail.com",
		Subject: "This is the subject",
		Body:
			"Name : " +
			namee +
			" <br> Email : " +
			email +
			" <br> Telefon Numarası : " +
			phone +
			" <br> Mesaj : " +
			message,
	}).then(() => alert("mail gönderildi"));
};
