document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.custom-header');
    header.classList.add('visible');
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
