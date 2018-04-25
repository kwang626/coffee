$(document).ready(function () {
	$(".content-card").addClass("darken");

// jQuery Function Number 1
	$(".content-card").hover(function () {
		// jQuery Function Number 2
		$(this).removeClass("darken");
		// jQuery Function Number 3 
		$(this).addClass("brighten");
	}, function () {
		$(this).removeClass("brighten");
		$(this).addClass("darken");
	});

	$("#navbar-about").hover(function () {
		$(this).css("background-color", "#F5F1ED");
		$(this).css("color", "#472A22");
	}, function () {
		$(this).css("background-color", "#472A22");
		$(this).css("color", "#F5F1ED");

	});

});

