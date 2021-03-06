var loginLink = document.querySelector(".header-buttons__btn--login");
var modalLogin = document.querySelector(".modal-login");
var overClose = document.querySelector(".overlay");
var login = modalLogin.querySelector("[name=email]");
var password = modalLogin.querySelector("[name=password]");
var storage = localStorage.getItem("login");

loginLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalLogin.classList.add("modal-show");
		overClose.classList.add("modal-show");
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

overClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalLogin.classList.remove("modal-show");
		modalSearch.classList.remove("modal-show");
		overClose.classList.remove("modal-show");
		modalLogin.classList.remove("modal-error");
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (modalLogin.classList.contains("modal-show")) {
				modalLogin.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
				modalLogin.classList.remove("modal-error");
				
			}
		}
	});

var searchLink = document.querySelector(".header-buttons__btn--search");
var modalSearch = document.querySelector(".modal-search");
var searchInput = document.querySelector(".main-search-input");

searchLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalSearch.classList.add("modal-show");
		overClose.classList.add("modal-show");
		searchInput.focus();
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (modalSearch.classList.contains("modal-show")) {
				modalSearch.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
				
			}
		}
	});

var feedbackLink = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".feedback-wrapp");
var feedbackClose = document.querySelector(".modal-close");
var feedbackInput = document.querySelector(".feedback-form-input-name");
var darkOverlay = document.querySelector(".overlay--dark");


feedbackLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalFeedback.classList.add("modal-show");
		darkOverlay.classList.add("modal-show");
		feedbackInput.focus();
	});

feedbackClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
		darkOverlay.classList.remove("modal-show");
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (modalFeedback.classList.contains("modal-show")) {
				modalFeedback.classList.remove("modal-show");
				darkOverlay.classList.remove("modal-show");
			}
		}
	});

darkOverlay.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
		modalLogin.classList.remove("modal-error");
		darkOverlay.classList.remove("modal-show");
	});

var basketLink = document.querySelector(".header-buttons__btn--basket");
var basketPopup = document.querySelector(".modal-goods");

 basketLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		/*basketPopup.classList.add("modal-show");
		overClose.classList.add("modal-show");*/
});

