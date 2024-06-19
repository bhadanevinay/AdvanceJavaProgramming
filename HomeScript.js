// script.js
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.blank-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('This Page Will be Available Soon !!');
        });
    });
});
