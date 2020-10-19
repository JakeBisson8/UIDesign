var products = [
    {
        name: "broccoli",
        category: "produce",
        image: "images/broccoli.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 1.99
    },
    {
        name: "broccoli (organic)",
        category: "produce",
        image: "images/broccoli.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "bread",
        category: "grain",
        image: "images/bread.jpg",
        vegetarian: true,
        glutenFree: false,
        lactoseFree: true,
        organic: true,
        price: 2.35
    }, 
    {
        name: "salmon",
        category: "protein",
        image: "images/salmon.jpg",
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 9.99
    },
    {
        name: "salmon (organic)",
        category: "protein",
        image: "images/salmon.jpg",
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        organic: true,
        price: 9.99
    },
    {
        name: "milk",
        category: "dairy",
        image: "images/milk.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: false,
        organic: false,
        price: 3.99
    },
    {
        name: "milk (lactose free)",
        category: "dairy",
        image: "images/milk.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 3.99
    },
    {
        name: "apple",
        category: "produce",
        image: "images/apple.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 2.49
    },
    {
        name: "apple (organic)",
        category: "produce",
        image: "images/apple.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: true,
        price: 2.49
    },
    {
        name: "steak",
        category: "protein",
        image: "images/steak.jpg",
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 17.99
    },
    {
        name: "steak (organic)",
        category: "protein",
        image: "images/steak.jpg",
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        organic: true,
        price: 17.99
    },
    {
        name: "croissant",
        category: "grain",
        image: "images/croissant.jpg",
        vegetarian: true,
        glutenFree: false,
        lactoseFree: true,
        organic: true,
        price: 2.99
    },
    {
        name: "cheese",
        category: "dairy",
        image: "images/cheese.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: false,
        organic: false,
        price: 4.99
    },
    {
        name: "cheese (organic)",
        category: "dairy",
        image: "images/cheese.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: false,
        organic: true,
        price: 4.99
    },
    {
        name: "pear",
        category: "produce",
        image: "images/pear.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: false,
        price: 1.99
    },
    {
        name: "pear (organic)",
        category: "produce",
        image: "images/pear.jpg",
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        organic: true,
        price: 1.99
    }
];

function restrictListProducts(prods, isVegetarian, isGlutenFree, isLactoseFree, isOrganic) {
    let products = [];
    for (let i=0; i<prods.length; i++){
        //define restriction booleans -> if all booleans are satisfied item can be added to products
        let vegetarianPass = !(isVegetarian == true && prods[i].vegetarian == false);
        let glutenFreePass = !(isGlutenFree == true && prods[i].glutenFree == false);
        let lactoseFreePass = !(isLactoseFree == true && prods[i].lactoseFree == false);
        let organicPass = !(isOrganic == true && prods[i].organic == false);
        if (vegetarianPass && glutenFreePass && lactoseFreePass && organicPass){
            products.push(prods[i]);
        }
    }
    //sort the product list by their price in ascending order
    //sorting inspired by code from http://www.javascriptkit.com/javatutors/arraysort2.shtml
    products.sort(function(prod1 , prod2) {
        return prod1.price - prod2.price;
    });
    return products;
}

function getTotalPrice(chosenProducts) {
    var totalPrice = 0;
    for (let i=0; i<products.length; i+=1){
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}