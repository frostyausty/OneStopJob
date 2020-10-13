



// fetch adzuna api
var adzunaApi = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=9038da84&app_key=2c46b2d51baea5a649e0c3824e1587d7&results_per_page=20&what=" + keyword + "&content-type=application/json&where=" + location;

fetch(adzunaApi)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    })

var location = // Input from location text form
var keyword = // Input from job title text form