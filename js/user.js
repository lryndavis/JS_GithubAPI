var apiKey = require('./../.env').apiKey;

exports.getUser = function(userName){
  $.get('https://api.github.com/users/'+userName+'?access_token=' + apiKey).then(function(response){
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

    followers = response.followers;

    $('.user-info').show();
    $('.full-name').text(fullName);
    $('.email').text(emailAddress);
    $('.followers').text(followers);

  }).fail(function(error){
    $('.user-info').show();
    $('.user-info').text(error.responseJSON.message);
  });
};
