var apiKey = require('./../.env').apiKey;

//call to get repos from user and loop thru results
exports.getRepo = function(userName){
  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    $.each(response, function(i, repo) {
      numOfRepos = response.length;
      name = this.name;
      linkTo = this.html_url;
      stars = this.stargazers_count;

      // ensure that description field will not be blank if info hasn't been provided
      if (this.description !== "") {
          repoDescription = this.description;
        } else {
          repoDescription = "Description not Provided.";
        }

        //generate info for display:none repo info toggle well
        //create id for divs based on repo index
        repoData =            '<div class="rp repo-data' + i + '">' +
                                  '<i class="fa fa-angle-down"></i>' +
                                  '<p class="rd desc">' + repoDescription + '</p>' +
                                  '<p class="rd">Stars: '+ stars + '</p>' +
                                  '<p class="rd"><a href="' + linkTo + '">Check it Out</a></p>' +
                                '</div>';
        $(".amount").text(numOfRepos);
        $(".repositories").append('<li class="repo" id=' + i + '>' + name + repoData + '</li>');
      });
        //toggle repo info well on click based on div id
        $('.repositories').off("click", "repo");
        $('.repositories').on("click", ".repo", function(){
        $(".repo-data" + this.id).slideToggle();
        //re-enable search
        $(".btn").attr("disabled", false).text("SEARCH");
      });
      }).fail(function(error){
        $(".repositories").text(error.responseJSON.message);
        //re-enable search
        $(".btn").attr("disabled", false).text("SEARCH");
      });
    };
