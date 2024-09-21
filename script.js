//Toggle nav menu on mobile screens
function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}


// Modal pop-up it helps to expand & retrieve 
function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block"; // To display it in block element
}


function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // To hide the element 
}


// Accordion Functionality
// Picking all th CSS selector all at once
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
    
    // It listen the event which is `click` and provided function will be executed whenever the button is clicked 
    button.addEventListener("click", function () {

        //`this` is refer to the element being clicked 
        //This is assumed to be the content panel that should be shown or hidden
        const content = this.nextElementSibling;

        content.style.display = 
            content.style.display === "block" ? "none" : "block";

        //toggle is used to add or remove the `active` class
        this.classList.toggle("active");
    });

});