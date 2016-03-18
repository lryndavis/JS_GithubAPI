var getUser = require('./../js/repo.js').getUser;

$(function(){
  $('#repo-form').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();
    getUser(userName);
  });
});
