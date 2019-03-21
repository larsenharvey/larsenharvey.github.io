//night mode script
var nightModeOn 		= false;
var NIGHT_MODE_COLOR 	= '#404040';
var NIGHT_MODE_FONT		= '#ffffff';
var REG_BG_COLOR 		= '#f2f2f2';
var REG_FONT			= '#282828';


function nightMode() {
	nightModeOn = !nightModeOn;
	if (nightModeOn) {
		document.getElementById("nightmode-icon").src = "images/nightMode2.png";
		document.getElementById("header-logo").src = "images/lhlogo_nightmode.png";
		document.body.style.backgroundImage = 'linear-gradient(#404040, #404040)';
		document.body.style.backgroundColor = NIGHT_MODE_COLOR;
		document.body.style.color = NIGHT_MODE_FONT;

		var headerLinks = document.getElementsByClassName('header-link');
		for (var i = 0; i < headerLinks.length; i++) {
			headerLinks[i].style.color = NIGHT_MODE_FONT;
			if (headerLinks[i].classList.contains('currentPg')) {
				headerLinks[i].style.border = '3px solid #ffffff';
			} else {
				headerLinks[i].style.border = '2px solid #ffffff';
			}
			headerLinks[i].style.backgroundColor = "transparent";
		}

		var portfolioImgs = document.getElementsByClassName('portfolio-caption');
		for (var i = 0; i < portfolioImgs.length; i++) {
			portfolioImgs[i].style.color = NIGHT_MODE_FONT;
		}

	} else {
		document.getElementById("nightmode-icon").src = "images/nightmode.png";
		document.getElementById("header-logo").src = "images/lhlogo.png";
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #f2f2f2)';
		document.body.style.backgroundColor = REG_BG_COLOR;
		document.body.style.color = REG_FONT;

		var headerLinks = document.getElementsByClassName('header-link');
		for (var i = 0; i < headerLinks.length; i++) {
			headerLinks[i].style.color = REG_FONT;
			if (headerLinks[i].classList.contains('currentPg')) {
				headerLinks[i].style.border = '3px solid #282828';
			} else {
				headerLinks[i].style.border = '2px solid #282828';
			}
			headerLinks[i].style.backgroundColor = "transparent";
		}

		var portfolioImgs = document.getElementsByClassName('portfolio-caption');
		for (var i = 0; i < portfolioImgs.length; i++) {
			portfolioImgs[i].style.color = REG_FONT;
		}


	}
}

// homepage links gradient hovering
function hoverHomeGradient(link) {
	link.style.color = '#ff6666';
	link.style.border = '3px solid #ff6666';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #ff9999)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #ff9999)';
	}
}

function hoverPortfolioGradient(link) {
	link.style.color = '#ffa64d';
	link.style.border = '2px solid #ffa64d';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #ffcc99)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #ffcc99)';
	}
}

function hoverAboutGradient(link) {
	link.style.color = '#66cc97';
	link.style.border = '2px solid #66cc97';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #b3e6cc)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #b3e6cc)';
	}
}

function hoverContactGradient(link) {
	link.style.color = '#4d88ff';
	link.style.border = '2px solid #4d88ff';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #ccddff)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #ccddff)';
	}
}

function mouseOffGradient(link) {
	if (link.classList.contains('currentPg')) {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.border = '3px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.border = '3px solid #282828';
		}
	} else {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.border = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.border = '2px solid #282828';
		}
	}
}

// all over nav links hovering

function hoverHome(link) {
	link.style.color = '#ff6666';
	if (link.classList.contains('currentPg')) {
		link.style.border = 'solid 3px #ff6666';
	} else {
		link.style.border = 'solid 2px #ff6666';
	}
}

function hoverPortfolio(link) {
	link.style.color = '#ffa64d';
	if (link.classList.contains('currentPg')) {
		link.style.border = 'solid 3px #ffa64d';
	} else {
		link.style.border = 'solid 2px #ffa64d';
	}
}

function hoverAbout(link) {
	link.style.color = '#66cc97';
	if (link.classList.contains('currentPg')) {
		link.style.border = 'solid 3px #66cc97';
	} else {
		link.style.border = 'solid 2px #66cc97';
	}
}

function hoverContact(link) {
	link.style.color = '#4d88ff';
	if (link.classList.contains('currentPg')) {
		link.style.border = 'solid 3px #4d88ff';
	} else {
		link.style.border = 'solid 2px #4d88ff';
	}
}

function mouseOff(link) {
	if (link.classList.contains('currentPg')) {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.border = '3px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.border = '3px solid #282828';
		}
	} else {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.border = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.border = '2px solid #282828';
		}
	}
}

var mail = document.getElementById("mail");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var angellist = document.getElementById("angellist");

function blurOthersButMail() {
	github.classList.add("blur");
	linkedin.classList.add("blur");
	angellist.classList.add("blur");
}

function blurOthersButGithub() {
	mail.classList.add("blur");
	linkedin.classList.add("blur");
	angellist.classList.add("blur");
}

function blurOthersButLinkedIn() {
	mail.classList.add("blur");
	github.classList.add("blur");
	angellist.classList.add("blur");
}

function blurOthersButAngellist() {
	mail.classList.add("blur");
	github.classList.add("blur");
	linkedin.classList.add("blur");
}

function removeBlurs() {
	mail.classList.remove("blur");
	github.classList.remove("blur");
	linkedin.classList.remove("blur");
	angellist.classList.remove("blur");
}
