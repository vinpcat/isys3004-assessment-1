/* Script grabbed from https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        container.style.background = "rgb(48, 48, 48)"; 
    } else {
        container.style.background = "rgb(255, 252, 208)";
    }
}