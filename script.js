// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    this.reset();
});
