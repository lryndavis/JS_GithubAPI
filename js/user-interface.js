var getUser = require('./../js/user.js').getUser;
var getRepo = require('./../js/repo.js').getRepo;

$(function(){
  $('#repo-form').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    $("#userName").val("");
    $(".btn").attr("disabled", true).text("SEARCHING....");
    getUser(userName);
    getRepo(userName);
  });
});
