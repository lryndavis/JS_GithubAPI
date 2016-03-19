var apiKey = require('./../.env').apiKey;

exports.getUser = function(userName){
  $.get('https://api.github.com/users/'+userName+'?access_token=' + apiKey).then(function(response){
    console.log(response);
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

    $('.user-info').show();
    $('.repo-list').show();
    $('.userIMG').append('<img src="' + userAvatar + '">');
    $('.user-name').text(userName);
    $('.full-name').text(fullName);
    $('.email').text(emailAddress);
    $('.followers').text(followers);

  }).fail(function(error){
    $('.user-info').show();
    $('.user-info').text(error.responseJSON.message);
  });
};
