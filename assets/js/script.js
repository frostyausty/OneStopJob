

var keyword = "javascript";
var where = "minneapolis";


var userFormEl = document.querySelector("#user-form");
var userkeywordEl = document.querySelector("#keyword");
var jobList = document.querySelector(".job-list");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var keyword = userkeywordEl.value.trim();
    if (keyword) {
        getAdzunaJobs(keyword);
        userkeywordEl.value = "";
    } else {
        alert("Please enter a Job Title or Keyword!");
    }
};


var getAdzunaJobs = function(keyword) {
    var adzunaApi = "https://api.adzuna.com/v1/api/jobs/us/search/?app_id=9038da84&app_key=2c46b2d51baea5a649e0c3824e1587d7&results_per_page=20&what=" +   keyword//javascript%20developer"//&content-type=application/json" //&results_per_page=20&what=" + keyword + "&content-type=application/json&where=" + location;
    
    fetch(adzunaApi)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data.results);
                    for (i=0;i<data.results.length;i++) {
                        var jobPost = document.createElement("div");
                        jobPost.classList.add("job-post", "job-post-" + i);
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

userFormEl.addEventListener("submit", formSubmitHandler);

// fetch adzuna api

// var location = // Input from location text form
// var keyword = // Input from job title text form

              
var host = 'data.usajobs.gov';  
var userAgent = 'duncanmarten@live.com';  
var authKey = '7Yq1WCos7rtaXqNELrNjbduX8/DQI/qlCN4S1IPMnVQ=';    

var usaJobs = "https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=" + "Software Developer" + "&LocationName=" + "Madison, WI" + "&api_key=7Yq1WCos7rtaXqNELrNjbduX8/DQI/qlCN4S1IPMnVQ="


fetch(usaJobs, {
    headers: {
        "Host": host,          
        "User-Agent": userAgent,          
        "Authorization-Key": authKey
    }
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
