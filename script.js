// Die Gerichte kommen aus scripts/db.js (Array "myDishes")

function init() {                                               // wird beim Laden der Seite aufgerufen (<body onload="init()">)
    renderDishes();
}


function renderDishes() {
    let dishesRef = document.getElementById('dishes');
    let categories = getCategories();
    dishesRef.innerHTML = '';
    for (let i = 0; i < categories.length; i++) {
        dishesRef.innerHTML += getCategoryTemplate(categories[i]);
        dishesRef.innerHTML += getDishesOfCategory(categories[i]);
    }
}


function getDishesOfCategory(category) {
    let dishesHtml = '';
    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].category === category) {
            dishesHtml += getDishTemplate(i);
        }
    }
    return dishesHtml;
}


function getCategories() {                                      // jede Kategorie nur einmal, in der Reihenfolge aus db.js
    let categories = [];
    for (let i = 0; i < myDishes.length; i++) {
        if (!categories.includes(myDishes[i].category)) {
            categories.push(myDishes[i].category);
        }
    }
    return categories;
}


function formatPrice(price) {                                   // 16.9 → "16,90 €"
    return price.toFixed(2).replace('.', ',') + ' €';
}
