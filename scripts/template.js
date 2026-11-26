// HTML-Templates: jede Funktion gibt nur HTML zurück

function getCategoryTemplate(category) {
    return /*html*/ `
        <h2 class="category-title">${category}</h2>`;
}


function getDishTemplate(index) {                               // Bootstrap: horizontale Karte (Bild links, Text rechts)
    return /*html*/ `
        <article class="card dish-card">
            <div class="row g-0">
                <div class="col-sm-4">
                    <img class="dish-image" src="${myDishes[index].image}" alt="${myDishes[index].name}">
                </div>
                <div class="col-sm-8">
                    ${getDishInfoTemplate(index)}
                </div>
            </div>
        </article>`;
}


function getDishInfoTemplate(index) {
    let dish = myDishes[index];
    return /*html*/ `
        <div class="card-body dish-body">
            <div class="dish-head">
                <h3 class="card-title dish-name">${dish.name}</h3>
                <span class="dish-price">${formatPrice(dish.price)}</span>
            </div>
            <p class="card-text dish-description">${dish.description}</p>
            <button class="dish-button">Add to basket</button>
        </div>`;
}
