const cardContainer = document.getElementById('cardContainer')


function tinDogCards(){
    const promise = fetch('http://localhost:3000/users')
    promise.then(function(resp){
        return resp.json()
    })
    .then(function(userArray){
      console.log(userArray)
      cardContainer.innerHTML = renderAllUsers(userArray)
    })
}

function renderAllUsers(userArray){
  return userArray.map(cards).join('')
}

function cards(user){
  return (
       `<div class="pokemon-card" data-id="${user.id}">
           <div class="pokemon-frame">
               <h1 class="center-text">${user.name}</h1>
               <div class="pokemon-image">
                   <img alt="pokemon-image" src="${user.image}">
               </div>
               <button data-action="delete" class="pokemon-delete-button">Delete</button><br>
               <form class="pokemon-update">
                   <input type="text">
                   <input type="submit">
               </form>
           </div>
       </div>`
   )
  //     const people = []
  //     setpeople([...people,])
  // return(
  //   `<div>
  //       <h1${user.name}</h1>
  //   </div>`
  // )
}
