const envelope = document.getElementById("envelope");
const waxSeal = document.getElementById("waxSeal");

waxSeal.addEventListener("click", function () {
    envelope.classList.add("open");
});
