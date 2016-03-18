var apiKey = require('./../.env').apiKey;

exports.getUser = function(userName){
  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    $.each(response, function(i, repo) {
      name = this.name;
      description = this.description;
      console.log(name, description);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
