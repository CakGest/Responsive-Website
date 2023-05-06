const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://6451c664a2860c9ed4faa47f.mockapi.io/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Registration successful!');
    window.location.href = "login.html";
    form.reset();
  })
  .catch(error => console.error(error));
});
