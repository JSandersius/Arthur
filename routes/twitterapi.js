
var Twitter = require('twitter');

module.exports = function(app) {


    var client = new Twitter({

        consumer_key: "FWGqF55QiOD5JzTIZhGdPu4Ac",
        consumer_secret: "3Q8vkpdJv5AFMHA8VOLE0KQJKYgneZUYclciWpFy5XiaxDmojQ",
        access_token_key: "34366368-aAtHhm6wCrKkJY6C6Wu6dbHfpvbRpyQWY21VG6GZ6",
        access_token_secret: "W21QNsRMIFFeS1YeNk6LC0Dn6oOqLzNsXtn1AsTK5dl7t"
    });
    var params = {
        q: 'hzoba',
        count: 3

    } // this is the param variable which will have key and value
    // is the count of it 
    var tweetHolder = [];


    // ,the key is the keyword which we are interested in searching and count 
    client.get('search/tweets', params, function(err, data, response) {
        if (err) {
            throw err;
            console.log("can't get tweets");
        }
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
            var { created_at, text } = tweets[i];
            var { description } = tweets[i].user;
            // var created_at = tweets[i].created_at same as above
            tweetHolder.push({
                created_at,
                text,
                description
            });
        }
        console.log(tweetHolder);
    });
    
}