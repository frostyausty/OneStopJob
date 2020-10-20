# One Stop Job

## Description

![Screenshot of One Stop Job](assets/images/screenshot.png)

### Purpose

This web application was built on the need to localize multiple job posting from multiple job search platforms.  One Stop Job is the solution to that problem and pulls jobs from two prominent job search platforms.  The two platforms are Adzuna and USAJobs.  In the future there maybe more platforms added, but at this time we fell two is plenty.  To use the application the consumer is prompted to input Job title/keyword and a location, as well as, which platforms that would like to pull from.  If the consumer does not provide information in one or more of the input fields they will be prompted with a modal telling them to fill out the form completely.  If there are no jobs that come from the fetch from either platform, then the consumer will be shown a post that tells them there is no jobs relating to the job title/keyword on that platform.  Otherwise if the search goes through, then a max of 20 posts per platform will be pulled and made into easy to read posts on the main page of the application.  The posts include: Job Title, Organization/Company, Salary, Location, and Description.  If the consumer clicks on the job post they will be able to go to the direct post on the linked platform.
Visit the live web application at (https://frostyausty.github.io/OneStopJob/).

### Built With
* HTML
* CSS
* JavaScript

### APIs Used
* Bulma for CSS
* USAJobs API
* Adzuna API

### Acknowledgment
* Nate Derenne
* Austin Price
* Josue Hilario
* Duncan Marten