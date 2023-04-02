let slideIndex = 0;
let slides = [
	// array of slide data will be added here
];

// render current slide
function renderSlide() {
	let slideContainer = document.getElementById("slide-container");
	let currentSlide = slides[slideIndex];
	if (currentSlide) {
		slideContainer.innerHTML = currentSlide.content;
	} else {
		slideContainer.innerHTML = "<h2>End of Presentation</h2>";
	}
}

// go to next slide
function nextSlide() {
	if (slideIndex < slides.length - 1) {
		slideIndex++;
		renderSlide();
	}
}

// go to previous slide
function prevSlide() {
	if (slideIndex > 0) {
		slideIndex--;
		renderSlide();
	}
}

// initialize app
function initApp() {
	renderSlide();
	let nextButton = document.getElementById("next-slide");
	nextButton.addEventListener("click", nextSlide);
	let prevButton = document.getElementById("prev-slide");
	prevButton.addEventListener("click", prevSlide);
}

// load slides from server
function loadSlides() {
	// make an AJAX request to server to load slides
	// and add them to the `slides` array
	// example code:
	slides = [
		{ content: "<h2>Slide 1</h2><p>This is the first slide.</p>" },
		{ content: "<h2>Slide 2</h2><p>This is the second slide.</p>" },
		{ content: "<h2>Slide 3</h2><p>This is the third slide.</p>" }
	];
}

// load slides and initialize app on page load
window.addEventListener("load", function() {
	loadSlides();
	initApp();
	console.log("PowerPoint web app loaded successfully!");
});
