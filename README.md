# TinDog

TinDog is a javascript project for dealing with use matches.

## Installation

To install this package clone repo git@github.com:Bryanjazo/TinDog.git

For Back end head to https://github.com/Bryanjazo/TinDog-Backend


## Usage

open index.html and run rails server

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
https://github.com/Bryanjazo/TinDog/blob/main/LICENSE

// Sign Up Form 

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault()
  fetch('https://tindog-backend-bryan.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: inputFields[0].value,
        email: inputFields[1].value,
        password: inputFields[2].value
      })
    })
    .then(res => res.json())
    .then(function(object) {
      let obj = object
      localStorage.profile_id = obj.profile_id
      sessionStorage.userID = obj.id
      displayUserHome();
    })
})


// Login Form

logInForm.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log('here')

  fetch('https://tindog-backend-bryan.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: logInFields[0].value,
        password: logInFields[1].value
      })
    })
    .then(res => res.json())
    .then(function(object) {
      let obj = object
      sessionStorage.userID = obj.id
      localStorage.profile_id = obj.profile_id
      console.log(object)
    })
})