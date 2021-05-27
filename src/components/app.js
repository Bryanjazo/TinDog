let divCard = document.createElement('div')
divCard.setAttribute('id', 'divHomeCard')
let userHome = document.getElementById('userDetails')


function displayUserHome() {
  userHome.innerHTML = Home()
  navBard()
  
}

function Home() {
  return (
    `<div class="App">
      ${header()}
    </div>

  `
  );
}
