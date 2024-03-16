const AIP_URL = "https://dummyjson.com/products"
const productsWrapper = document.querySelector(".products-wrapper")
const loading = document.querySelector(".loading")


async function fetchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res.products))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = "none"
        })
}
fetchData(AIP_URL)



function createCard(data) {
    data.forEach(({ id, thumbnail, brand, rating, description, price, discountPercentage }) => {
        let card = document.createElement("div")
        card.className = "cards"
        card.innerHTML = `
           <div class="cards">
                <div class="card">
                    <div class="card-img">
                        <img class="loop" src=${thumbnail} alt="sdklfnm">
                    </div>
                    <button class="stosk">
                        <h5 class="stosk__h5">SALE</h5>
                    </button>
                    <div class="card-bottm">
                        <h2 class="card-title">${brand}</h2>
                        <div class="stars">
                            <div class="rating">
                                <input value="5" name="rate" id="star5" type="radio">
                                <label title="text" for="star5"></label>
                                <input value="4" name="rate" id="star4" type="radio">
                                <label title="text" for="star4"></label>
                                <input value="3" name="rate" id="star3" type="radio" checked="">
                                <label title="text" for="star3"></label>
                                <input value="2" name="rate" id="star2" type="radio">
                                <label title="text" for="star2"></label>
                                <input value="1" name="rate" id="star1" type="radio">
                                <label title="text" for="star1"></label>
                            </div>
                            <h4 class="stars__h4">(${rating}) отзыво </h4>
                        </div>
                        <p class="card-bottom-p">${description}</p>
                        <div class="prise">
                            <h4 class="prise__h4">${price}₽</h4>
                            <h5 class="prise__h5">${discountPercentage}₽</h5>
                        </div>
                    </div>
                </div>
            </div> 
        `

        card.addEventListener("click", () => singleRoute(id))
        productsWrapper.appendChild(card)
    })
}


function singleRoute(id) {
    window.open(`/pages/prodact-card.html?id=${id}`, "_self")
}
