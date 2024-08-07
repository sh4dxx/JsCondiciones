let btnVerifica = document.getElementById("btnVerifica");
let parrafoMessage = document.getElementById("act2-message");

btnVerifica.addEventListener("click", () => {
    parrafoMessage.classList.add("error");
    let input1 = document.getElementById("act2-input-1");
    let input2 = document.getElementById("act2-input-2");
    let input3 = document.getElementById("act2-input-3");

    let totalItems = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
    console.log(totalItems);
    if (isNaN(totalItems)) {
        parrafoMessage.innerHTML = "Debes ingresar cantidad de tickets en todos las casillas";
        return;
    }

    if (totalItems <= 10) {
        parrafoMessage.innerHTML = "Llevas " + totalItems + " items";
        parrafoMessage.classList.remove("error");
        parrafoMessage.classList.add("success");
    } else {
        parrafoMessage.innerHTML = "Llevas demasiados stickers";
    }
});
