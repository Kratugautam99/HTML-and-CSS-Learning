document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Perform any necessary validation or processing here
        // For example, check if the username and password are not empty

        // Redirect to the homepage
        window.location.href = 'DTIL-1.html';
    });
});
