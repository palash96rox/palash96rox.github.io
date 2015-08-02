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
	$('#fb').on('click', function () {window.open("https://www.facebook.com/palash.96");});
	$('#cv').on('click', function () {window.open("./static/Resume.pdf");});
	$('#insta').on('click', function () {window.open("https://instagram.com/palash_a/");});
	$('#skype').on('click', function () {window.open("SkypeID: palash.agarwal27");});
	$('#linkedin').on('click', function () {window.open("https://www.linkedin.com/in/palash27a");});
	$('#twitter').on('click', function () {window.open("https://twitter.com/palash96_a");});
	$('#gmail').on('click', function () {window.open("http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=palash.agarwal.96@gmail.com");});
	$('#github').on('click', function () {window.open("https://github.com/palash96rox");});
	//Blog: $('#wait').on('click', function () {window.open("");};
}

/**
 * Sets the event listeners for Google Analytics
 */
function setTrackers () {
	$('#fb').on('click', function() {ga('send', 'event', 'button', 'click', 'Facebook');console.log("Sent");});
	$('#cv').on('click', function() {ga('send', 'event', 'button', 'click', 'Resume');console.log("Sent");});
	$('#insta').on('click', function() {ga('send', 'event', 'button', 'click', 'Instagram');console.log("Sent");});
	$('#skype').on('click', function() {ga('send', 'event', 'button', 'click', 'SkypeID');console.log("Sent");});
	$('#linkedin').on('click', function() {ga('send', 'event', 'button', 'click', 'LinkedIn');console.log("Sent");});
	$('#twitter').on('click', function() {ga('send', 'event', 'button', 'click', 'Twitter');console.log("Sent");});
	$('#gmail').on('click', function() {ga('send', 'event', 'button', 'click', 'Email');console.log("Sent");});
	$('#github').on('click', function() {ga('send', 'event', 'button', 'click', 'GitHub');console.log("Sent");});
	//$('#wait').on('click', function() {ga('send', 'event', 'button', 'click', 'Egg - Blog');});
}

/**
 * Initializes the page
 */
function initialize () {
	logWelcome();
	setLinks();
	setTrackers();
}

// Start of index.js
window.onload = initialize;