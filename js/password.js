//Password visibility toggle

function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleCheckbox = document.getElementById("show-password");
    console.log("Checkbox checked:", toggleCheckbox.checked); 

    // Toggle the password field type between 'password' and 'text'
    if (toggleCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}