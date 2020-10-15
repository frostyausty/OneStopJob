
var userFormEl = document.querySelector("#user-form");
var userKeywordEl = document.querySelector("#keyword");
var userLocationEl = document.querySelector("#location");
var adzunaJobList = document.querySelector(".adzuna-job-list");
var usaJobList = document.querySelector(".usa-job-list");

var formSubmitHandler = function(event) {
    event.preventDefault();

    //grab user input for keyword and location of search
    var keyword = userKeywordEl.value.trim();
    var location = userLocationEl.value.trim();
    if (keyword && location) {
        getAdzunaJobs(keyword, location);
        getUsaJobs(keyword, location);
        userKeywordEl.value = "";
        userLocationEl.value = "";
    }else {

        ///////----------CHANGE FROM ALERT BEFORE LAUNCH------------///////
        alert("Please enter a Job Title and Keyword!");
    }
};


var getAdzunaJobs = function(keyword, location) {
    var adzunaApi = "https://api.adzuna.com/v1/api/jobs/us/search/?app_id=9038da84&app_key=2c46b2d51baea5a649e0c3824e1587d7&results_per_page=20&what=" +   keyword + "&where=" + location;//javascript%20developer"//&content-type=application/json" //&results_per_page=20&what=" + keyword + "&content-type=application/json&where=" + location;
    
    fetch(adzunaApi)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data.results);
                    document.querySelector("#adzuna-job-list-parent").textContent = "";
                    for (i=0;i<data.results.length;i++) {
                        var jobPost = document.createElement("div");
                        jobPost.classList.add("job-post", "adzuna-job-post-" + i);
                        adzunaJobList.appendChild(jobPost);
                        var jobTitleEl = document.querySelector(".adzuna-job-post-" + i);

                        //grabbing post url and creating a link
                        var aTag = document.createElement("a");
                        redirectUrl = data.results[i].redirect_url;
                        aTag.setAttribute("href", redirectUrl);
                        aTag.setAttribute("target", "blank");
                        jobTitleEl.appendChild(aTag);

                        //create post title for each post
                        var postTitle = document.createElement("div");
                        postTitle.classList.add("post-title");
                        aTag.appendChild(postTitle);
                        var jobTitle = data.results[i].title;
                        postTitle.innerHTML = "<span class='job-data-title'>Job Title: </span>" + jobTitle;


                        //create post company for each post
                        var company = data.results[i].company.display_name;
                        var jobCompany = document.createElement("div");
                        jobCompany.classList.add("post-company");
                        aTag.appendChild(jobCompany);
                        jobCompany.innerHTML = "<span class='job-data-subtitles'>Company: </span>" + company;


                        //create post salary for each post
                        var salary = data.results[i].salary_is_predicted;
                        if (salary === "0"){
                            salary = "N/A";
                        };
                        var jobSalary = document.createElement("div");
                        jobSalary.classList.add("post-salary");
                        aTag.appendChild(jobSalary);
                        jobSalary.innerHTML = "<span class='job-data-subtitles'>Salary: </span>" + salary;


                        //create post location for each post
                        var location = data.results[i].location.area[3] + ", " + data.results[i].location.area[1];
                        var jobLocation = document.createElement("div");
                        jobLocation.classList.add("post-location");
                        aTag.appendChild(jobLocation);
                        jobLocation.innerHTML = "<span class='job-data-subtitles'>Location: </span>" + location;

                        //create post description for each post
                        var jobDescription = document.createElement("div");
                        jobDescription.classList.add("post-description");
                        var description = data.results[i].description;
                        aTag.appendChild(jobDescription);
                        jobDescription.innerHTML = "<span class='job-data-subtitles'>Description: </span>" + description;
                    }
                });
            };
        });
};


var getUsaJobs = function(keyword, location) {

    // Header variables for USAJobs
    var host = 'data.usajobs.gov';  
    var userAgent = 'duncanmarten@live.com';  
    var authKey = '7Yq1WCos7rtaXqNELrNjbduX8/DQI/qlCN4S1IPMnVQ=';    

    // usajobs url
    var usaJobs = "https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=" + keyword + "&LocationName=" + location + "&api_key=7Yq1WCos7rtaXqNELrNjbduX8/DQI/qlCN4S1IPMnVQ="


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
        console.log(data.SearchResult.SearchResultItems);
        document.querySelector("#usa-job-list-parent").textContent = "";
                    for (i=0;i<data.SearchResult.SearchResultItems.length;i++) {
                        var jobPost = document.createElement("div");
                        jobPost.classList.add("job-post", "usa-job-post-" + i);
                        usaJobList.appendChild(jobPost);
                        var jobTitleEl = document.querySelector(".usa-job-post-" + i);

                        //create post title for each post
                        var postTitle = document.createElement("div");
                        postTitle.classList.add("post-title");
                        jobTitleEl.appendChild(postTitle);
                        var jobTitle = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionTitle;
                        postTitle.innerHTML = "<span class='job-data-title'>Job Title: </span>" + jobTitle;

                        //create post organization for each post
                        var organization = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.OrganizationName;
                        var jobCompany = document.createElement("div");
                        jobCompany.classList.add("post-company");
                        jobTitleEl.appendChild(jobCompany);
                        jobCompany.innerHTML = "<span class='job-data-subtitles'>Organization: </span>" + organization;

                        //create post salary for each post
                        var salary = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange;
                        var perTime = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionRemuneration[0].RateIntervalCode;
                        if (salary === "0"){
                            salary = "N/A";
                        };
                        var jobSalary = document.createElement("div");
                        jobSalary.classList.add("post-salary");
                        jobTitleEl.appendChild(jobSalary);
                        jobSalary.innerHTML = "<span class='job-data-subtitles'>Salary: </span>$" + salary + " " + perTime;

                        //create post location for each post
                        var location = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionLocationDisplay;
                        var jobLocation = document.createElement("div");
                        jobLocation.classList.add("post-location");
                        jobTitleEl.appendChild(jobLocation);
                        jobLocation.innerHTML = "<span class='job-data-subtitles'>Location: </span>" + location;

                        //create post description for each post
                        var jobDescription = document.createElement("div");
                        jobDescription.classList.add("post-description");
                        var description = data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.UserArea.Details.JobSummary;
                        jobTitleEl.appendChild(jobDescription);
                        jobDescription.innerHTML = "<span class='job-data-subtitles'>Description: </span>" + description;
                    }
    })
}

userFormEl.addEventListener("submit", formSubmitHandler);

