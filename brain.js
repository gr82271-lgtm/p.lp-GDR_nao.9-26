const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('is-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.querySelector('.menu-icon').textContent = isOpen ? '×' : '+';
	});

	siteNav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			siteNav.classList.remove('is-open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.querySelector('.menu-icon').textContent = '+';
		});
	});
}

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
