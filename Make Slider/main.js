document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne");
    let slider = document.querySelector(".slider-img");
    let leftArrow = document.querySelector(".leftOne");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    } else {
        console.error("One or more elements are missing from the DOM.");
    }
});
