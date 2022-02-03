function changeImg() {
    var image = document.getElementById('toggler');
    if (image.src.match("/images/icon-hamburger.svg")) {
        image.src = "/images/icon-close.svg";
    }
    else {
        image.src = "/images/icon-hamburger.svg";
    }
}