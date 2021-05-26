const cardContainer = document.getElementById('home')
const swipeButtonz = document.getElementById('buttons')
swipeButtonz.style.display = "block"
cardContainer.style.display = "block"


function tinDogCards() {

  const promise = fetch('http://localhost:3000/profiles')
  promise.then(function(resp) {
      return resp.json()
    })
    .then(function(userArray) {
      console.log(userArray)
      cardContainer.innerHTML = renderAllUsers(userArray)
      swipeButtonz.innerHTML = swipeButtons();
    })
}


function renderAllUsers(profilesArray) {
  // for (let profile of profilesArray){
  //   debugger
  // return cards(profile)
  // }
  return profilesArray.map(cards).join('')

}

function cards(user) {
  return `
 <div class="tinderCards__cardContainer">
 <div
  <div style='background-image: url("styles/dog.jpg");' class="swipe" key=${user.name} >
   <div class="card">
        <h3 class="nameText">${user.name}</h3>
    </div>
    </div>
    </div>
    `
}

// buttons


function swipeButtons(){
  return(
    `<div id='swipeButtons' class="swipeButtons">

    <button class="button-icon" type="button" name="button">
    <i class="far fa-times-circle icons swipeButtons__left"></i>
    </button>
    <div class="swipeButtons">
    <button class="button-icon" type="button" name="button">
    <i class="far fa-check-square icons swipeButtons__right"></i>
    </button>
    <button class="button-icon" type="button" name="button">
      <i class="fas fa-star icons swipeButtons__star"></i>
    </button>
    </div>`
  );
}
