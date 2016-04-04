var getUser = require('./../js/user.js').getUser;
var getRepo = require('./../js/repo.js').getRepo;

//submit user search form
$(function(){
  $('#repo-form').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    $("#userName").val("");
    //disable button and alter text during request
    $(".btn").attr("disabled", true).text("SEARCHING....");
    //call for user info
    getUser(userName);
    //call for repo info
    getRepo(userName);
    $('#userName').clear();
  });
});
