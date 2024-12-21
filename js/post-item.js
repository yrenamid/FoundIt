document.addEventListener('DOMContentLoaded', function () {
    const itemStatusSelect = document.getElementById('type');
    const descriptionLabel = document.getElementById('description-title');
    const descriptionField = document.getElementById('description');
    const locationLabel = document.querySelector('label[for="location"]');
    const dateLabel = document.querySelector('label[for="date"]');
    const locationInput = document.getElementById('location');
    const surrenderedToDiv = document.getElementById('surrenderedTo').parentElement; 
    
    
    if (itemStatusSelect.value === 'found') {
        surrenderedToDiv.style.display = 'block'; // Show "Surrendered To" for found items
    } else {
        surrenderedToDiv.style.display = 'none'; // Hide "Surrendered To" for lost items
    }


    itemStatusSelect.addEventListener('change', function () {
        if (itemStatusSelect.value === 'found') {
            // Update labels and placeholders for "Found" items
            descriptionLabel.textContent = 'Item Description';
            descriptionField.placeholder = "Short description of the found item...";
            locationLabel.textContent = 'Location Found';
            dateLabel.textContent = 'Date Found';

            // Show "Surrendered To" dropdown when the type is "found"
            surrenderedToDiv.style.display = 'block';
        } else {
            // Update labels and placeholders for "Lost" items
            descriptionLabel.textContent = 'Verification Question';
            descriptionField.placeholder = "What's something unique about your item that only you know?";
            locationLabel.textContent = 'Location Lost';
            dateLabel.textContent = 'Date Lost';

            // Hide "Surrendered To" dropdown when the type is "lost"
            surrenderedToDiv.style.display = 'none';
        }
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    const files = document.getElementById('images').files;
    console.log(files);  
    if (files.length === 0) {
        console.log('No files selected!');
    }
});

