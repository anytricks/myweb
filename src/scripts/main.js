// Main
$(document).ready(function () {
	// Phần Slider phia tren
	$('.home_slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		animateOut: 'bounceInRight',
		smartSpeed: 1000
	
	});
	});
	////
		/// Slider-clients
	////
	$(document).ready(function () {
		// Phần Slider
		$('.home_clients .owl-carousel').owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			loop:true,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:false,
			navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			responsive: {
				// breakpoint from 480 up
				480: {
					items: 2,
				},
				// breakpoint from 768 up
				768: {
					items: 4,
				},
				// breakpoint from 992 up
				992: {
					items: 5,
				}
			}
		});
	});
	