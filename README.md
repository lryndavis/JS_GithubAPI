#Github API App

By Lauryn Davis

3.18.2016

Don't Fear the Repo is a JS app that allows the user to search for github users and their public repositories thru use of the Github API. A search will return a user's avatar, full name, email address, and # of followers. It will also list all of the github user's repositories; including information about each individual repo's description, # of stars, and a link to view.

Project Objectives:

* Makes two AJAX requests, and parses the JSON responses correctly
* Manages front end dependencies with Bower
* Manages build tool dependencies with npm
* Includes a gulp-based asset pipeline with a development server

##### Technologies Used

* Javascript
* JQuery
* Node
* Bower
* Github API
* HTML
* SCSS
* Bootstrap
* Font Awesome

##### Setup

* Download personal access token from Github
* Clone this repository: https://github.com/lryndavis/JS_GithubAPI
* Within the directory, create a new file named '.env', and add the following to the page:

`exports.apiKey = "YOUR_API_KEY"`

* Within the directory, run:
* `$ npm install`
* `$ bower install`
* `$ gulp build`
* `$ gulp serve`

##### License

*This software is licensed under the MIT license.*

&copy;2016 **Lauryn Davis**
