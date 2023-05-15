var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
	greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17)
	greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24)
	greet = "Good Evening";
	
document.getElementById("greetings").innerHTML = '<code style="color:#013289;">' + greet + '</code>';

const select = (el, all = false) => {
	el = el.trim()
	if (all) {
		return [...document.querySelectorAll(el)]
	}
	else {
		return document.querySelector(el)
	}
}

const typed = select(".typed")	
if (typed) {
	let typed_strings = typed.getAttribute("data-typed-items")
	typed_strings = typed_strings.split(",")
	new Typed(".typed", {
		strings: typed_strings,
		loop: true,
		typeSpeed: 100,
		backSpeed: 80,
		backDelay: 2000
	});
}

const advocacyLightbox = GLightbox ({
	selector: ".advocacy-lightbox"
});

const glightbox = GLightbox ({
	selector: ".glightbox"
});

let backtotop = select("back-to-top")
	if(backtotop) {
		const toggleBacktotop = () => {
			if(window.scrollY > 100) {
				backtotop.classList.add("active")
			}
			else {
				backtotop.classList.remove("active")
			}
		}
		window.addEventListener("load", toggleBacktotop)
		onscroll(document, toggleBacktotop)
	}

let preloader = select('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}

AOS.init();