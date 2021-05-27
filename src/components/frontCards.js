const cardContainer = document.getElementById('home')
const swipeButtonz = document.getElementById('buttons')
swipeButtonz.style.display = "block"
cardContainer.style.display = "block"

// const likeBody = {like: true, user_id: sessionStorage.userID, profile_id: shifted_id}
// const dislike =  {dislike: true, user_id: sessionStorage.userID, profile_id: shifted_id}
// const supper_like = {supper_like: true, user_id: sessionStorage.userID, profile_id: shifted_id}


// fetch('http://localhost:3000/likes'){
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//     body: JSON.stringify(
//       likeBody
//     )
//   })
//   .then(res => res.json())
//   .then(function(array) {
//     console.log(array)
//   }).catch(e => {
//     alert(e)
//   })
// }
function tinDogCards() {

  const promise = fetch('http://localhost:3000/profiles')
  promise.then(function(resp) {
      return resp.json()
    })
    .then(function(userArray) {
      console.log(userArray)
      profiles = userArray
      cardContainer.innerHTML = renderAllUsers(userArray)
      swipeButtonz.innerHTML = swipeButtons();
      homeIcons();

    })
}

function renderAllUsers(profilesArray) {
  for (let profile of profilesArray){

  return cards(profile)


  }
}

function cards(user) {
  return `
<div class="moveContainer ">
 <div class="tinderCards__cardContainer swipe ">
  <div  class"allCards" style='background-image: url(${user.image});'>
   <div  class="card">
        <img id="imageCard"src="${user.image}" alt="">
        <h3 id='name' class="nameText ">${user.name}</h3>
      </div>
    </div>
  </div>
</div>
    `
}

// buttons


function swipeButtons(){
  return(
    `
    <div id="homeIcons">
    <div id='swipeButtons' class="swipeButtons">
    <button class="button-icon" type="button" name="button">
    <i id="xIcon" class="far fa-times-circle icons swipeButtons__left"></i>
    </button>
    <button class="button-icon" type="button" name="button">
    <i id="checkIcon" class="far fa-check-square icons swipeButtons__right"></i>
    </button>
    <button class="button-icon" type="button" name="button">
      <i id="starIcon" class="fas fa-star icons swipeButtons__star"></i>
    </button>

    </div>
    </div>`
  );
}
