let buttons = document.getElementsByClassName('button-icon')

//switch sign up and log in screens

document.addEventListener('DOMContentLoaded',()=>{
tinDogCards()
swipeButtons()
displayUserHome()
navBard()
// profile()
imageAndForm()




})


// Event listeners

document.getElementById('logInUser').addEventListener('click', logInUser)
document.getElementById('btnSignUpO').addEventListener('click', signUpUser)
// document.getElementById('btnSignUpO').addEventListener('click', signUpUser)

let chat = chatPage();
// let Profile = profile();
let buttonSwipe = swipeButtons();



function navBard(){
let headerDiv = document.getElementById('headerID')
buttonSwipe = document.getElementById('swipeButtons')
document.getElementById('logoutBtn').addEventListener('click', logOutUser)
  headerDiv.addEventListener('click', function(e){
    if (e.target.id == "left-icon"){
      console.log('left')
      profile();
      swipeButtonz.style.display = "none"
      cardContainer.style.display = "none"
      profileContainer.style.display = 'block'
      chat.style.display = 'none'
    }else if (e.target.id == "middle-icon") {
      console.log('home')
      tinDogCards();
      swipeButtonz.style.display = "block"
      cardContainer.style.display = "block"
      profileContainer.style.display = 'none'
      chat.style.display = 'none'
    }else if (e.target.id == "right-icon"){
      console.log('right')
      chatPage();
      swipeButtonz.style.display = "none"
      chat.style.display = 'block'
      profileContainer.style.display = 'none'
      cardContainer.style.display = "none"
    }
  })
  }
// for (let btn of buttons) {
//   btn.addEventListener('click', function(e) {
//     if (e.target.id == "left-icon") {
//       console.log('left')
//       profile();
//       cardContainer.style.display = "none"
//       profileContainer.style.display = 'block'
//       chat.style.display = 'none'
//     } else if (e.target.id == "middle-icon") {
//       console.log('home')
//       tinDogCards();
//       cardContainer.style.display = "block"
//       profileContainer.style.display = 'none'
//       chat.style.display = 'none'
//     } else {
//       console.log('right')
//       chatPage();
//       chat.style.display = 'block'
//       profileContainer.style.display = 'none'
//       cardContainer.style.display = "none"
//     }
//   })



// Urls
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`

var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");
var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");
// Variables for pushing user to databse
function switchSignup(){
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
const signUpForm = document.querySelector(".signup-form")
const inputFields = document.querySelectorAll(".input-text")

// Log in
const logInForm = document.querySelector(".login-form")
const logInFields = document.querySelectorAll(".input-box")



logInForm.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log('here')

  fetch('http://localhost:3000/sessions', {
    method: 'POST',
    headers:{
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
      console.log(object)
      let obj = object
      sessionStorage.userID = obj.id
      displayUserHome()
    })
})



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

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault()
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers:{
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
      sessionStorage.userID = obj.id
      displayUserHome();
    })
})



function signUpUser() {
  console.log('call')
  let email = document.getElementById('emaill').value
  let password = document.getElementById('passwordd').value

  firebase.auth().createUserWithEmailAndPassword(email, password).then(auth => {
    firebase.storageBucket().ref('users.' + auth.user.uid + '/profile.jpg').put(file).then(function (){
      console.log('succesfully uploaded')
    })
  })
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;


      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log(user)
//   } else {
//
//   }
// })
// // adding profile pic
// imgSrcDisplay = document.getElementById('img')
// let file = {};
// function chooseFile(e){
//  file = e.target.files[0];
// }
//
// function signUpButtonPressed(){
//   let email = document.getElementById('emaill').value
//   let password = document.getElementById('passwordd').value
//   firebase.auth().createUserWithEmailAndPassword(email, password).then(auth => {
//
//     firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
//       console.log('success')
//     })
//     console.log(auth);
//   }).catch(e => {
//     console.log(e)
//   })
// }
//
// firebase.auth().onAuthStateChanged(user => {
//   if(user){
//     firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
//       console.log(imgSrcDisplay.src = imgUrl)
//       imgSrcDisplay.src = imgUrl
//
//     })
//   }
// })

// Log Out


function logOutUser() {
  firebase.auth().signOut().then(() => {
    sessionStorage.userID = ""
    front.style.display = "block"
    back.style.display = "none"

  }).catch(e => {
    console.log(e)
  })
}
