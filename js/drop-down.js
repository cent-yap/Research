function toggleDropdown() {
    const dropdown = document.getElementById('dropdownList');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.closest('.use')) {
        const dropdown = document.getElementById('dropdownList');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
}