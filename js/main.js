let $body,
	windowHeight,
	windowWidth,
	stickyEl,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	$totalPrice,
	$inputConfigurator;
const win = document.body;

$(document).ready(function ($) {
	$body = $("body");
	pageWidget(["index"]);
	pageWidget(["product"]);
	pageWidget(["config"]);
	pageWidget(["team"]);
	getAllClasses("html", ".elements_list");
	modal();
	changeStateColor();

	$inputConfigurator = $(".js-price-trigger");
	$totalPrice = $(".config_total__price p");

	let startPrice = $(".config_var__item input:checked").siblings("label");
	$totalPrice.text(startPrice.data("price"));

	$inputConfigurator.on("click", function () {
		console.log(this.dataset.price);
		$totalPrice.text(this.dataset.price);
	});
});

const initPhoneMask = () => {
	const $phone = document.querySelectorAll(".js-phone-mask input");

	const maskOptions = {
		mask: "+{7}(000)000-00-00",
	};

	$phone.forEach((item) => {
		let mask = IMask(item, maskOptions);
	});
};

const popupFancy = () => {
	Fancybox.bind('[data-fancybox="video-gallery"]', {
		groupAttr: false,
	});

	Fancybox.bind('[data-fancybox="gallery"]', {});
	Fancybox.bind('[data-fancybox="gallery-agreement"]', {});
};

$(window).on("load", function () {
	const testCards = gsap.timeline();
	initPhoneMask();
	popupFancy();
});

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

function succes(success) {
	$(success).toggleClass("active");
	setTimeout(function () {
		$(success).removeClass("active");
	}, 3000);
}

function failed(failed) {
	$(failed).toggleClass("active");
	setTimeout(function () {
		$(failed).removeClass("active");
	}, 3000);
}

function modal() {
	let popup = document.querySelectorAll(".popup");
	let btnArray = document.querySelectorAll(".trigger");

	btnArray.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target;
			popup.forEach((el) => {
				if (el.dataset.id == path) {
					isOpen(el);
				}
			});
		});
	});

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll(".remove");
		remove.forEach((el) => {
			el.addEventListener("click", (e) => {
				isRemove(pop);
			});
		});
	});
}

function isOpen(popup) {
	document.body.classList.add("fixed");
	popup.classList.add("active");
}

function isRemove(popup) {
	popup.classList.remove("active");
	document.body.classList.remove("fixed");
}

const advSlider = new Swiper(".adv-slider", {
	navigation: {
		nextEl: ".adv_next",
		prevEl: ".adv_prev",
	},
	pagination: {
		el: ".adv-pugination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1000: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1400: {
			slidesPerView: 2.4,
			spaceBetween: 40,
		},
	},
});

const gallerySlider = new Swiper(".gallery-slider", {
	loop: true,
	speed: 500,
	centeredSlides: true,
	centeredSlidesBounds: true,
	navigation: {
		nextEl: ".gallery_next",
		prevEl: ".gallery_prev",
	},
	pagination: {
		el: ".gallery-pugination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1400: {
			slidesPerView: 1.5,
			spaceBetween: 40,
		},
	},
});

const singleGallerySlider = new Swiper(".productSingle_gallery", {
	loop: true,
	speed: 500,
	navigation: {
		nextEl: ".single-gallery_next",
		prevEl: ".single-gallery_prev",
	},
	pagination: {
		el: ".productSingle_pugination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1000: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});

function accordion(title, content) {
	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();

	$(accordionTitle).on("click", function () {
		let $this = $(this);
		$this
			.parent()
			.toggleClass("active_mod")
			.siblings()
			.removeClass("active_mod");
		$(accordionContent).slideUp();

		if (!$this.next().is(":visible")) {
			$this.next().slideDown();
		}
	});
}

accordion(".faq_main__itemHead", ".faq_main__itemContent");

function changeStateColor() {
	let otherColorBtn = document.querySelector(".config_other__color");
	let checkListArr = document.querySelectorAll('input[name="moto-color"]');

	checkListArr.forEach((itemCheck) => {
		itemCheck.addEventListener("change", () => {
			if (itemCheck.checked) {
				otherColorBtn.classList.remove("active");
			}
		});
	});
	if (otherColorBtn) {
		otherColorBtn.addEventListener("click", (e) => {
			if (otherColorBtn.classList.contains("active")) {
				otherColorBtn.classList.remove("active");
			} else {
				otherColorBtn.classList.add("active");
				checkListArr.forEach((item) => {
					item.checked = false;
				});
			}
		});
	}
}

document.querySelectorAll(".scroll-wrapper").forEach((el) => {
	new SimpleBar(el, {
		autoHide: false,
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const loader = document.querySelector(".loader_w");
	setTimeout(() => {
		loader.classList.add("complete");
	}, 500);
});

// Для реализации картинки в 360 можно использовать этот плагин https://github.com/scaleflex/js-cloudimage-360-view
