import Comic from "./scripts/comic.js"


const comic1 = new Comic("Capitan America", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7234741-01.jpg", "Rahzzah")
console.log(comic1);
const comic2 = new Comic("Incredibles", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7234170-01a.jpg","Jean-Claudio")

const elem = document.getElementById("comic")

elem.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${comic1.getPoster()}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${comic1.getName()}</h5>
    <p class="card-text"> <strong> Creator</strong>: ${comic1.getCreator()} </p>
   
  </div>
</div>
`
