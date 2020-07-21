// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        /* console.log(response);
        const bootstrap = response.data.articles.bootstrap;
        console.log(bootstrap);
        const javascript = response.data.articles.javascript;
        console.log(javascript);
        bootstrap.forEach((item) => {
            cardsContainer.appendChild(card(item));
        })
        javascript.forEach((item) => {
            cardsContainer.appendChild(card(item));
        })
        const jquery = response.data.articles.jquery;
        console.log(jquery)
        jquery.forEach((item) => {
            cardsContainer.appendChild(card(item));
        })
        const node = response.data.articles.node;
        console.log(node) ; 
        node.forEach((item) => {
            cardsContainer.appendChild(card(item));
        })
        const technology = response.data.articles.technology;
        console.log(node); 
        technology.forEach((item) => {
            cardsContainer.appendChild(card(item));
        })
        console.log(response) */
        const objectProperties = [
            response.data.articles.javascript, 
            response.data.articles.bootstrap, 
            response.data.articles.jquery, 
            response.data.articles.node, 
            response.data.articles.technology,
        ]
        console.log(objectProperties); 
        objectProperties.forEach((currentItem) => {
            console.log(currentItem);
            currentItem.forEach(currentObject => {
                cardsContainer.appendChild(card(currentObject)); 
            }) 
        })
        
    })
    .catch((error) => {
        console.log(error)
        }) 
    

// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
const cardsContainer = document.querySelector('.cards-container'); 
function card(data) {
    //create elements
    ('.cards-container'); 
    const card = document.createElement('div'); 
    const headline = document.createElement('div'); 
    const author = document.createElement('div'); 
    const imageContainer = document.createElement('div'); 
    const image = document.createElement('img'); 
    const authorName = document.createElement('span'); 

    //apply classes
    card.classList.add('card'); 
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container'); 

    //append to parents
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image); 
    author.appendChild(authorName); 

    //link to content
    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    authorName.textContent = data.authorName; 

    //create event listener
    card.addEventListener('click', () => {
        console.log(headline.textContent); 
    })
    //return element
    return card;

}



// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



