document.addEventListener('DOMContentLoaded', function () {
    const itemStatusSelect = document.getElementById('type');
    const descriptionLabel = document.getElementById('description-title');
    const descriptionField = document.getElementById('description');
    const locationLabel = document.querySelector('label[for="location"]');
    const dateLabel = document.querySelector('label[for="date"]');
    const locationInput = document.getElementById('location');
    
    // Create "Surrendered To" options sa HTML
    const additionalOptionsDiv = document.createElement('div');
    additionalOptionsDiv.innerHTML = `
        <label for="surrenderedTo" class="block text-sm font-medium text-gray-700">Surrendered To</label>
        <select id="surrenderedTo" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select an option</option>
            <option value="SAO Office">Surrendered to SAO Office</option>
            <option value="Guard House">Surrendered to Guard House</option>
        </select>
    `;

    // Add or remove the additional dropdown when the type changes
    itemStatusSelect.addEventListener('change', function () {
        if (itemStatusSelect.value === 'found') {
            // Update labels
            descriptionLabel.textContent = 'Item Description';
            descriptionField.placeholder = "Short description of the found item...";
            locationLabel.textContent = 'Location Found';
            dateLabel.textContent = 'Date Found';

            // Only insert if not already present
            if (!document.getElementById('surrenderedTo')) {
                locationInput.parentElement.parentElement.insertAdjacentElement('afterend', additionalOptionsDiv);
            }
        } else if (itemStatusSelect.value === 'lost') {
            // Revert labels for lost items
            descriptionLabel.textContent = 'Verification Question';
            descriptionField.placeholder = "What's something unique about your item that only you know?";
            locationLabel.textContent = 'Location Lost';
            dateLabel.textContent = 'Date Lost';

            // Remove the "Surrendered To" dropdown if present
            const surrenderedToSelect = document.getElementById('surrenderedTo');
            if (surrenderedToSelect) {
                surrenderedToSelect.closest('div').remove(); // Remove the parent div of the "Surrendered To" dropdown
            }
        }
    });

    // Trigger the change event on page load to set the initial state
    itemStatusSelect.dispatchEvent(new Event('change'));
});
