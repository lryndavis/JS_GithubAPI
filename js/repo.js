var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName){
  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    $.each(response, function(i, repo) {
      console.log(response);
      numofRepos = response.length;
      name = this.name;
      linkTo = this.url;
      stars = this.stargazers_count;
      if (this.description !== "") {
          repoDescription = this.description;
        } else {
          repoDescription = "Description not Provided.";
        }
      $(".repositories").append('<li>' + name + '</li>' +
                                '<li>' + repoDescription + '</li>');
      $(".amount").text(numofRepos);
    });
  }).fail(function(error){
    $(".repositories").text(error.responseJSON.message);
  });
};
