<script src = "/index.html" ></script>

const resultsBtn = document.querySelector('#results-btn')
const randomBtn = document.querySelector('#random-btn')

resultsBtn.addEventListener('submit', submitHandler())

function submitHandler(e) {
    e.preventDefault()
}

function getData() {
    fetch('http://localhost5000')
    .then
}
