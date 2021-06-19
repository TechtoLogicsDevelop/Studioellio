
function scalerremove() {
	// var scalng = document.getElementsByClassName("logo_hv");
	$(document).click(function () {
		$('.logo_hv').removeClass('js-scrolling');
	});

}
main = function getFocus() {
	scalerremove();
	var main = document.getElementById("main");

	var about = document.getElementById("about");

	var contact = document.getElementById("contact");

	var work = document.getElementById("work");

	about.style.transition = "all 1s ease-in-out";

	about.style.transform = "translateX(0%)";

	about.style.marginLeft = "66.4%";

	contact.style.transition = "all 1s ease-in-out";

	contact.style.marginLeft = "75%";

	work.style.transition = "all 1s ease-in-out";

	work.style.marginLeft = "84%";

	contact.classList.add("change");

	main.style.transition = "all 1s ease-in-out";

	main.style.width = "70%";

}

function scaler() {
	// var scalng = document.getElementsByClassName("logo_hv");
	$(document).click(function () {
		$('.logo_hv').addClass('js-scrolling');
	});

}

about = function getFocus() {
	var scalng = document.getElementsByClassName("logo_hv");

	var main = document.getElementById("main");

	var about = document.getElementById("about");

	var contact = document.getElementById("contact");

	var work = document.getElementById("work");
	scaler();

	about.style.transition = "all 1s ease-in-out";

	about.style.transform = "translateX(0%)";

	about.style.marginLeft = "3%";

	about.style.overflowY = "scroll";

	contact.style.transition = "all 1s ease-in-out";

	contact.style.marginLeft = "90.90%";

	work.style.transition = "all 1s ease-in-out";

	work.style.marginLeft = "95.3%";

	contact.classList.add("change");

	main.style.transition = "all 1s ease-in-out";

}



contact = function getFocus() {

	var contact = document.getElementById("contact");
	scaler();
	var main = document.getElementById("main");

	var work = document.getElementById("work");

	var about = document.getElementById("about");

	about.style.transition = "all 1s ease-in-out";

	about.style.marginLeft = "3%";

	contact.style.transition = "all 1s ease-in-out";

	contact.style.transform = "translateX(0%)";

	contact.style.marginLeft = "6%";

	work.style.transition = "all 1s ease-in-out";

	work.style.transform = "translateX(0%)";

	work.style.marginLeft = "95.3%";

}



back = function getFocus() {

	var contact = document.getElementById("contact");

	// var main = document.getElementById("main");

	// var work = document.getElementById("work");

	var about = document.getElementById("about");

	console.log("hii");

	about.style.transition = "all 1s ease-in-out";

	about.style.marginLeft = "33%";

	contact.style.transition = "all 1s ease-in-out";

	contact.style.marginLeft = "86%";

}

work = function getFocus() {

	//document.getElementById("work").focus();
	scaler();
	var work = document.getElementById("work");

	var main = document.getElementById("main");

	work.style.transition = "all 2s ease-in-out";

	work.style.transform = "translateX(0%)";

	work.style.marginLeft = "0%";
	work.style.overflowY = "scroll";


}
worktest = function getFocus() {

	//document.getElementById("work").focus();

	var work = document.getElementById("work");

	var main = document.getElementById("main");

	work.style.transition = "all 2s ease-in-out";

	work.style.transform = "translateX(0%)";

	work.style.marginLeft = "0px";

}


mainSmall = function getFocus() {
	var main = document.getElementById("main");
	var about = document.getElementById("about");
	var contact = document.getElementById("contact");
	var work = document.getElementById("work");

	main.style.maxHeight = "100vh";
	main.style.height = "calc(100% - 210px)";
	main.style.transition = "all 1s ease-in-out";

	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateX(0%)";
	about.style.height = "70px";
	about.style.bottom = "140px";
	about.style.top = null;

	contact.style.transition = "all 1s ease-in-out";
	contact.style.height = "70px";
	contact.style.bottom = "70px";
	contact.style.top = null;

	work.style.transition = "all 1s ease-in-out";
	work.style.height = "70px";
	work.style.bottom = 0;
	work.style.top = null;

	contact.classList.add("change");
}

aboutSmall = function getFocus() {

	var main = document.getElementById("main");
	var about = document.getElementById("about");
	var contact = document.getElementById("contact");
	var work = document.getElementById("work");

	main.style.maxHeight = "100vh";

	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateY(0%)";
	about.style.height = "calc(100% - 210px)";
	about.style.overflowY = "auto";
	about.style.bottom = "140px";
	// about.style.top = "70px";

	contact.style.transition = "all 1s ease-in-out";
	contact.style.height = "70px";
	// contact.style.bottom = "70px";
	// contact.style.top = null;
	contact.style.overflowY = "hidden";

	work.style.transition = "all 1s ease-in-out";
	work.style.height = "70px";
	// work.style.bottom = 0;
	// work.style.top = null;
	work.style.overflowY = "hidden";

	main.style.transition = "all 1s ease-in-out";

}

contactSmall = function getFocus() {
	var contact = document.getElementById("contact");
	var main = document.getElementById("main");
	var work = document.getElementById("work");
	var about = document.getElementById("about");

	main.style.maxHeight = "100vh";

	about.style.transition = "all 1s ease-in-out";
	about.style.height = "70px";
	// about.style.bottom = "calc(100vh - 140px)";
	about.style.overflowY = "hidden";
	about.style.bottom = "calc(100% - 140px)";
	// about.style.top = "70px";

	contact.style.transform = "translateY(0%)";
	contact.style.height = "calc(100% - 210px)";
	contact.style.overflowY = "auto";
	// contact.style.bottom = 0;
	// contact.style.top = "140px";

	work.style.transition = "all 1s ease-in-out";
	work.style.transform = "translateY(0%)";
	// work.style.marginTop = "calc(100vh - 70px)";
}

workSmall = function getFocus() {

	var work = document.getElementById("work");
	var main = document.getElementById("main");
	var log = document.getElementById("se_icon");

	// var log1 = document.getElementsByClassName("work_logo");
	var arrow = document.getElementById("back_arrow");
	var lo = document.getElementsByClassName("wrkk");

	var work_resp1 = document.getElementById("work_resp1");

	main.style.maxHeight = "100vh";

	work.style.transition = "all 2s ease-in-out";
	work.style.transform = "translateY(0%)";
	work.style.height = "100%";
	work.style.overflowY = "auto";
	log.style.display = "block";

	arrow.style.display = "inline-flex";

	// work_resp.style.display = "none";
	$('#work .opp').addClass('hide-xs');
	$('.logo > a').removeClass('hide-xs');

	work_resp1.style.display = "none";

	log1.style.padding = "5px";
	// lo.style.display = "none";
}


var x = window.matchMedia("(min-width: 100px) and (max-width: 767px)");

function select() {
	if (x.matches) {
		aboutSmall();
	} else {
		about();
	}
}

Object.defineProperty(window, 'mobile', {
	get() {
		return window.innerWidth <= 767;
	}
})

function mainFunction() {
	if (mobile) {
		mainSmall();
	} else {
		main();
	}
}

// function back() {



// 	backslide();



// }

function aboutFunction() {

	if (mobile) {

		aboutSmall();

	} else {

		about();

	}

}



function contactFunction() {

	if (mobile) {

		contactSmall();

	} else {

		contact();

	}

}



function workFunction() {

	if (mobile) {

		workSmall();

	} else {

		work();

	}

}



filterSelection("all")

function filterSelection(c) {

	var x, i;

	x = document.getElementsByClassName("filterDiv");

	if (c == "all") c = "";

	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

	for (i = 0; i < x.length; i++) {

		w3RemoveClass(x[i], "show image");

		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show image");

	}

}



// Show filtered elements

function w3AddClass(element, name) {

	var i, arr1, arr2;

	arr1 = element.className.split(" ");

	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {

		if (arr1.indexOf(arr2[i]) == -1) {

			element.className += " " + arr2[i];

		}

	}

}



// Hide elements that are not selected

function w3RemoveClass(element, name) {

	var i, arr1, arr2;

	arr1 = element.className.split(" ");

	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {

		while (arr1.indexOf(arr2[i]) > -1) {

			arr1.splice(arr1.indexOf(arr2[i]), 1);

		}

	}

	element.className = arr1.join(" ");

}



// Add active class to the current control button (highlight it)

// var btnContainer = document.getElementById("nav");

// var btns = btnContainer.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {

// 	btns[i].addEventListener("click", function () {

// 		var current = document.getElementsByClassName("active");

// 		current[0].className = current[0].className.replace("active", "");

// 		this.className += " active";

// 	});

// }



filterSelection("all")

function filterSelection(c) {

	var x, i;

	x = document.getElementsByClassName("filterDiv");

	if (c == "all") c = "";

	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

	for (i = 0; i < x.length; i++) {

		w3RemoveClass(x[i], "show image");

		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show image");

	}

}



// Show filtered elements

function w3AddClass(element, name) {

	var i, arr1, arr2;

	arr1 = element.className.split(" ");

	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {

		if (arr1.indexOf(arr2[i]) == -1) {

			element.className += " " + arr2[i];

		}

	}

}



// Hide elements that are not selected

function w3RemoveClass(element, name) {

	var i, arr1, arr2;

	arr1 = element.className.split(" ");

	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {

		while (arr1.indexOf(arr2[i]) > -1) {

			arr1.splice(arr1.indexOf(arr2[i]), 1);

		}

	}

	element.className = arr1.join(" ");

}



// Add active class to the current control button (highlight it)

// var btnContainer = document.getElementById("nav");

// var btns = btnContainer.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {

// 	btns[i].addEventListener("click", function () {

// 		var current = document.getElementsByClassName("active");

// 		current[0].className = current[0].className.replace(" active", "");

// 		this.className += " active";

// 	});

// }















































