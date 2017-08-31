const express = require('express');
const Chuck = require('chucknorris-io');


const app = express();
const client = new Chuck();


// when you visit "localhost:3000/SOME_URL" ...
app.get('/SOME_URL', (req, res, next) => {
    // get a random chuck norris joke ...
    client.getRandomJoke().then((jokeInfo) => {
        // when you receive the chuck norris joke information ...
        console.log('RANDOM JOKE ..........................');
        console.log(jokeInfo);

        // render the view
        res.render('some-view.ejs');
    });
});


app.listen(3000);
