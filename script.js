const openingScreen =
    document.getElementById("openingScreen");

const envelope =
    document.getElementById("envelope");

const waxSeal =
    document.getElementById("waxSeal");

const gardenScene =
    document.getElementById("gardenScene");


let invitationOpened = false;


waxSeal.addEventListener("click", openInvitation);


function openInvitation() {

    if (invitationOpened) {
        return;
    }

    invitationOpened = true;


    /*
       Step 1:
       Open envelope.
    */

    openingScreen.classList.add("opened");


    /*
       Step 2:
       Give the guest time to see the card.

       The letter begins rising after about
       0.7 seconds and the wording appears
       shortly afterwards.
    */

    setTimeout(() => {

        gardenScene.classList.add("visible");

        openingScreen.classList.add("leave");

    }, 4300);

}
