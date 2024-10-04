document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-all-accordions");
    const accordions = document.querySelectorAll("details");
  
    toggleButton.addEventListener("click", () => {
      console.log("clicked");
      const shouldExpand = toggleButton.textContent === "expand all";
      accordions.forEach(details => details.open = shouldExpand);
      toggleButton.textContent = shouldExpand ? "collapse all" : "expand all";
    });
  });