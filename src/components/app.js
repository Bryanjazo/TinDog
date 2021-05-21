let divCard = document.createElement('div')
divCard.setAttribute('id', 'divHomeCard')
let userHome = document.getElementById('userDetails')
displayUserHome()

function displayUserHome() {
  userHome.innerHTML = Home()
}

function Home() {
  return (
    `<div class="App">
      ${header()}
    </div>

  `
  );
}
