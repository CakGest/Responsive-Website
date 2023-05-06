const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;


  fetch('https://6451c664a2860c9ed4faa47f.mockapi.io/forum', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      title,
      description,
      image
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Successfully Submitted');
    window.location.href = "forum.html";

    form.reset();
  })
  .catch(error => console.error(error));
});
