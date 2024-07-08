document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.pagination button:first-of-type');
    const nextButton = document.querySelector('.pagination button:last-of-type');
    const pageNumber = document.querySelector('.pagination span');
    let currentPage = 1;

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            pageNumber.textContent = currentPage;
            // Add functionality to fetch and display previous page data
        }
    });

    nextButton.addEventListener('click', function() {
        currentPage++;
        pageNumber.textContent = currentPage;
        // Add functionality to fetch and display next page data
    });
});
