var absoluteOffset = anime.timeline();

absoluteOffset
	.add({
		targets: '#lineDrawing #timeline',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1000,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: false,
		offset: 0
	})
	.add({
    	targets: '#lineDrawing .posts path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1000,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: false,
		offset: 1000
  	})
    .add({
    	targets: '#lineDrawing .posts .extend',
        d: 'M250 450 L600 450 L600 650 L1400 650 L1400 450',
		easing: 'easeInOutSine',
		duration: 1000,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: false,
		offset: 2000
  	});
