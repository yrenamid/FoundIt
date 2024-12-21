document.addEventListener('DOMContentLoaded', () => {
    // Add User Modal
    const addUserModal = document.getElementById('addUserModal');
    const addUserButton = document.getElementById('addUserButton');
    const closeAddUserModal = document.getElementById('closeAddUserModal');
    const cancelAddUserModal = document.getElementById('cancelAddUserModal');

    addUserButton.addEventListener('click', () => {
        addUserModal.classList.remove('hidden');
    });

    closeAddUserModal.addEventListener('click', () => {
        addUserModal.classList.add('hidden');
    });

    cancelAddUserModal.addEventListener('click', () => {
        addUserModal.classList.add('hidden');
    });

    // Edit User Modal
    const editUserButtons = document.querySelectorAll('.edit-user-button');
    const editUserModal = document.getElementById('editUserModal');
    const closeEditUserModal = document.getElementById('closeEditUserModal');
    const cancelEditUserModal = document.getElementById('cancelEditUserModal');

    // Open Edit User Modal
    editUserButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get user data from the button's data attributes
            let userId = button.getAttribute('data-user-id');
            let userName = button.getAttribute('data-user-name');
            let userEmail = button.getAttribute('data-user-email');
            let userPhone = button.getAttribute('data-user-phone');
            let userRole = button.getAttribute('data-user-role');

            // Fill the form fields inside the modal
            document.getElementById('editUserId').value = userId;
            document.getElementById('editFullName').value = userName;
            document.getElementById('editEmail').value = userEmail;
            document.getElementById('editPhone').value = userPhone;
            document.getElementById('editRole').value = userRole;

            // Show the modal
            editUserModal.classList.remove('hidden');
        });
    });

    // Close the modal when the close button is clicked
    closeEditUserModal.addEventListener('click', () => {
        editUserModal.classList.add('hidden');
    });

    // Close the modal when the cancel button is clicked
    cancelEditUserModal.addEventListener('click', () => {
        editUserModal.classList.add('hidden');
    });

    // Delete User
    window.deleteUser = function(userId) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to delete user PHP page
                window.location.href = "admin_deleteuser.php?id=" + userId;
            }
        });
    };

    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            let query = this.value.toLowerCase();
            let users = document.querySelectorAll('.user-card');
            
            users.forEach(function(user) {
                let name = user.querySelector('.user-name').innerText.toLowerCase();
                let email = user.querySelector('.user-email').innerText.toLowerCase();
                
                if (name.includes(query) || email.includes(query)) {
                    user.style.display = '';
                } else {
                    user.style.display = 'none';
                }
            });
        });
    }
});
