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
    	targets: '#lineDrawing .lines path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1000,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: false,
		offset: 1000
  	});

