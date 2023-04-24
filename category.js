var category = JSON.parse(localStorage.getItem('category'));
// console.log(category)
heading_name.innerHTML = category
apikey = ''; //Paste you API key here....
general_news(category)
function general_news(category) {
    url = 'https://gnews.io/api/v4/search?q=' + category+ '&lang=en&country=pk&max=50&apikey=' + apikey;
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