const likesContainerLeft = document.getElementById('likesLeft')

likesContainerLeft.style.display = 'none'

buttonOrganizer = document.getElementById('organize')

buttonOrganizer.addEventListener('click', (e) =>{

  const promise = fetch(`http://localhost:3000/users/${sessionStorage.userID}/likes`)
  promise.then(function(resp) {
      return resp.json()
    })
    .then(function(likesArray) {
          likesContainerLeft.innerHTML = organizedMethod(likesArray)


    })
})



function organizedMethod([...likesArray]){
  console.log("sorted by name:")
  likesArray.sort((a,b)=>{
    if(a.name < b.name){
      return -1
    }
    if(a.name > b.name){
      return 1
    }
    return 0
  })
  console.log(likesArray)
}
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

// "buttonOrganize"
// find a way to re organize the fetch or the object being passed in
//conditional maybe
//
