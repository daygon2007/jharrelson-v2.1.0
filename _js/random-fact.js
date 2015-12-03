function generateRandomPosts()
    {
        $.getJSON("http://jonathon-harrelson.com/search.json", function(data) {
            console.log("[search.json loaded for random posts]");

            var postsCount = data.length;
            var posts = data;

            var randomIndexUsed = [];
            var counter = 0;
            var numberOfPosts = 1;

            var divRandomPosts = $("#random_posts");

            while (counter < numberOfPosts)
            {
                var randomIndex = Math.floor(Math.random() * postsCount);

                if (randomIndexUsed.indexOf(randomIndex) == "-1")
                {
                    var postHREF = posts[randomIndex].href;
                    var postTitle = posts[randomIndex].title;
					var postContent = posts[randomIndex].content;

                    if (counter == (numberOfPosts - 1))
                    {
                        divRandomPosts.append('<blockquote>' + postContent + '</blockquote>');
                    }
                    else
                    {
                        divRandomPosts.append('<blockquote>' + postContent + '</blockquote>');
                    }

                    randomIndexUsed.push(randomIndex);

                    counter++;
                }
            }
        });
    }

    $(document).ready(function() {
        generateRandomPosts();
    });