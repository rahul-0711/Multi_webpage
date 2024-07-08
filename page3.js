document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.pagination button:first-child');
    const nextButton = document.querySelector('.pagination button:last-child');
    const pageSpan = document.querySelector('.pagination span');

    let currentPage = 1;

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            pageSpan.textContent = currentPage;
        }
    });

    nextButton.addEventListener('click', () => {
        currentPage++;
        pageSpan.textContent = currentPage;
    });
});
