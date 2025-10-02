document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector("#nav-bar");

    navButton.addEventListener("click", () => {
        navBar.classList.toggle("show");
    });

    const filterButtons = document.querySelectorAll(".course-filters button");
    const courseCards = document.querySelectorAll(".course-card");

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

    function displayCourseDetails(course) {
        courseDetails.innerHTML = '';
        courseDetails.innerHTML = `
            <button id="closeModal"> ❌</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Certificate</strong>: ${course.certificate}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
        courseDetails.showModal();
        closeModal.addEventListener("click", () => {
            courseDetails.close();
        })
    }

    courseDiv.addEventListener('click', () => {
        displayCourseDetails(course);
    });
});
