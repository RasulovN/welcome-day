let navList = document.querySelector('.nav-list');

function openNav(){
    navList.classList.add('active');
}
function closeNav(){
    navList.classList.remove('active');
}

 
  // dark mode
  const body = document.querySelector('body')
  const conT = document.querySelector('.container')
  const conT2 = document.querySelector('.container2')
  const nav = document.querySelector('.nav')
//   const navA = document.querySelector('.navA')
  const toggle = document.getElementById('toggle');
  toggle.onclick = function() {
      toggle.classList.toggle('active')
      body.classList.toggle('active')
      conT.classList.toggle('active')
      conT2.classList.toggle('active')
      nav.classList.toggle('active')
    //   navA.classList.toggle('active')
  }

//   document.getElementById('q').innerHTML = '\uF1D1'