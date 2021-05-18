// Urls
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`


//switch sign up and log in screens
var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");
var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

// Variables for pushing user to databse
function switchSignup() {
  right_form.classList.add("fade-in-element");
  left_cover.classList.add("fade-in-element");
  left_form.classList.add("form-hide");
  left_cover.classList.remove("cover-hide");
  right_form.classList.remove("form-hide");
  right_cover.classList.add("cover-hide");
}
// hide Appear Log in and Sign up
front = document.getElementById('signup-signIn')
back = document.getElementById('dashboard')
//sign Up
const inputFields = document.querySelectorAll(".input-text")

// Log in
let loggedIn = null
let signedUp = false

document.getElementById('logInUser').addEventListener('click', logInUser)


function fetchUserLogIn(name, uid) {
  let config = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: email,
      uid: uid
    })
  }
  fetch('http://localhost:3000/users', config)
    .then(res => res.json())
    .then(obj => console.log(obj))
  displayUserForSwipes()
}

function logInUser() {
  console.log('call')
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  firebase.auth().signInWithEmailAndPassword(email, password).catch(e => {
    console.log(e)
  })
}

function showUserHome(user) {
  document.getElementById('userDetails').innerHtml = "logged in"
}
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user)
    front.style.display = "none"
    back.style.display = "block"
    showUserHome(user)
  } else {
    front.style.display = "block"
    back.style.display = "none"
  }
})
// Sign Up
function createUser() {
  fetch('http://localhost:3000/users',{
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },
    body: JSON.stringify({
      username: inputFields[0].value,
      email: inputFields[1].value,
      password: inputFields[2].value
    })
  }).then(response => response.json()).then(data => {
    if (data === 'success') {
      displayUserForSwipes();
    }
  })
}




document.getElementById('btnSignUpO').addEventListener('click', createUser)

// function signUpUser() {
//   console.log('call')
//   let email = document.getElementById('emaill').value
//   let password = document.getElementById('passwordd').value
//
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       displayUserForSwipes();
//       // createUser()
//
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     });
// }

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log(user)
//   } else {
//
//   }
// })

// Log Out
document.getElementById('logoutBtn').addEventListener('click', logOutUser)

function logOutUser() {
  firebase.auth().signOut().then(() => {
    localStorage.clear(loggedIn)
    front.style.display = "block"
    back.style.display = "none"
  }).catch(e => {
    console.log(e)
  })
}
