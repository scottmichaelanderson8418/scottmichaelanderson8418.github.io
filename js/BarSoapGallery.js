var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

// Get all image elements within the "img-gallery" class
var imageGallery = document.querySelector(".img-gallery");
var images = imageGallery.querySelectorAll("img");

// Keep track of the current image index
var currentImageIndex = 0;

function openFullImg(pic) {
	fullImgBox.style.display = "flex";

	fullImg.src = pic;
}

function closeFullImg() {
	fullImgBox.style.display = "none";
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeFullImg();
		console.log("Escape key pressed");
	} else if (event.key === "ArrowRight") {
		// Move to the next image
		currentImageIndex++;

		// Check if we reached the end of the image list
		if (currentImageIndex >= images.length) {
			currentImageIndex = 0; // Loop back to the first image
		}

		openFullImg(images[currentImageIndex].src);
	} else if (event.key === "ArrowLeft") {
		// Move to the previous image
		currentImageIndex--;

		// Handle negative index by going to the last image
		if (currentImageIndex < 0) {
			currentImageIndex = images.length - 1;
		}

		openFullImg(images[currentImageIndex].src);
	}
});
