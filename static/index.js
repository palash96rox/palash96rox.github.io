/** **/

/**
 * Logs welcome message onto the console
 */
function logWelcome() {
	console.log("Welcome to my website!");
	console.log("Thanks a lot to Font-Awesome: http://fortawesome.github.io/Font-Awesome/")
}

/**
 * Sets the links for various social profiles
 */
function setLinks() {
	document.getElementById("fb").onclick = function () {window.open("https://www.facebook.com/palash.96");};
	document.getElementById("cv").onclick = function () {window.open("./static/Resume.pdf");};
	document.getElementById("insta").onclick = function () {window.open("https://instagram.com/palash_a/");};
	document.getElementById("skype").onclick = function () {window.open("SkypeID: palash.agarwal27");};
	document.getElementById("linkedin").onclick = function () {window.open("https://www.linkedin.com/in/palash27a");};
	document.getElementById("twitter").onclick = function () {window.open("https://twitter.com/palash96_a");};
	document.getElementById("gmail").onclick = function () {window.open("http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=palash.agarwal.96@gmail.com");};
	document.getElementById("github").onclick = function () {window.open("https://github.com/palash96rox");};
	//Blog: document.getElementById("wait").onclick = function () {window.open("");};
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