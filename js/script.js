/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//===================================================
//============= HI REVIEWER! ========================
//===================================================
// I'll live some comments along the way to explain certain desicions that I've made. Hope it'll not be overvhelming.



/*** 
 * `quotes` array 
***/

//I Decided to go with 4 properties that is shared sccross all objects and one "year" property that is optional.
const quotes = [
  {
    quote: 'It was times like these when I thought my father, who hated guns and had never been to any wars, was the bravest man who ever lived.',
    source: 'Harper Lee',
    citation: 'To Kill A Mockingbird',
    image: 'https://imgix.bustle.com/lovelace/getty/1160956.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70',
    year: '1960'
  },
  {
    quote: 'My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.',
    source: 'Charles Dickens',
    citation: 'David Copperfield',
    image: 'https://imgix.bustle.com/lovelace/getty/157896452.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70',
    year: '1850'
  },
  {
    quote: 'He is more myself than I am. Whatever our souls are made of, his and mine are the same.',
    source: 'Emily Brontë',
    citation: 'Wuthering Heights',
    image: 'https://imgix.bustle.com/lovelace/getty/88341104.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70',
    year: '1847'
  },
  {
    quote: 'There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.',
    source: 'Bram Stroker',
    citation: 'Dracula',
    image: 'https://imgix.bustle.com/lovelace/getty/738230.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70',
    year: '1897'
  },
  {
    quote: 'All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.',
    source: 'J. R. R. Tolkien',
    citation: 'The Fellowship of the Ring',
    image: 'https://imgix.bustle.com/lovelace/getty/687858.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70',
    year: '1954'
  },
  {
    quote: 'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.',
    source: 'J. K. Rowling',
    citation: 'Harry Potter and the Order of the Phoenix',
    image: 'https://imgix.bustle.com/lovelace/getty/56090291.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70'
  },
  {
    quote: 'And so we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    image: 'https://imgix.bustle.com/lovelace/getty/170445333.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70'
  },
  {
    quote: 'I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.',
    source: 'Jane Austen',
    citation: 'Pride and Prejudice',
    image: 'https://imgix.bustle.com/lovelace/getty/160227241.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70'
  },
  {
    quote: 'It is the possibility of having a dream come true that makes life interesting.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    image: 'https://imgix.bustle.com/lovelace/getty/516336214.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70'
  },
  {
    quote: 'Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    image: 'https://imgix.bustle.com/lovelace/getty/176590913.jpg?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70'
  },
  ];

// Here I'm accessing the Quote container to change innerHTML later
  const quoteBox = document.getElementById('quote-box');
// I'm accessing the body to dynamically chenge its background later on
  const body = document.querySelector('body');


/***
 * `getRandomQuote` function
***/

//I'm learning the ES6 so I've used the arrow function syntax just to get more use to it.
const getRandomQuote = max => {
	let number = Math.floor(Math.random() * max);
  //This function can return "quotes[number]" that would be better for quotePrint function
  //But it returns only the number. its made on pourpoise to make this function universal.
  // Because I wanted to use same function in the background color randomizer 
  return number;
};


// I vanted to make background color random but limited to the darker shades of different colors 
//This function generates random color not brighter than 140 to keep letters in contrast
const bgColor = () => {
  let number1 = getRandomQuote(140);
  let number2 = getRandomQuote(140);
  let number3 = getRandomQuote(140);
  let bgColorString = "rgb(" + number1 + ", " + number2 + ", " + number3 + ")"
  body.style.backgroundColor = bgColorString;
}


/***
 * `printQuote` function
***/

//This arrow function triggers getRandomQuote, store its value ine variable number, and rewirtes innerTHML of the quote container
const printQuote = () => {
  bgColor();
  let number = getRandomQuote(quotes.length);
  let index = 0;
  
//This piece responsible for adding optional "year" property to the page
        for (let prop in quotes[number]){
          if (prop === "year"){
              index += 1;
              } else {
                index = index
              };
          }
          if (index > 0) {
            //I've used html template literals to rewrite the content of the Quote container
            //I also added the thematic Image above the quote as the extra challange
            quoteBox.innerHTML = `
            <div class ="quote-image" style =" background-image: url('${quotes[number].image}')"></div>
            <p class="quote">${quotes[number].quote}</p>
            <p class="source">${quotes[number].source} 
            <span class="citation">${quotes[number].citation}</span>
            <span class="year">${quotes[number].year}</span></p>
            `
        } else {
          quoteBox.innerHTML = `
            <div class ="quote-image" style =" background-image: url('${quotes[number].image}')"></div>
            <p class="quote">${quotes[number].quote}</p>
            <p class="source">${quotes[number].source} 
            <span class="citation">${quotes[number].citation}</span>
            `
        }
}




// I decide to change the default thml of the page to one of the new quotes. So new quote fires up when page is loaded
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);