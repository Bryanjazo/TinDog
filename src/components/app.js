const userHome = document.getElementById('userHome')

function displayUserForSwipes(){
    const promise = fetch('http://localhost:3000/users')
    promise.then(function(resp){
        return resp.json()
    })
    .then(function(userArray){
      console.log(userArray)
      userHome.innerHTML = displayAllUsers(userArray)
    })
}


function displayAllUsers(userArray){
  return userArray.map(displayUser).join('')
}

function displayUser(user){
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
}
