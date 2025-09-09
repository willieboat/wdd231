document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector("#nav-bar");

    // Toggle nav on small screens
    navButton.addEventListener("click", () => {
        navBar.classList.toggle("show");
    });

    const filterButtons = document.querySelectorAll(".course-filters button");
    const courseCards = document.querySelectorAll(".course-card");

    // Filtering logic
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            courseCards.forEach(course => {
                if (filter === "all" || course.dataset.category === filter) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Highlight completed courses
    document.querySelectorAll(".course-card").forEach(card => {
        if (card.textContent.includes("WDD 130") ||
            card.textContent.includes("WDD 131") ||
            card.textContent.includes("CSE 110") ||
            card.textContent.includes("CSE 210")) {
            card.classList.add("completed");
        }
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

});
