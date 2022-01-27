/*let search = document.querySelector('search')
let searchBtn = document.querySelector('searchBtn')
searchBtn.onclick = function(){
    let url = `http://localhost:5000` +search.value;
    window.open(url); } */

    let searchBtn = document.querySelector('searchBtn')
    searchBtn.addEventListener('click' ,getData)
    function getData(){
        let url="http://localhost:5000/results.html";
        fetch(url).then(window.open(url)).catch(console.warn)
    }
