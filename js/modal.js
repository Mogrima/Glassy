/*	Объявляю необходимые переменные для личного кабинета*/

	var link = document.querySelector(".login-link");
	var popup = document.querySelector(".modal-login");
	/*var close = document.querySelector(".modal-close");*/
	var overClose = document.querySelector(".overlay");
	var form = popup.querySelector(".login-form");
	var login = popup.querySelector("[name=email]");
	var password = popup.querySelector("[name=password]");
	var storage = localStorage.getItem("login");

	var search = document.querySelector(".search-button");
	var searchForm = document.querySelector(".modal-search");
	var searchInput = document.querySelector(".main-search-input");
	var searchClose = document.querySelector(".search-close");

	var feedback = document.querySelector(".feedback-button");
	var feedbackModal = document.querySelector(".feedback-wrapp");
	var feedbackClose = document.querySelector(".modal-close");

/*Функции для всплывания окна с личным кабинетом, его закрытия*/

	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		overClose.classList.add("modal-show");
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

	/*close.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		overClose.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});*/

	overClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		overClose.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		searchForm.classList.remove("modal-show");
	});

	form.addEventListener("submit", function(evt) {
		if (!login.value || !password.value) {
			evt.preventDefault();
			popup.classList.add("modal-error");
		} else {
			/*if (isStorageSupport) {
				localStorage.setItem("login", login.value);
			}*/
			localStorage.setItem("login", login.value);
		}
		
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
				searchForm.classList.remove("modal-show");
				popup.classList.remove("modal-error");
				
			}
		}
	});

	search.addEventListener("click", function(evt) {
		evt.preventDefault();
		searchForm.classList.add("modal-show");
		overClose.classList.add("modal-show");
		searchInput.focus();
	});

	searchClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		searchForm.classList.remove("modal-show");
		overClose.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (searchForm.classList.contains("modal-show")) {
				searchForm.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
				
			}
		}
	});

	feedback.addEventListener("click", function(evt) {
		evt.preventDefault();
		feedbackModal.classList.add("modal-show");
	});

	feedbackClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		feedbackModal.classList.remove("modal-show");
		feedbackModal.remove("modal-error");
	});