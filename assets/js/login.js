const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`https://6451c664a2860c9ed4faa47f.mockapi.io/user?email=${email}&password=${password}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert('Login successful!');
      window.location.href = "forum.html";
      form.reset();
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
});
