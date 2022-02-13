$(document).ready(function () {
    $('.draw-border').each(function () {
        $(this).html('<span class="icon">' + $(this).html() + '</span><span class="circle"><span><em></em></span><span><em></em></span></span>');
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

$(document).ready(function () {
    var button = document.createElement("button");
    button.innerText = "More..";
    button.style.display = "block";
    button.style.transform = "translate(0%, -400%)";
    button.style.fontFamily = "Verdana";
    button.style.fontSize = "1em";
    button.style.opacity = ".4";
    button.style.borderRadius = "10%";
    button.style.border = "grooved";
    button.style.cursor = "pointer";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
});

var minVal = 0, maxVal = 10, clicks = 0;

function countUp() {
    var display = document.getElementById("Ammount");
    clicks = Math.min(maxVal, clicks + 1);
    display.innerHTML = clicks;
}

function countDown() {
    var display = document.getElementById("Ammount");
    clicks = Math.max(minVal, clicks - 1);
    display.innerHTML = clicks;
}




