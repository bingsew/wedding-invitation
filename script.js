const envelope = document.querySelector(".envelope");
const seal = document.querySelector(".seal");
const letter = document.querySelector(".letter");
const garden = document.querySelector(".garden");

seal.addEventListener("click", function () {
	envelope.classList.toggle("open");

});

letter.addEventListener("click", function () {
	garden.classList.add("show");
	envelope.classList.add("hide");
	
});


