const profileContainer = document.getElementById('profile')
const updateContainer = document.getElementById('update')
let profileContainerOne = document.getElementById('profileContainer')
let baseUrl = "http://localhost:3000"
profileContainer.style.display = "none"
updateContainer.style.display = "none"


class Profile {
  constructor({id,name, image, age, gender, interest, bio}) {
    this.id = id
    this.name = name
    this.image = image
    this.age = age
    this.gender = gender
    this.interest = interest
    this.bio = bio
  }
  renderProfile(){
    return(  `
      <div id="appendProfile" class="moveContainer ">
       <div class="tinderCards__cardContainer swipe ">
        <div  class"allCards" style='background-image: url(${this.image});'>
         <div  class="card">
              <img id="imageCard"src="${this.image}" alt="">
              <h3 id='name' class="nameText ">${this.name}</h3>
            </div>
          </div>
        </div>
      </div>
      `)
  }
  renderCard(){
    profileContainerOne.innerHTML = this.renderProfile();
  }
}

function profileHome() {
  console.log('load1')
  profileContainer.innerHTML = imageAndForm();
  updateContainer.innerHTML = upDateForm();
  sendDataForProfiles()


}

function imageAndForm() {
  return (
    `
        <form id="homeProfile">
        <h1> Create A Profile </h1>
          <label htmlFor="caption">Name</label>
          <input class="profileField" type="text" name="name" /><br>
          <label htmlFor="caption">Image</label>
          <input class="profileField" type="text" name="image" accept="image/*" /><br>
          <label htmlFor="caption">Age</label>
          <input class="profileField" type="text" name="age" /><br>
          <label htmlFor="caption">Gender</label>
          <input class="profileField" type="text" name="gender"" /><br>
          <label htmlFor="caption">interests Cats/Dogs</label>
          <input class="profileField" type="text" name="interest" /><br>
          <label htmlFor="caption">Bio</label<br>
          <input class="profileField" type="text" name="bio"  /><br>
          <input type="submit" value="submit" />
        </form>
        <br>
        <br>
        <br>
        <br>
        `
  );
}

function sendDataForProfiles() {
  let profileField = document.querySelectorAll('.profileField')
  let profileForm = document.getElementById('homeProfile')
  console.log('here')

  profileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('here2')

    fetch('https://tindog-backend-bryan.herokuapp.com/users/:user_id/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: profileField[0].value,
          image: profileField[1].value,
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
        let obj = object
        p = new Profile(obj)
        p.renderCard()
        localStorage.profile_id = obj.id

      }).catch(e => {
        alert(e)
      })
  })
}



function upDateFromPush() {
  let updateField = document.querySelectorAll('.updateField')
  let updateHome = document.getElementById('upDateHome')

  updateHome.addEventListener('submit', function(e) {
    console.log('here2')
    e.preventDefault();
    fetch('https://tindog-backend-bryan.herokuapp.com/users/:user_id/profiles/:id', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: updateField[0].value,
          image: updateField[1].value,
          age: updateField[2].value,
          gender: updateField[3].value,
          interest: updateField[4].value,
          bio: updateField[5].value,
          user_id: sessionStorage.userID
        })
      })
      .then(res => res.json())
      .then(function(object) {
        let obj = object
        p = new Profile(obj)
        debugger
        console.log(object)

      })
  })
}

function upDateForm() {
  return (
    `
        <form id="upDateHome">
        <h1> Update Profile </h1>
          <label htmlFor="caption">Name</label>
          <input class="updateField" type="text" name="name" /><br>
          <label htmlFor="caption">Image</label>
          <input class="updateField" type="text" name="image" accept="image/*" /><br>
          <label htmlFor="caption">Age</label>
          <input class="updateField" type="text" name="age" /><br>
          <label htmlFor="caption">Gender</label>
          <input class="updateField" type="text" name="gender"" /><br>
          <label htmlFor="caption">interests Cats/Dogs</label>
          <input class="updateField" type="text" name="interest" /><br>
          <label htmlFor="caption">Bio</label<br>
          <input class="updateField" type="text" name="bio"  /><br>
          <input type="submit" value="submit" />
        </form><br>
        <br>
        <br>
      `
  );
}
