document.querySelectorAll(".accordion-button").forEach(acc => {
    acc.addEventListener("click", () => {
        document.querySelectorAll(".accordion-panel").forEach(panel => {
            panel.classList.remove("accordion-panel-toggle");
        });
        const accordionPanel = acc.nextElementSibling;
        accordionPanel.classList.toggle("accordion-panel-toggle");
    });
});
