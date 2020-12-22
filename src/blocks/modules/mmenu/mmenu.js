import Mmenu from 'mmenu-js';

document.addEventListener("DOMContentLoaded", () => {
	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		"theme-dark"
		],
		"navbar": {
			title: 'Балтрегион'
		},
		"navbars": [
		{
			"position": "bottom",
			"content": [
			"<a href='" + phone + "' class='mmenu__text'>" + phone + "</a>"
			]
		},
		{
			"position": "bottom",
			"content": [
			"<a href='" + adressLink + "' class='mmenu__text'>" + adress + "</a>"
			]
		}
		]
	});
});