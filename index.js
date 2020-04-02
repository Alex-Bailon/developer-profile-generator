const fs = require("fs");
const axios = require("axios");
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is the GitHub user name?',
        name: 'username'
        },
        {
            type: 'input',
            message: 'What is your favorite color?',
            name: 'color'
        }
    ])
    .then(({username}) => {
        const queryUrl = `https://api.github.com/users/${ username }`;
        axios
        .get(queryUrl)
        .then(function(res) {
            let userData = {
                userimg: res.data.avatar_url,
                userName: res.data.login,
                userLocation: res.data.location,
                userGitHubURL: res.data.html_url,
                userBlog: res.data.blog,
                userBio: res.data.bio,
                userPublicRepo: res.data.public_repos,
                userFollowers: res.data.followers,
                userFollowing: res.data.following
            }

        })
    })
    .catch(error => {
        if(error) {
          console.log(error)
        }
    })
// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

    // }
// init()