// Get the search input field, button, and items
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const items = document.querySelectorAll('.item');

// Function to filter items based on search input
const searchItems = () => {
    const query = searchInput.value.toLowerCase();

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
};

// Add event listener to the search button
searchButton.addEventListener('click', searchItems);

// Optionally, you can also search as you type
searchInput.addEventListener('input', searchItems);
