document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default submission
  
      if (form.checkValidity()) {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form
      } else {
        alert('Please fill in all required fields.');
        const invalidFields = form.querySelectorAll(':invalid');
        invalidFields.forEach((field) => field.classList.add('error'));
      }
    });
  
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  });