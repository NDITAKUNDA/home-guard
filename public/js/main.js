// Code to make the cards on the home oage be clickable
var clickableForms = document.getElementsByClassName("clickableForm");
for (var i = 0; i < clickableForms.length; i++) {
    clickableForms[i].addEventListener("click", function () {
        this.submit();
    });
}

// To make the navbar clickable 
document.addEventListener("DOMContentLoaded", function() {
    var label_1 = document.querySelector('.label_1');
    label_1.addEventListener("click", function() {
        window.location.href = "/"; 
    });
    var label_2 = document.querySelector('.label_2');
    label_2.addEventListener("click", function() {
        window.location.href = "/services"; 
    });
    var label_3 = document.querySelector('.label_3');
    label_3.addEventListener("click", function() {
        window.location.href = "/notifications"; 
    });
});

// Check if the current URL contains "/services"
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes("/services")) {
        var servicesRadio = document.getElementById("tab2");
        servicesRadio.checked = true;
    }
    if (window.location.href.includes("/notifications")) {
        var servicesRadio = document.getElementById("tab3");
        servicesRadio.checked = true;
    }});

// Code that changes the state of the device (On/Off)
document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector('.theme-checkbox');
    const form = document.querySelector('.clickableForm');
    checkbox.addEventListener('change', function() {
        form.submit();
    });
});
