var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName){
  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    $.each(response, function(i, repo) {
      numOfRepos = response.length;
      name = this.name;
      linkTo = this.html_url;
      stars = this.stargazers_count;


      if (this.description !== "") {
          repoDescription = this.description;
        } else {
          repoDescription = "Description not Provided.";
        }

        repoData =            '<div class="rp repo-data' + i + '">' +
                                  '<p><a href="' + linkTo + '">'+ name +'</a></p>' +
                                  '<p>' + repoDescription + '</p>' +
                                  '<p>Stars: '+ stars + '</p>' +
                                '</div>';
        $(".amount").text(numOfRepos);
        $(".repositories").append('<li class="repo" id=' + i + '>' + name + repoData + '</li>')
      });
        $('.repositories').off("click", "repo");
        $('.repositories').on("click", ".repo", function(){
        $(".repo-data" + this.id).slideToggle();
      });
      }).fail(function(error){
        $(".repositories").text(error.responseJSON.message);
      });
    };
