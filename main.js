// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  var URL = 'https://randomuser.me/api/?results=12';
  var destination = document.querySelector('.customers');
  var serverArray = [];
  var newUserInfo;


  fetch(URL).then(function(response) {
    response.json().then(function(data) {

      serverArray = data.results;
      console.log(serverArray);

      for (var i = 0; i < serverArray.length; i++) {

        newUserInfo = serverArray[i];
        var userDiv = document.createElement('div');
        userDiv.className = "users";


        var userPic = document.createElement('img');
        userPic.className = "picture";
        userPic.src = newUserInfo.picture.large;
        userDiv.appendChild(userPic);
        destination.appendChild(userDiv);

        var nameTag = document.createElement('p');
        nameTag.className = "name";
        nameTag.textContent = newUserInfo.name.first + " " + newUserInfo.name.last;
        userDiv.appendChild(nameTag);

        var emailTag = document.createElement('p');
        emailTag.className = "email";
        emailTag.textContent = newUserInfo.email;
        userDiv.appendChild(emailTag);

        var streetTag = document.createElement('p');
        streetTag.className = "street";
        streetTag.textContent = newUserInfo.location.street;
        userDiv.appendChild(streetTag);

        var cityTag = document.createElement('p');
        cityTag.className = "city";
        cityTag.textContent = newUserInfo.location.city + " " + newUserInfo.location.state + " " + newUserInfo.location.postcode;
        userDiv.appendChild(cityTag);

        var numberTag = document.createElement('p');
        numberTag.className = "number";
        numberTag.textContent = newUserInfo.phone;
        userDiv.appendChild(numberTag);






      }
    });
  });




})();
