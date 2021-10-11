let cursor = document.querySelector(".cursor");
let mainName = document.querySelector(".mainName");
let infoCards = document.querySelector(".parentInfoCards");
let endText = document.querySelector(".parentAboutMe");

document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;

    if (
        x >= window.innerWidth - 5 ||
        x <= 3 ||
        y >= window.innerHeight - 3 ||
        y <= 3
    ) {
        cursor.style.visibility = "hidden";
    } else {
        cursor.style.visibility = "visible";

        cursor.style.left = x - 25 / 2 + "px";
        cursor.style.top = y - 25 / 2 + "px";
    }

    //// console.log("Cursor: " + x + " | " + y);
    //// console.log("Window: " + window.innerHeight + " | " + window.innerWidth);
});

document.addEventListener("mousedown", function (e) {
    cursor.style.transform = "scale(0.8)";
});

document.addEventListener("mouseup", function (e) {
    cursor.style.transform = "scale(1)";
});

document.addEventListener("scroll", function (e) {
    let scrollPosition = window.scrollY;

    let persToUp = scrollPosition / 300;
    let persToUpTemp1 = persToUp * 2000;
    let scrollManip1 = 1 - scrollPosition / 300;

    console.log(parseInt(scrollPosition) + " --> " + persToUp);

    document.querySelector(".bgLogoImg").style.width =
        persToUpTemp1 + 80 + "vh";

    document.querySelector(".startName").style.opacity = 1 - persToUp * 1.5;
    document.querySelector(".span1").style.margin =
        10 + scrollPosition / 2 + "px";
    document.querySelector(".span2").style.margin =
        10 + scrollPosition / 2 + "px";
    document.querySelector(".span3").style.margin =
        10 + scrollPosition / 2 + "px";
    document.querySelector(".span4").style.margin =
        10 + scrollPosition / 2 + "px";

    if (scrollPosition >= 200) {
        if (scrollPosition < 400) {
            infoCards.style.visibility = "visible";
            infoCards.style.opacity = 1;
        } else {
            infoCards.style.visibility = "hidden";
            infoCards.style.opacity = 0;
        }
    } else {
        infoCards.style.visibility = "hidden";
        infoCards.style.opacity = 0;
    }

    if (scrollPosition >= 400) {
        endText.style.visibility = "visible";
        endText.style.opacity = 1;
    } else {
        endText.style.visibility = "hidden";
        endText.style.opacity = 0;
    }
});
