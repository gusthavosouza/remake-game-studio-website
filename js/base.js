//window.onload = function() {
//
//	var scroll = $(window).scrollTop();
//
//	if (scroll >= 250) {
//		$(".navbar").addClass("menu-normal");
//	} else {
//		$(".navbar").removeClass("menu-normal");
//	}
//
//	$(window).scroll(function() {
//		var scroll = $(window).scrollTop();
//
//		if (scroll >= 250) {
//			$(".navbar").addClass("menu-normal");
//		} else {
//			$(".navbar").removeClass("menu-normal");
//		}
//	});
//};

function smoothScroll(id){document.getElementById(id).scrollIntoView({block:'start',behavior:'smooth'})}