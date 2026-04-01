// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');

  // Fetch a random programming joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => response.json())
    .then(data => {
      // The API returns an array, so get the first joke
      const joke = Array.isArray(data) ? data[0] : data;
      // Display the joke setup and punchline on the page
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
    });
});