const formEmail = document.getElementById('email-address');
const formError = document.getElementById('form-error');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const messages = [];
  const casechecker = formEmail.value.toLowerCase();
  if (casechecker !== formEmail.value) {
    messages.push('please use lower case in your email');
    e.preventDefault();
    formError.innerText = messages.join(',');
  }
});
