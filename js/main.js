const menuButton = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".navigation");
const menuOverlay = document.querySelector(".menu-overlay");
const closeButton = document.querySelector(".close-icon");

menuButton.addEventListener("click", () => {
	console.log("test");
	navigationMenu.classList.toggle("open");
	menuOverlay.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
	navigationMenu.classList.toggle("open");
	menuOverlay.classList.toggle("open");
});
