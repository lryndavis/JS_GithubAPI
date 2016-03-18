var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName){
  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    $.each(response, function(i, repo) {
      console.log(response);
      // numofRepos = response.length;
      name = this.name;
      description = this.description;
      $(".repositories").append('<li>' + name + '</li>');

    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
