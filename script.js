var items = document.getElementsByClassName("item");

for(var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", addFlip);
}

function addFlip(event) {
	var event = event || window.event;

	var target = event.target;

	if( !target.closest(".item.flip")) {
		target.closest(".item").classList.add("flip");
		return;
	}


	target.closest(".item").classList.remove("flip");
	

	console.log("vvv");
}