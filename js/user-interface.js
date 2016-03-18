var getRepository = require('./../js/repo.js').getRepository;

$(function(){
  $('#repo-form').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();
    getRepository(userName);
  });
});
