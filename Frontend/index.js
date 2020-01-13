// Code your solution here
const sideBar = document.querySelector('div #shoe-list')
const mainShoe = document.querySelector('#main-shoe')
const reviewForm = document.querySelector('#create-review')
// console.log(reviewForm)
displayShoes()
showFirstShoe()


function fetchShoes(){
    return fetch('http://localhost:3000/shoes')
        .then(resp => resp.json())
}


function displayShoes(){
    fetchShoes().then(json => {
        json.forEach(listAShoe)
    })
}

function showFirstShoe(){
    fetchShoes().then(json => showShoe(json[0]))
}

function listAShoe(shoe){
    // console.log(shoe)
    const shoeLi = document.createElement('li')
        shoeLi.textContent = shoe.name
        shoeLi.addEventListener('click', () => fetchIndividualShoe(shoe))
    sideBar.append(shoeLi)
}

function mainShoeConstructor(){
    mainShoe.innerHTML = ''
}

function showShoe(shoe){
    // fetchIndividualShoe(shoe).then(shoe => {
    const shoeImage = mainShoe.querySelector('img')
        shoeImage.src = shoe.image
    const shoeName = mainShoe.querySelector('h4')
        shoeName.innerText = shoe.name
    const shoeDescription = mainShoe.querySelector('p')
        shoeDescription.innerText = shoe.description 
    const shoePrice = mainShoe.querySelector('small')
        shoePrice.innerText = `$ ${shoe.price}` 
    reviewForm.addEventListener('submit', e => {
        e.preventDefault()
        console.log(shoe)
        // if(e.target.review.value === ''){
        //     return;
        // }else{
        //     postFetch(e)
        // }
    })
    const shoeReviews = mainShoe.querySelector('ul')
        shoeReviews.innerHTML = ''
        shoe.reviews.forEach(review => {
            const reviewLi = document.createElement('li');
                reviewLi.innerText = review.content
                shoeReviews.append(reviewLi)
        })
    // })

}


//Could not finish debugging 
function fetchIndividualShoe(shoe){
    return fetch(`http://localhost:3000/shoes/${shoe.id}`)
        .then(resp => resp.json())
        .then(console.log)
}
// Creating a new review 


function postFetch(e){
    fetch(``)
}