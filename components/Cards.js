// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
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
    /* card.addEventListener('click', () => {
        console.log(headline); 
    }) */
    //return element
    return card;

}

// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



/* const data = {"articles":
{"javascript":[
    {"headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"},{"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},{"headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}],"bootstrap":[{"headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"technology":[{"headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"jquery":[{"headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"}],"node":[{"headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUF"},{"headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"}]
}} */

/* console.log(data.articles);  */

/* 
let obj = {}
console.log(obj) */