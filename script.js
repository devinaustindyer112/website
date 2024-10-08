function toggleSection(sectionToShow) {
  const sections = ["about", "writing", "projects"];

  sections.forEach((section) => {
    const div = document.getElementById(section);
    const link = document.getElementById(`link-${section}`);

    if (section === sectionToShow) {
      div.style.display = "block"; // Show the selected section
      link.classList.add("navigation-link-selected");
    } else {
      div.style.display = "none"; // Hide other sections
      link.classList.remove("navigation-link-selected");
    }
  });
}

document
  .getElementById("link-writing")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection("writing", this);
  });

document
  .getElementById("link-about")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection("about", this);
  });

document
  .getElementById("link-projects")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection("projects", this);
  });
