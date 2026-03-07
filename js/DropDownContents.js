const dropdown = document.getElementById("menuButton");
const dropdownButton = document.getElementById("dropDownMenu");

dropdown.addEventListener("click", () => {
	dropdownButton.classList.toggle("show");
});

document.addEventListener("touchstart", (event) => {
	if (!dropdown.contains(event.target) && dropdown.classList.contains("show")) {
		dropdown.classList.remove("show");
	}
});
