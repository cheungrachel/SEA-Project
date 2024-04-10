/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Water Color: Boat',
        price: 20,
        quantity: 1,
        image: 'images/watercolor 1.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 2,
        name: 'Water Color: Flowers',
        price: 25,
        quantity: 1,
        image: 'images/watercolor 2.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 3,
        name: 'Water Color: House and Trees',
        price: 15,
        quantity: 1,
        image: 'images/watercolor 3.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 4,
        name: 'Water Color: Dog',
        price: 23,
        quantiy: 1,
        image: 'images/watercolor 4.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 5,
        name: 'Water Color: Italy',
        price: 20,
        quantiy: 1,
        image: 'images/watercolor 5.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 6,
        name: 'Water Color: Florence',
        price: 20,
        quantiy: 1,
        image: 'images/watercolor 5.jpeg',
        nature: {
            type: 'Watercolor'
        }
    },
    {
        id: 7,
        name: 'Oil Color Painting: Lollipop',
        price: 20,
        quantiy: 1,
        image: 'images/oil painting 1.jpeg',
        nature: {
            type: 'Oil Painting'
        }
    },
    {
        id: 8,
        name: 'Oil Color Painting: Fields',
        price: 10,
        quantiy: 1,
        image: 'images/oil painting 2.jpeg',
        nature: {
            type: 'Oil Painting'
        }
    },
    {
        id: 9,
        name: 'Oil Color Painting: Fruit',
        price: 20,
        quantiy: 1,
        image: 'images/oil painting 3.jpeg',
        nature: {
            type: 'Oil Painting'
        }
    },
    {
        id: 10,
        name: 'Photography: Beautiful Day',
        price: 20,
        quantiy: 1,
        image: 'images/photo1.jpeg',
        nature: {
            type: 'Photography'
        }
    },
    {
        id: 11,
        name: 'Photography: Shopping Galore',
        price: 20,
        quantiy: 1,
        image: 'images/photo2.jpeg',
        nature: {
            type: 'Photography'
        }
    },
    {
        id: 12,
        name: 'Photography: Fish',
        price: 20,
        quantiy: 1,
        image: 'images/photo3.jpeg',
        nature: {
            type: 'Photography'
        }
    },
    {
        id: 13,
        name: 'Photography: Through a Window',
        price: 20,
        quantiy: 1,
        image: 'images/photo4.jpeg',
        nature: {
            type: 'Photography'
        }
    },
    {
        id: 14,
        name: 'Graphic Design: Snoopy',
        price: 20,
        quantiy: 1,
        image: 'images/themed 1.jpeg',
        nature: {
            type: 'Themed Graphics'
        }
    },
    {
        id: 15,
        name: 'Graphic Design: Toy Story',
        price: 20,
        quantiy: 1,
        image: 'images/themed 2.jpeg',
        nature: {
            type: 'Themed Graphics'
        }
    },
];
let productFilter = listProducts;
showProduct(productFilter);

function showProduct(productFilter){
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = '$' + item.price.toLocaleString() + '.00';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;

    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        // check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }

        return true;
    });

    console.log('Filtered Products:', productFilter); // Log the filtered products
    showProduct(productFilter);
});
