(() => {
	const header = document.querySelector('.site-header');
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');

	if (!header || !toggle || !nav) {
		return;
	}

	const setOpen = (open) => {
		header.classList.toggle('is-open', open);
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
	};

	setOpen(false);

	toggle.addEventListener('click', () => {
		setOpen(!header.classList.contains('is-open'));
	});

	nav.addEventListener('click', (event) => {
		const link = event.target.closest('a');
		if (!link) {
			return;
		}
		if (window.innerWidth <= 820) {
			setOpen(false);
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 820) {
			setOpen(false);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setOpen(false);
		}
	});
})();
