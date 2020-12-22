import Swiper, {Autoplay} from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	let slider = new Swiper('.slider', {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 1,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1170: {
				slidesPerView: 2,
			}
		}
	})
});