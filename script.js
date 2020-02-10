//night mode script
var nightModeOn 		= false;
var NIGHT_MODE_COLOR 	= '#404040';
var NIGHT_MODE_FONT		= '#ffffff';
var REG_BG_COLOR 		= '#f2f2f2';
var REG_FONT			= '#4d4d4d';
var HEADER_UNDERLINE_COLOR = '#cccccc';
var HEADER_UNDERLINE_COLOR_CURRENT_PG = '#595959';

function activateDesign() {
	var designBtn = document.getElementById("design-button");
	var devBtn = document.getElementById("development-button");
	var designSkills = document.getElementById("design-skills-icons");
	var devSkills = document.getElementById("development-skills-icons");	
		devBtn.classList.remove("skills-active");
		devBtn.classList.add("skills-inactive");
		designBtn.classList.remove("skills-inactive");
		designBtn.classList.add("skills-active");

		devSkills.style.display = "none";
		designSkills.style.display = "inline-block";

}

function activateDevelopment() {
	var designBtn = document.getElementById("design-button");
	var devBtn = document.getElementById("development-button");
	var designSkills = document.getElementById("design-skills-icons");
	var devSkills = document.getElementById("development-skills-icons");	
		designBtn.classList.remove("skills-active");
		designBtn.classList.add("skills-inactive");
		devBtn.classList.remove("skills-inactive");
		devBtn.classList.add("skills-active");

		devSkills.style.display = "inline-block";
		designSkills.style.display = "none";
}

// for footer images
function hoverImg(element, imgId) {
  	element.setAttribute('src', 'images/footer/' + imgId + '-light.png');
}

function unhoverImg(element, imgId) {
  	element.setAttribute('src', 'images/footer/' + imgId + '-dark.png');
}


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
				headerLinks[i].style.borderBottom = '2px solid #ffffff';
			} else {
				headerLinks[i].style.borderBottom = '2px solid #ffffff';
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
				headerLinks[i].style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR;
			} else {
				headerLinks[i].style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR;
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
	link.style.borderBottom = '2px solid #ff6666';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #ff9999)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #ff9999)';
	}
}

function hoverPortfolioGradient(link) {
	link.style.color = '#ffa64d';
	link.style.borderBottom = '2px solid #ffa64d';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #ffcc99)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #ffcc99)';
	}
}

function hoverAboutGradient(link) {
	link.style.color = '#66cc97';
	link.style.borderBottom = '2px solid #66cc97';
	if (nightModeOn) {
		document.body.style.backgroundImage = 'linear-gradient(#404040, #b3e6cc)';
	} else {
		document.body.style.backgroundImage = 'linear-gradient(#f2f2f2, #b3e6cc)';
	}
}

function hoverContactGradient(link) {
	link.style.color = '#4d88ff';
	link.style.borderBottom = '2px solid #4d88ff';
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
			link.style.borderBottom = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR_CURRENT_PG;
		}
	} else {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.borderBottom = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR;
		}
	}
}

// all over nav links hovering

function hoverHome(link) {
	link.style.color = '#ff6666';
	if (link.classList.contains('currentPg')) {
		link.style.borderBottom = 'solid 2px #ff6666';
	} else {
		link.style.borderBottom = 'solid 2px #ff6666';
	}
}

function hoverPortfolio(link) {
	link.style.color = '#ffa64d';
	if (link.classList.contains('currentPg')) {
		link.style.borderBottom = 'solid 2px #ffa64d';
	} else {
		link.style.borderBottom = 'solid 2px #ffa64d';
	}
}

function hoverAbout(link) {
	link.style.color = '#66cc97';
	if (link.classList.contains('currentPg')) {
		link.style.borderBottom = 'solid 2px #66cc97';
	} else {
		link.style.borderBottom = 'solid 2px #66cc97';
	}
}

function hoverContact(link) {
	link.style.color = '#4d88ff';
	if (link.classList.contains('currentPg')) {
		link.style.borderBottom = 'solid 2px #4d88ff';
	} else {
		link.style.borderBottom = 'solid 2px #4d88ff';
	}
}

function mouseOff(link) {
	if (link.classList.contains('currentPg')) {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.borderBottom = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR_CURRENT_PG;
		}
	} else {
		if (nightModeOn) {
			link.style.color = NIGHT_MODE_FONT;
			link.style.borderBottom = '2px solid #ffffff';
		} else {
			link.style.color = REG_FONT;
			link.style.borderBottom = '2px solid ' + HEADER_UNDERLINE_COLOR;
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

function filterWork(identifier) {
	var allWork = document.getElementsByClassName('work-img-div');
	var uiWork = document.getElementsByClassName('ui-filter');
	var clientWork = document.getElementsByClassName('client-filter');
	var studentWork = document.getElementsByClassName('student-filter');

	var allBtn = document.getElementById('filter-all');
	var uiBtn = document.getElementById('filter-ui');
	var clientBtn = document.getElementById('filter-client');
	var studentBtn = document.getElementById('filter-student');

	if (identifier == "all") {
		showWork(allWork);
		removeClass('filter-btn-selected');
		allBtn.classList.add('filter-btn-selected');
	} else if (identifier == "ui") {
		hideWork(allWork);
		showWork(uiWork);
		removeClass('filter-btn-selected');
		uiBtn.classList.add('filter-btn-selected');
	} else if (identifier == "client") {
		hideWork(allWork);
		showWork(clientWork);
		removeClass('filter-btn-selected');
		clientBtn.classList.add('filter-btn-selected');
	} else if (identifier == "student") {
		hideWork(allWork);
		showWork(studentWork);
		removeClass('filter-btn-selected');
		studentBtn.classList.add('filter-btn-selected');
	}
}

function removeClass(className) {
	document.getElementById('filter-all').classList.remove(className);
	document.getElementById('filter-ui').classList.remove(className);
	document.getElementById('filter-client').classList.remove(className);
	document.getElementById('filter-student').classList.remove(className);
}

function hideWork(classIdentifier){
	for (var i = 0; i < classIdentifier.length; i++) {
		classIdentifier[i].style.display = "none";
	}
}
function showWork(classIdentifier){
	for (var i = 0; i < classIdentifier.length; i++) {
		classIdentifier[i].style.display = "inline-block";
	}
}

/*SLIDESHOW*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
