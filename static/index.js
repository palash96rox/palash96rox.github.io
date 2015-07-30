/** **/

/**
 * Logs welcome message onto the console
 */
function logWelcome() {
	console.log("Welcome to the website!");
	console.log("Check me out on GitHub: https://github.com/palash96rox");
	console.log("Check me out on Facebook: https://www.facebook.com/palash.96");
	console.log("Check me out on LinkedIn: https://www.linkedin.com/in/palash27a");
	console.log("Check me out on Twitter: https://twitter.com/palash96_a");
}

/**
 * Sets the links for various social profiles
 */
function setLinks() {
	document.getElementById("fb").onclick = function () {
		var n = window.open("https://www.facebook.com/palash.96", "_blank");
		n.focus();
	};
	document.getElementById("whatsapp").onclick = function () {
		document.getElementById("whatsapp").innerHTML = "<i class='fa fa-whatsapp'></i>  +919833910070";
	};
	document.getElementById("insta").onclick = function () {
		var n = window.open("https://instagram.com/palash_a/", "_blank");
		n.focus();
	};
	document.getElementById("skype").onclick = function () {
		document.getElementById("skype").innerHTML = "<i class='fa fa-skype'></i>  palash.agarwal27"
	};
	document.getElementById("linkedin").onclick = function () {
		var n = window.open("https://www.linkedin.com/in/palash27a", "_blank");
		n.focus();
	};
	document.getElementById("twitter").onclick = function () {
		var n = window.open("https://twitter.com/palash96_a", "_blank");
		n.focus();
	};
	document.getElementById("gmail").onclick = function () {
		var n = window.open("http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=palash.agarwal.96@gmail.com", "_blank");
		n.focus();
	};
	document.getElementById("github").onclick = function () {
		var n = window.open("https://github.com/palash96rox", "_blank");
		n.focus();
	};
}

/**
 * Initializes the page
 */
function initialize () {
	logWelcome();
	setLinks();
}

// Start of index.js
window.onload = initialize;