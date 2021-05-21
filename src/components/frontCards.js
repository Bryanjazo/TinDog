const cardContainer = document.getElementById('test')
cardContainer.style.display = "block"


function tinDogCards(){
  const people = peopleArray([
    {
      name: "kelly",
      url: "https://unsplash.com/photos/RfoISVdKM4U"
    },
    {
      name: "betty",
      url: "https://unsplash.com/photos/AsJirOOLN_s"
    }
  ]);
    // const promise = fetch('http://localhost:3000/profiles')
    // promise.then(function(resp){
    //     return resp.json()
    // })
    // .then(function(userArray){
    //   console.log(userArray)
    // cardContainer.innerHTML = renderAllUsers(userArray)
    // })
}


// function renderAllUsers(profilesArray){
//   // for (let profile of profilesArray){
//   //   debugger
//   // return cards(profile)
//   // }
//   return profilesArray.map(cards).join('')
// }

function cards(user){
  return `
  <div class="swipe" key=${user.name} preventSwipe={['up', ['down']]}>
   <div style={{background-image: "url(${user.image})" }} class="card">
        <h3>${user.name}</h3>
    </div>
    </div>`
}
