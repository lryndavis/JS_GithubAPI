var apiKey = require('./../.env').apiKey;

//GET request for user
exports.getUser = function(userName){
  $.get('https://api.github.com/users/'+userName+'?access_token=' + apiKey).then(function(response){
    //fetch user info
    // ensure that user name and email fields will not be blank if info hasn't been provided
    if (response.name !== null) {
      fullName = response.name;
    } else {
      fullName = "Not Provided.";
    }

    if (response.email !== null) {
      emailAddress = response.email;
    } else {
      emailAddress = "Not Provided.";
    }

    userAvatar = response.avatar_url;
    followers = response.followers;

    //show user info
    $('.user-info').show();
    $('.repo-list').show();
    $('.userIMG').append('<img src="' + userAvatar + '">');
    $('.user-name').text(userName);
    $('.fa-caret-right').show();
    $('.full-name').text(fullName);
    $('.email').text(emailAddress);
    $('.followers').text(followers);
    //re-enable search
    $(".btn").attr("disabled", false).text("SEARCH");

  }).fail(function(error){
    $('.form-section').append(error.responseJSON.message);
    //re-enable search
    $(".btn").attr("disabled", false).text("SEARCH");
  });
};
