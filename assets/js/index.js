let isBorder = false;
let imgBorder = document.getElementById("img-borde");
imgBorder.addEventListener("click", () => {
    if (!isBorder) {
        imgBorder.style.border = "solid red 2px";
        isBorder = true;
    } else {
        imgBorder.style.border = "none";
        isBorder = false;
    }
});
