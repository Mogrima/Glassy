var basketLink = document.querySelector(".basket-button");
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

			if (basketLink.classList.contains("modal-show")) {
				basketLink.classList.remove("modal-show");
				overClose.classList.remove("modal-show");
			}
		}
	});