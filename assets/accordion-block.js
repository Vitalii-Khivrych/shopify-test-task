document.addEventListener("DOMContentLoaded", () => {
  const accordionContainer = document.querySelector("[data-allow-multiple]");

  if (accordionContainer) {
    const allowMultiple = accordionContainer.dataset.allowMultiple === "true";
    const items = accordionContainer.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");

      title.addEventListener("click", () => {
        const isExpanded = title.getAttribute("aria-expanded") === "true";

        if (!allowMultiple) {
          items.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherTitle = otherItem.querySelector(".accordion-title");
              const otherContent =
                otherItem.querySelector(".accordion-content");
              otherTitle.setAttribute("aria-expanded", "false");
              otherContent.setAttribute("hidden", "");
            }
          });
        }

        title.setAttribute("aria-expanded", !isExpanded);
        content.toggleAttribute("hidden");
      });
    });
  }
});
