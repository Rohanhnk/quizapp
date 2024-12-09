const categorySelect = document.getElementById('categories');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (event) => {
    // Prevent form submission (if it's inside a form)
    event.preventDefault();

    // Store the selected category ID in localStorage
    const selectedCategoryId = categorySelect.value; // Get the selected category ID
    localStorage.setItem('selectedCategoryId', selectedCategoryId); // Store in localStorage
    
    // Redirect to the game page
    window.location.href = '/game.html'; // Navigate to the game page
});
