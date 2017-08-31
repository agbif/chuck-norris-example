const Chuck = require('chucknorris-io');

const client = new Chuck();


client.getRandomJoke().then((jokeInfo) => {
    console.log('RANDOM JOKE');
    console.log(jokeInfo);

    // the "value" property is the actual text of the joke
    console.log(jokeInfo.value);
});
