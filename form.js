const formEmail = document.getElementById('email-address');
const formError = document.getElementById('form-error');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const messages = [];
  const casechecker = formEmail.value.toLowerCase();
  if (casechecker !== formEmail.value) {
    messages.push('please use lower case in your email');
    event.preventDefault();
    formError.innerText = messages.join(',');
  }
});
