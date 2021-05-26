const profileContainer = document.getElementById('profile')
profileContainer.style.display = "none"


function profile() {
  console.log('load1')
  profileContainer.innerHTML = imageAndForm();
  sendDataForProfiles()

}

function imageAndForm() {
  return (
    `
        <form id="homeProfile">
          <label htmlFor="caption">Name</label>
          <input class="profileField" type="text" name="name" /><br>
          <label htmlFor="caption">Image</label>
          <input class="profileField" type="file" name="image" accept="image/*" /><br>
          <label htmlFor="caption">Age</label>
          <input class="profileField" type="text" name="age" /><br>
          <label htmlFor="caption">Gender</label>
          <input class="profileField" type="text" name="gender"" /><br>
          <label htmlFor="caption">interests Cats/Dogs</label>
          <input class="profileField" type="text" name="interest" /><br>
          <label htmlFor="caption">Bio</label<br>
          <input class="profileField" type="text" name="bio"  /><br>
          <input type="submit" value="submit" />
        </form>`
      );
}

function sendDataForProfiles(){
let profileField = document.querySelectorAll('.profileField')
let profileForm = document.getElementById('homeProfile')
console.log('here')

profileForm.addEventListener('submit', function(e) {

  console.log('here2')

  fetch('http://localhost:3000//users/:user_id/profiles', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
      body: JSON.stringify({
        name: profileField[0].value,
        avatar: profileField[1].value,
        age: profileField[2].value,
        gender: profileField[3].value,
        interest: profileField[4].value,
        bio: profileField[5].value,
        user_id: sessionStorage.userID
      })
    })
    .then(res => res.json())
    .then(function(object) {
      console.log(object)
    }).catch(e => {
      alert(e)
    })
  })
}
