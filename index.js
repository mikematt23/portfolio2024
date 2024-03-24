const project1 = document.getElementById("project1")
const project2 = document.getElementById("project2")
const project3 = document.getElementById("project3")
const project4 = document.getElementById("project4")

const projectsArray = [project1,project2,project3,project4]

const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')

const title1 = document.getElementById('title1')
const description1 = document.getElementById('description1')
const codeLink1 = document.getElementById('codeLink1') 
const projectLink1 = document.getElementById('projectLink1')

const title2 = document.getElementById('title2')
const description2 = document.getElementById('description2')
const codeLink12 = document.getElementById('codeLink2') 
const projectLink2 = document.getElementById('projectLink2')

const title13 = document.getElementById('title3')
const description3 = document.getElementById('description3')
const codeLink3 = document.getElementById('codeLink3') 
const projectLink3 = document.getElementById('projectLink3')

const title4 = document.getElementById('title4')
const description4 = document.getElementById('description4')
const codeLink4 = document.getElementById('codeLink4') 
const projectLink4 = document.getElementById('projectLink4')


openButton.addEventListener('click',()=>{
  project1.classList.remove('closeAnimation1')
  project2.classList.remove('closeAnimation2')
  project3.classList.remove('closeAnimation3')
  project4.classList.remove('closeAnimation4')
  
  project1.classList.add('openAnimation1')
  project2.classList.add('openAnimation2')
  project3.classList.add('openAnimation3')
  project4.classList.add('openAnimation4')
  
 setTimeout(()=>{
  title1.innerText = "Express API - NodeJS, Express, SQL"
  description1.innerText = "This is an Express API I create that use Node and Express to conect to a SQL database to search, update, delete, insert, and return data base on the routes and the parameters "
  codeLink1.innerText = "Code"
  codeLink1.classList.add('a')
  codeLink1.addEventListener('click',()=>{
    window.open("https://github.com/mikematt23/restAPI")
  })
  
  title2.innerText = "ScrubHub - React Native, Redux"
  description2.innerText = "This is a project that use React Native to create a mobile app for IOS and Android. The app allows a user sign up to schedule a mobile car wash"
  codeLink12.innerText = "Code"
  codeLink12.classList.add('a')
  codeLink12.addEventListener('click',()=>{
    window.open("https://github.com/mikematt23/ScrubHubMobile")
  })

  title13.innerText = "React Meals - React,CSS"
  description3.innerText = "This is a project that use React to mange a dummy shopping cart using based on user actions."
  codeLink3.innerText = "Code"
  codeLink3.classList.add('a')
  projectLink3.innerText = "Project"
  projectLink3.classList.add('a')

  project3.addEventListener('click',()=>{
    window.open("https://eloquent-pixie-cfa919.netlify.app/")
  })
  codeLink3.addEventListener('click',()=>{
    window.open("https://github.com/mikematt23/reactMeals/tree/master/src")
  })
 
  
  title4.innerText = "Tic-Tac-Toe - Javascript,CSS"
  description4.innerText = "This project use vanilla JavaScript to create a basic game of tic tac toe with all rules and fuctionality"
  codeLink4.innerText = "Code"
  codeLink4.classList.add('a')
  projectLink4.innerText = "Project"
  projectLink4.classList.add('a')

  projectLink4.addEventListener("click",()=>{
    window.open("https://glittering-zuccutto-73cdb4.netlify.app/")
  })
  codeLink4.addEventListener('click',()=>{
    window,open("https://github.com/mikematt23/ticTacTOe2023")
  })
 },1500)
})

closeButton.addEventListener('click',()=>{
  project1.classList.remove('openAnimation1')
  project2.classList.remove('openAnimation2')
  project3.classList.remove('openAnimation3')
  project4.classList.remove('openAnimation4')
  
  project1.classList.remove('p')
  project2.classList.remove('p')
  project3.classList.remove('p')
  project4.classList.remove('p')

  projectLink1.classList.remove('a')
  projectLink2.classList.remove('a')
  projectLink3.classList.remove('a')
  projectLink4.classList.remove('a')

  codeLink1.classList.remove('a')
  codeLink12.classList.remove('a')
  codeLink3.classList.remove('a')
  codeLink4.classList.remove('a')

  project1.classList.add('closeAnimation1')
  project2.classList.add('closeAnimation2')
  project3.classList.add('closeAnimation3')
  project4.classList.add('closeAnimation4')

  title1.innerText = ""
  description1.innerText = ""
  codeLink1.innerText = ""
  codeLink1.href = ""
  projectLink1.innerText = ""
  projectLink1.href = ""

  title2.innerText = ""
  description2.innerText = ""
  codeLink12.innerText = ""
  codeLink12.href = ""
  projectLink2.innerText = ""
  projectLink2.href = ""
  
  title13.innerText = ""
  description3.innerText = ""
  codeLink3.innerText = ""
  codeLink3.href = ""
  projectLink3.innerText = ""
  projectLink3.href = ""

  title4.innerText = ""
  description4.innerText = ""
  codeLink4.innerText = ""
  codeLink4.href = ""
  projectLink4.innerText = ""
  projectLink4.href = ""
})