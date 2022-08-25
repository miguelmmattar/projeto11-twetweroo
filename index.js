import express from 'express';

const server = express();

let users = [];

let tweets = [];

server.post('/sign-up', function(req, res) {
    console.log(req);
    users.push({
        username: '',
        avatar: ''
    });

    res.send('Ok');
});

server.post('/tweets', function(req, res) {
    tweets.push({
        username: '',
        tweet: ''
    });

    res.send('Ok');
});

server.get('/tweets', function(req, res) {
    let lastTweets = [];
    let n = 0;

    if(tweets.length >= 10) {
        n = tweets.length - 11;
    }

    for(let i = tweets.length - 1; i > n; i --) {
        let avatar = users.filter(user => user.username === tweets[i].username).avatar;

        lastTweets.push({
            username: tweets[i].user,
            avatar: avatar,
            tweet: tweets[i].tweet
        });
    }
    
    res.send(lastTweets);
});


server.listen(5000, function() {
    console.log('Listen on 5000');
});