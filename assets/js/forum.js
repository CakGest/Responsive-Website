fetch('https://6451c664a2860c9ed4faa47f.mockapi.io/forum')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.querySelector('#card-container');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3', 'mx-auto');
      card.style = 'max-width: 1000px';
      card.innerHTML = `
        <div class="card mb-3" >
          <div class="row g-0" >
            <div class="col-md-4">
              <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="card-link">Read more</a>
              </div>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  });

