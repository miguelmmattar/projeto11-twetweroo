import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

let users = [];

let tweets = [];

server.post('/sign-up', function(req, res) {
    users.push(req.body);
    
    res.send('Ok');
});

server.post('/tweets', function(req, res) {
    tweets.push(req.body);
    console.log(tweets);
    res.send('Ok');
});

server.get('/tweets', function(req, res) {
    let lastTweets = [];
    let n = -1;

    if(tweets.length >= 10) {
        n = tweets.length - 11;
    }

    for(let i = tweets.length - 1; i > n; i --) {
        let avatar = users.find(user => user.username === tweets[i].username).avatar;

        lastTweets.push({
            username: tweets[i].username,
            avatar: avatar,
            tweet: tweets[i].tweet
        });
    }
    
    res.send(lastTweets);
});


server.listen(5000, function() {
    console.log('Listen on 5000');
});