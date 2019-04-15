$('.header-slider').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});

const sliderTestimonials = document.getElementById("slider-testimonials");

sliderTestimonials.addEventListener("click", ()=>{
	let button = event.target;
	while(!button.classList.contains("arrow")) {
		if(button === document.documentElement) break
		button = button.parentNode;
	}
	if(!button.classList.contains("arrow")) return

	const activeSlide = sliderTestimonials.getElementsByClassName("testimonials-slider__slide_active")[0];

	function addActive(elem){
		activeSlide.classList.remove("testimonials-slider__slide_active");
		elem.classList.add("testimonials-slider__slide_active");
	}

	const nextElem = activeSlide.nextElementSibling;
	const previousElem = activeSlide.previousElementSibling;
	if(button.classList.contains("arrow-left") && previousElem.classList.contains("testimonials-slider__slide")){
		addActive(previousElem);
	}else if(button.classList.contains("arrow-right") && nextElem.classList.contains("testimonials-slider__slide")){
		addActive(nextElem);
	}
}, false);