const myImage = document.getElementById("banner");

function checkWindowSize() {
	if (window.innerWidth <= 450) {
		myImage.src = "../SOAP_PICS/BANNERS_JPG/banner-mobile.jpeg";
	} else {
		myImage.src = "../SOAP_PICS/BANNERS_JPG/BANNERS_12.jpeg";
	}
}

// Initial check on page load
checkWindowSize();

// Check on window resize
window.addEventListener("resize", checkWindowSize);
