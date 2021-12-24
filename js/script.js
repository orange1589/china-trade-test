$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
	});
});

window.onload = function () {

	let requestContainer = document.querySelector('.request-main');
	let galleryContainer = document.querySelector('.images-galery');
	let processesContainer = document.querySelector('.circles-processes');

	document.addEventListener('scroll', () => {
		galleryImage();
		backgroundRequest();
	});

	backgroundRequest();
	galleryImage();

	function backgroundRequest() {
		let targetPosition = {
			top: window.pageYOffset + requestContainer.getBoundingClientRect().top,
			left: window.pageXOffset + requestContainer.getBoundingClientRect().left,
			right: window.pageXOffset + requestContainer.getBoundingClientRect().right,
			bottom: window.pageYOffset + requestContainer.getBoundingClientRect().bottom
		},
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

		if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom &&
			targetPosition.right > windowPosition.left &&
			targetPosition.left < windowPosition.right) {
			document.querySelector('.request-main__background_img').classList.add('_active-bg-request');
		};
	}
	function galleryImage() {
		let targetPosition = {
			top: window.pageYOffset + galleryContainer.getBoundingClientRect().top,
			left: window.pageXOffset + galleryContainer.getBoundingClientRect().left,
			right: window.pageXOffset + galleryContainer.getBoundingClientRect().right,
			bottom: window.pageYOffset + galleryContainer.getBoundingClientRect().bottom
		},
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

		if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom &&
			targetPosition.right > windowPosition.left &&
			targetPosition.left < windowPosition.right) {
			document.querySelector('.images-galery__item_1').classList.add('_active-img_1');
			document.querySelector('.images-galery__item_2').classList.add('_active-img_2');
			document.querySelector('.images-galery__item_3').classList.add('_active-img_3');
		};
	}

	document.querySelector('.circles-processes').addEventListener('wheel', function (event) {
		if (event.deltaMode == event.DOM_DELTA_PIXEL) {
			var modifier = 1;
			// иные режимы возможны в Firefox
		} else if (event.deltaMode == event.DOM_DELTA_LINE) {
			var modifier = parseInt(getComputedStyle(this).lineHeight);
		} else if (event.deltaMode == event.DOM_DELTA_PAGE) {
			var modifier = this.clientHeight;
		}
		if (event.deltaY != 0) {
			// замена вертикальной прокрутки горизонтальной
			this.scrollLeft += modifier * event.deltaY;
			event.preventDefault();
		}
	});
}