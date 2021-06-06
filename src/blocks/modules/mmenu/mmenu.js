import Mmenu from 'mmenu-js';

document.addEventListener("DOMContentLoaded", () => {
	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		"theme-dark"
		],
		"navbar": {
			title: header
		},
		"navbars": [
		{
			"position": "bottom",
			"content": [phone],
		},
		{
			"position": "bottom",
			"content": [adressLink],
		}
		]
	});
});