// ===== NAVBAR SHADOW ON SCROLL =====

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
    } else {
        header.style.boxShadow = "none";
    }
});


// ===== BOOK A TABLE BUTTON =====

const bookingButton = document.querySelector(".contact-section .btn");

bookingButton.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Thank you! Table booking feature will be available soon.");
});


// ===== FOOD CARD HOVER EFFECT =====

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });

});