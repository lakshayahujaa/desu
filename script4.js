

const modalButton = document.getElementById('modalButton');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');



/* ... Other JavaScript code ... */



// ... Other JavaScript code ...

// Display the modal on page load
window.addEventListener('load', () => {
    modalOverlay.style.display = 'flex';
});

// Open the modal when the open button is clicked
const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close the modal when the modal overlay (background) is clicked
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
