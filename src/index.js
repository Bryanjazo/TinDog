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

// Log in
document.getElementById('logInUser').addEventListener('click', logInUser)

function logInUser() {
  console.log('call')
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  firebase.auth().signInWithEmailAndPassword(email, password).catch(e => {
    console.log(e)
  })
}

function showUserHome(user) {
  document.getElementById('userDetails').innerHtml = `
  <P>Logged In Success with ${user.email}`
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
function createUser(email, uid) {
  let config = {
    method: "POST",
    mode: "no-cors",
    headers:{
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
}

document.getElementById('btnSignUpO').addEventListener('click', signUpUser)

function signUpUser() {
  let email = document.getElementById('emaill').value
  let password = document.getElementById('passwordd').value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      createUser(firebase.auth().createUser().email, firebase.auth().createUser().uid)

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user)
  } else {

  }
})

// Log Out
document.getElementById('logoutBtn').addEventListener('click', logOutUser)

function logOutUser() {
  firebase.auth().signOut().then(() => {
    front.style.display = "block"
    back.style.display = "none"
  }).catch(e => {
    console.log(e)
  })
}
