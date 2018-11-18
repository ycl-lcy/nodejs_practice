var p1 = Snap("#post_1")
var p2 = Snap("#post_2")
var p3 = Snap("#post_3")
var h = Snap("#hidden-text")
console.log(h.attr("opacity"))
p2_y = p2.attr("y")
p3_y = p3.attr("y")
p1.select("rect").animate({
    height: 800
}, 1500, mina.easein)
h.animate({
    opacity: 1
}, 1500, mina.easein)
p2.animate({
    y: parseInt(p2_y)+600
}, 1500, mina.easein)
p3.animate({
    y: parseInt(p3_y)+600
}, 1500, mina.easein)

//var absoluteOffset = anime.timeline();

//absoluteOffset
	//.add({
		//targets: '#lineDrawing #timeline',
		//strokeDashoffset: [anime.setDashoffset, 0],
		//easing: 'easeInOutSine',
		//duration: 1000,
		//delay: function(el, i) { return i * 250 },
		//offset: 0
	//})
	//.add({
        //targets: '#lineDrawing .posts path',
		//strokeDashoffset: [anime.setDashoffset, 0],
		//easing: 'easeInOutSine',
		//duration: 1000,
		//delay: function(el, i) { return i * 250 },
		//offset: 1000
      //})
    //.add({
        //targets: '#hidden-text',
		//opacity: '0',
		//easing: 'easeInOutSine',
		//duration: 1000,
		//delay: function(el, i) { return i * 250 },
		//offset: 2000
      //})
    //.add({
        //targets: '#extend_down',
        //d: 'M250 450 L600 450 L600 650 L1400 650 L1400 450',
        //easing: 'easeInOutSine',
        //duration: 1000,
        //delay: function(el, i) { return i * 250 },
        //offset: 3000
      //})
    //.add({
        //targets: '#extend_up',
        //d: 'M250 450 L600 450 L600 350 L1400 350 L1400 650"',
        //easing: 'easeInOutSine',
        //stroke-dasharray:"2000",
        //duration: 1000,
        //delay: function(el, i) { return i * 250 },
        //offset: 3000
      /*});*/
