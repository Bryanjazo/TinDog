const likesContainerLeft = document.getElementById('likesLeft')

likesContainerLeft.style.display = 'none'

function likesContainer(){
  const promise = fetch(`http://localhost:3000/users/${sessionStorage.userID}/likes`)
  promise.then(function(resp) {
      return resp.json()
    })
    .then(function(likesArray) {
      console.log(likesArray)
      likesContainerLeft.innerHTML = renderAllLikes(likesArray)
    })
}


function renderAllLikes(likesArray) {
  return likesArray.map(showLikes).join(' ')
}

function showLikes(likes){
  return(  `
    <div id="appendProfile" class="moveLikes ">
     <div class="tinderCards__likes swipeTwo ">
      <div  class"allCards" style='background-image: url(${likes.image});'>
       <div  class="card">
            <img id="imageCard"src="${likes.image}" alt="">
            <h3 id='name' class="nameText">name: ${likes.name}, gender: ${likes.gender}, interest: ${likes.interest}</h3>
          </div>
        </div>
      </div>
    </div>
    `)
}
