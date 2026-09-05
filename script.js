// ===== NAVBAR SCROLL EFFECT =====

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 3px 15px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});


// ===== PROJECT BUTTON MESSAGE =====

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        if (button.getAttribute("href") === "#") {
            event.preventDefault();

            alert("Project link will be added soon!");
        }

    });

});