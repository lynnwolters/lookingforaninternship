document.querySelectorAll("main section:nth-of-type(5) ul li button").forEach(accordion => {
    accordion.addEventListener("click", () => {
        const accordionPanel = accordion.nextElementSibling;
        if (accordionPanel.classList.contains("accordion-toggle")) {
            accordionPanel.classList.remove("accordion-toggle");
        } else {
            document.querySelectorAll("main section:nth-of-type(5) ul li div").forEach(panel => {
                panel.classList.remove("accordion-toggle");
            });
            accordionPanel.classList.add("accordion-toggle");
        }
    });
});
