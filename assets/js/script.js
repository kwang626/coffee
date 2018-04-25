$(document).ready(function() {

	let phone = 0;
	let address = 0;
	let hours = 0;
	
	// jQuery Function Number 4
	$("#phone-number").hide();
	$("#hours").hide();
	$("#address").hide();

	// jQuery Function Number 5
	$("#phone-number-button").click(function() {
		if (phone == 0) {
			$("#address").hide();
			$("#hours").hide();
			$("#address-button").css("background-color", "#F5F1ED");
			$("#address-button").css("color", "#472A22");
			$("#hours-button").css("background-color", "#F5F1ED");
			$("#hours-button").css("color", "#472A22");
			address = 0;
			hours = 0;
			$("#phone-number").fadeIn();
			phone = 1;
		} else {
			$("#phone-number").fadeOut();
			phone = 0;
		}
	});

	$("#address-button").click(function() {
		if (address == 0) {
			$("#hours").hide();
			$("#phone-number").hide();
			$("#hours-button").css("background-color", "#F5F1ED");
			$("#hours-button").css("color", "#472A22");
			$("#phone-number-button").css("background-color", "#F5F1ED");
			$("#phone-number-button").css("color", "#472A22");
			hours = 0;
			phone = 0;
			$("#address").fadeIn();
			address = 1;
		} else {
			$("#address").fadeOut();
			address = 0;
		}
	});

	$("#hours-button").click(function() {
		if (hours == 0) {
			$("#address").hide();
			$("#phone-number").hide();
			$("#address-button").css("background-color", "#F5F1ED");
			$("#address-button").css("color", "#472A22");
			$("#phone-number-button").css("background-color", "#F5F1ED");
			$("#phone-number-button").css("color", "#472A22");
			address = 0;
			phone = 0;
			$("#hours").fadeIn();
			hours = 1;
		} else {
			$("#hours").fadeOut();
			hours = 0;
		}
	});

	$("#phone-number-button").hover(function () {
		// jQuery Function Number 6
		$(this).css("background-color", "#472A22");
		$(this).css("color", "#F5F1ED");
	}, function () {
		if (phone == 0) {
			$(this).css("background-color", "#F5F1ED");
			$(this).css("color", "#472A22");
		}
	})

	$("#address-button").hover(function () {
		$(this).css("background-color", "#472A22");
		$(this).css("color", "#F5F1ED");
	}, function () {
		if (address == 0) {
			$(this).css("background-color", "#F5F1ED");
			$(this).css("color", "#472A22");
		}
	})

	$("#hours-button").hover(function () {
		$(this).css("background-color", "#472A22");
		$(this).css("color", "#F5F1ED");
	}, function () {
		if (hours == 0) {
			$(this).css("background-color", "#F5F1ED");
			$(this).css("color", "#472A22");
		}
	})

	$("#back").hover(function () {
		$(this).css("background-color", "#472A22");
		$(this).css("color", "#F5F1ED");
	}, function () {
		$(this).css("background-color", "#F5F1ED");
		$(this).css("color", "#472A22");

	})




});