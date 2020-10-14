

var keyword = "javascript";
var where = "minneapolis";

var jobList = document.querySelector(".job-list");


var getAdzunaJobs = function(keyword) {
    var adzunaApi = "https://api.adzuna.com/v1/api/jobs/us/search/?app_id=9038da84&app_key=2c46b2d51baea5a649e0c3824e1587d7&results_per_page=20&what=" +   keyword//javascript%20developer"//&content-type=application/json" //&results_per_page=20&what=" + keyword + "&content-type=application/json&where=" + location;
    
    fetch(adzunaApi)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data.results);
                    for (i=0;i<data.results.length;i++) {
                        var jobPost = document.createElement("div");
                        jobPost.classList.add("job-post-" + i);
                        jobList.appendChild(jobPost);
                        var jobTitleEl = document.querySelector(".job-post-" + i);
                        //var companyTitleEl = document.querySelector("");
                        console.log(data.results[i].company.display_name);
                        console.log(data.results[i].title);
                        //console.log(data.results[i].description);
                        var postTitle = document.createElement("div");
                        postTitle.classList.add("post-title");
                        jobTitleEl.appendChild(postTitle);
                        var jobTitle = data.results[i].title;
                        postTitle.innerHTML = "Job Title: " + jobTitle;
                        var company = data.results[i].company.display_name;
                        var jobCompany = document.createElement("div");
                        jobCompany.classList.add("post-company");
                        jobTitleEl.appendChild(jobCompany);
                        jobCompany.innerHTML = "Company: " + company;



                    }
                });
            };
        });
};

// fetch adzuna api

// var location = // Input from location text form
// var keyword = // Input from job title text form