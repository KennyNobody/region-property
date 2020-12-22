document.addEventListener('DOMContentLoaded', function() {
	(function toggleAgreement() {
		let form = document.querySelectorAll('.form');

		for (let i = 0; i < form.length; i++) {
			toggle(form[i]);
		}

		function toggle(item) {
			let input = item.querySelector('.form__accept-input');
			let button = item.querySelector('button');

			if (input && button) {
				toggleClass(input, button);
				input.addEventListener('change', function() {
					toggleClass(input, button);
				})
			}
		}

		function toggleClass(input, button) {
			if (input.checked) {
				button.classList.remove('btn--disabled');
			} else {
				button.classList.add('btn--disabled');
			}
		}
	})();
});