apikey = ''; //Paste you API key here....

function general_news() {
    url = 'https://gnews.io/api/v4/search?q=general&lang=en&country=pk&max=50&apikey=' + apikey;
    fetch(url)
        .then(response => response.json()) // convert response to JSON
        .then(data => {
            let content = '';
            data.articles.forEach(article => {
                content += `
    <div id="keyBoard" class="col-md-3">
      <div class="card my-card" style="width: 15rem;">
        <div class="card-body">
        <img src=${article.image} class="card-img-top" alt="...">
          <a href="${article.url}"><h5 class="card-title" id="itemName">${article.title}</h5></a>
          <p class="card-text" id="itemDesc">${article.description}</p>
        </div>
      </div>
    </div>`;
            });
            document.querySelector("#general_news").innerHTML = content;
            // Get all the cards
            const cards = document.querySelectorAll('.card');
            // Initialize a variable to store the maximum height
            let maxHeight = 0;
            // Loop through each card and determine the maximum height
            cards.forEach(card => {
                const cardHeight = card.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            });
            // Set the height of each card to be the maximum height
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        })
        .catch(error => console.log(error));
}
function world_news() {
    url ='https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=any&max=10&apikey=' + apikey;
    fetch(url)
        .then(response => response.json()) // convert response to JSON
        .then(data => {
            let content = '';
            data.articles.forEach(article => {
                content += `
    <div id="keyBoard" class="col-md-3">
      <div class="card my-card" style="width: 15rem;">
        <div class="card-body">
        <img src=${article.image} class="card-img-top" alt="...">
          <a href="${article.url}"><h5 class="card-title" id="itemName">${article.title}</h5></a>
          <p class="card-text" id="itemDesc">${article.description}</p>
        </div>
      </div>
    </div>`;
            });
            document.querySelector("#world_news").innerHTML = content;
            // Get all the cards
            const cards = document.querySelectorAll('.card');
            // Initialize a variable to store the maximum height
            let maxHeight = 0;
            // Loop through each card and determine the maximum height
            cards.forEach(card => {
                const cardHeight = card.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            });
            // Set the height of each card to be the maximum height
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        })
        .catch(error => console.log(error));
}
function sports_news() {
    url = 'https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=any&max=10&apikey=' + apikey;
    fetch(url)
        .then(response => response.json()) // convert response to JSON
        .then(data => {
            let content = '';
            data.articles.forEach(article => {
                content += `
    <div id="keyBoard" class="col-md-3">
      <div class="card my-card" style="width: 15rem;">
        <div class="card-body">
        <img src=${article.image} class="card-img-top" alt="...">
          <a href="${article.url}"><h5 class="card-title" id="itemName">${article.title}</h5></a>
          <p class="card-text" id="itemDesc">${article.description}</p>
        </div>
      </div>
    </div>`;
            });
            document.querySelector("#sport-news").innerHTML = content;
            const cards = document.querySelectorAll('.card');
            let maxHeight = 0;
            cards.forEach(card => {
                const cardHeight = card.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            });
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        })
        .catch(error => console.log(error));
}
general_news()
world_news()
sports_news()
search.addEventListener("click", (e) => {
    e.preventDefault();
    var category = input_search.value
    window.open("category.html", "_self")
    localStorage.setItem('category', JSON.stringify(category));
}
)