document.addEventListener("DOMContentLoaded", () => {
    // === Hamburger Menu ===
    const navButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector("#nav-bar");

    navButton.addEventListener("click", () => {
        navBar.classList.toggle("show");
    });

    // === Course Filters ===
    const filterButtons = document.querySelectorAll(".course-filters button");
    const courses = document.querySelectorAll(".course-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            courses.forEach(course => {
                if (filter === "all" || course.dataset.category === filter) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });

            // highlight active filter
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
