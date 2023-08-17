// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', function() {
	// let body=document.querySelector('body');
	if (document.documentElement.classList.contains('touch')) {
		let arrow=document.querySelectorAll('.arrow');
		for (let i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];
	
			thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function(){
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	}	
});



