document.getElementById("category-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const categorySelect = document.getElementById("categories");
    const selectedCategoryId = categorySelect.value;

    // Store selected category ID in localStorage
    localStorage.setItem("selectedCategoryId", selectedCategoryId);

    // Redirect to the game page
    window.location.href = "/game.html";
});
