document.addEventListener('DOMContentLoaded', function () {
    let itemStatusSelect = document.getElementById('type');
    const descriptionLabel = document.querySelector('label[for="description"]');
    let descriptionField = document.getElementById('description');
    let locationLabel = document.querySelector('label[for="location"]');
    let dateLabel = document.querySelector('label[for="date"]');
    let locationInput = document.getElementById('location');
    let phoneField = document.getElementById('phone');
    let emailField = document.getElementById('email');
    let surrenderedToDiv = document.getElementById('surrenderedToDiv');

    // hide/show felds
    function updateFormBasedOnType() {
        // kung gi select is claimed or disposed
        if (['claimed', 'disposed'].includes(itemStatusSelect.value)) {
            // Change labels for "location" and "date" fields
            if (itemStatusSelect.value === 'claimed') {
                locationLabel.textContent = 'Location Claimed';
                dateLabel.textContent = 'Date Claimed';
            } else if (itemStatusSelect.value === 'disposed') {
                locationLabel.textContent = 'Location Disposed';
                dateLabel.textContent = 'Date Disposed';
            }

            // Hide phone, email, and surrenderedTo fields
            phoneField.closest('div').style.display = 'none';
            emailField.closest('div').style.display = 'none';
            if (surrenderedToDiv) {
                surrenderedToDiv.style.display = 'none';
            }
        } else {
            
            if (itemStatusSelect.value === 'found') {
                locationLabel.textContent = 'Location Found';
                dateLabel.textContent = 'Date Found';
                // Show surrenderedTo field when 'found' is selected
                if (surrenderedToDiv) {
                    surrenderedToDiv.style.display = 'block';
                }
            } else {
                locationLabel.textContent = 'Location Lost';
                dateLabel.textContent = 'Date Lost';
                
                if (surrenderedToDiv) {
                    surrenderedToDiv.style.display = 'none';
                }
            }


            phoneField.closest('div').style.display = 'block';
            emailField.closest('div').style.display = 'block';
        }
    }

    itemStatusSelect.addEventListener('change', updateFormBasedOnType);

    updateFormBasedOnType();
});
