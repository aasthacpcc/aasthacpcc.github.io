// Project Links – students should replace with their own URLs
const assignmentLinks = {
  htmlProject: "assignment1/index.html",
  colorTheory: "colorTheory/index.html",
  typography: "typography/index.html",
  imageEditing: "image-editing/index.html",
  figma: "https://www.figma.com/proto/your-prototype-link",
  wordpress: "https://yourwordpresssite.wordpress.com",
  googleSites: "https://sites.google.com/view/your-google-site"
};

// Add click behavior to buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-assignment]").forEach(btn => {
    const key = btn.getAttribute("data-assignment");
    btn.addEventListener("click", () => {
      window.open(assignmentLinks[key], "_blank");
    });
  });
});
