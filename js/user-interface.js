var getUser = require('./../js/user.js').getUser;
var getRepo = require('./../js/repo.js').getRepo;

$(function(){
  $('#repo-form').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    getUser(userName);
    getRepo(userName);
  });
});
