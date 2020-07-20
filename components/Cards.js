// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((succesResponse) => {
        console.log(succesResponse);
        console.log(succesResponse.data.articles);
        
        const articles = succesResponse.data.articles;
        const articleKeys = Object.keys(articles);

        articles.forEach((item) => {
            console.log(articles[item]); 
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
const cardsContainer = document.querySelector
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
    /* headline.textContent = data. */


    //create event listener
    /* card.addEventListener('click', () => {
        console.log(headline); 
    }) */



    //return element
    return card;

}
card()


// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
