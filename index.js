// Get the search input field and content container
const searchInput = document.getElementById('searchInput');
const contentDiv = document.getElementById('content');

// Predefined items to search from
const items = [
    'Bubbles',
    'Explosive Clicks',
    'Rainbow Strobe',
    'Emoji Rain',
    'Click Light',
    'Change Every Word'
];

// Function to dynamically populate the content
const displayItems = (filteredItems) => {
    contentDiv.innerHTML = ''; // Clear previous results

    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item;
        contentDiv.appendChild(div);
    });
};

// Function to filter items based on search input
const searchItems = () => {
    const query = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(query));
    displayItems(filteredItems); // Display filtered results
};

// Initial display of all items
displayItems(items);

// Event listener for input changes to search as you type
searchInput.addEventListener('input', searchItems);
