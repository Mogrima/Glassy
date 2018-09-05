var basketLink = document.querySelector(".header-buttons__btn--basket");
var overClose = document.querySelector(".overlay");
var modalTableBasket = document.querySelector(".modal-goods");

 basketLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalTableBasket.classList.add("modal-show");
		overClose.classList.add("modal-show");
	});

 overClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalTableBasket.classList.remove("modal-show");
		overClose.classList.remove("modal-show");
	});
 
 window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (modalTableBasket.classList.contains("modal-show")) {
				modalTableBasket.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
			}
		}
	});