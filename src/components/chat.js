const likesContainerLeft = document.getElementById('home')



function likesContainer(){
  const promise = fetch(`http://localhost:3000/users/${sessionStorage.userID}/likes`)
  promise.then(function(resp) {
      return resp.json()
    })
    .then(function(likesArray) {
      console.log(likesArray)
      profiles = likesArray
      likesContainerLeft.innerHTML = renderAllLikes(likesArray)
    })
}


function renderAllLikes(likesArray) {
  return likesArray.map(showLikes).join(' ')
}

function showLikes(likes){
  return(
    ``
  )
}
