const AccessKey = "cTY-3U5oAYh3iZTyn9kfKY3jB_VmdmxQuWtrdYJ-GxY" ;
const form = document.getElementById('form');
const searchBox = document.getElementById('searchInput');
const searchResult = document.getElementById('search-result');
const showMoreButton = document.getElementById("showMoreButton");

let inputData = '';
let page = 1;

async function searchImage(){
    inputData = searchBox.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}
    &client_id=${AccessKey}&per_page=12` ;
    const response = await fetch(url);
    const data = await response.json();
    if (page===1){
        searchResult.innerHTML='';
    }
    const results = data.results;
  console.log(data)
        results.map((result) => {
            const image = document.createElement('img');
            image.src = result.urls.small ;
            const imageLink = document.createElement('a') ;
            imageLink.href = result.links.html;
            imageLink.target = "_blank" ;
            imageLink.appendChild(image)
            searchResult.appendChild(imageLink)

        });
}
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImage()
})
showMoreButton.addEventListener('click',()=>{
    // event.preventDefault();
    page++;
    searchImage()
})