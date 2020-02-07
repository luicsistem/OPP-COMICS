import Comic from "./scripts/comic.js"

//instanciando objects
const comic1 = new Comic("Capitan America", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7234741-01.jpg", "Rahzzah")

const comic2 = new Comic("Incredibles", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7234170-01a.jpg","Jean-Claudio")
const comic3 = new Comic("Gijoe", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7233898-270a.jpg","Robert Atkins")
const comic4 = new Comic("Young Justice", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7233232-13.jpg","John Timms")
const comic5 = new Comic("Batman", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7232873-03.jpg","Robert Atkins")
const comic6 = new Comic("Hulk ", "https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7234744-01.jpg","Max Fiumara")



const elem = document.getElementById("comics")

// muestra comics en el dom
function showComics (comic){
    const son = document.createElement("div")
    son.classList.add("m-3")
son.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${comic.getPoster()}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title ">${comic.getName()}</h5>
    <p class="card-text"> <strong> Creator</strong>: ${comic.getCreator()} </p>
   
  </div>
</div>
`
elem.appendChild(son)

}
showComics(comic1)
showComics(comic2)
showComics(comic3)
showComics(comic4)
showComics(comic5)
showComics(comic6)

document.getElementById("year").innerHTML = new Date().getFullYear();
