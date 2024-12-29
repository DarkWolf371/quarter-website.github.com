document.getElementsByClassName("img-container-1")[0].addEventListener("mouseover", function () {
    let elem = document.getElementById("heading-1");
    elem.style.display = "block";
});
document.getElementsByClassName("img-container-1")[0].addEventListener("mouseout", function () {
    let elem = document.getElementById("heading-1");
    elem.style.display = "none"; 
});


document.getElementsByClassName("img-container-2")[0].addEventListener("mouseover", function () {
    let elem = document.getElementById("heading-2");
    elem.style.display = "block";
});
document.getElementsByClassName("img-container-2")[0].addEventListener("mouseout", function () {
    let elem = document.getElementById("heading-2");
    elem.style.display = "none";
});


document.getElementsByClassName("img-container-3")[0].addEventListener("mouseover", function () {
    let elem = document.getElementById("heading-3");
    elem.style.display = "block";
});
document.getElementsByClassName("img-container-3")[0].addEventListener("mouseout", function () {
    let elem = document.getElementById("heading-3");
    elem.style.display = "none";
});


document.getElementsByClassName("img-container-4")[0].addEventListener("mouseover", function () {
    let elem = document.getElementById("heading-4");
    elem.style.display = "block";
});
document.getElementsByClassName("img-container-4")[0].addEventListener("mouseout", function () {
    let elem = document.getElementById("heading-4");
    elem.style.display = "none";
});


//==============================================================================================

function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}