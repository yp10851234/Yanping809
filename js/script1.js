new fullpage('#fullpage', {
	autoScrolling: true,
	navigation: true,
	scrollingSpeed: 900,
	slidesNavigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const title = section.querySelector('h1');
        const paragraph = section.querySelector('p');
		const tl = new TimelineMax({ delay: 0.5 });
		if (destination.index === 0 && document.querySelector('.home') != null) {
                const slm = section.querySelector('.scroll-to-learn-more');
                slm.classList.add('show-nothing');
                tl.fromTo(title, 0.7, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
			    .fromTo(paragraph, 1.0, { y: '50', x: '100', opacity: 0 }, { y: '-50%', x: '-50%', opacity: 1 }, "-=0.5");
		}
		else {
			tl.fromTo(title, 0.7, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
			.fromTo(paragraph, 1.0, { y: '50', x: '100', opacity: 0 }, { y: '0%', x: '0%', opacity: 1 }, "-=0.5");
        }
		
    }
})