userHome = document.getElementById('userHome')
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
