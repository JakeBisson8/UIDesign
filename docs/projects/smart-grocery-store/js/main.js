// Function is called when any of the tabs are clicked.
// Function will display proper tab content for the specific tab button that was clicked

function openTab(breadcrumbID, tabName) {

    //hide all tab elements 
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    //remove the breadcrumb-active class from all breadcrumbs
    var breadcrumbs = document.getElementsByClassName("breadcrumb-item");
    for (var i = 0; i < breadcrumbs.length; i++){
        breadcrumbs[i].className = breadcrumbs[i].className.replace(" breadcrumb-active", "");
    }

    //show the tab who's button was clicked and set the button to active
    document.getElementById(tabName).style.display = "block";
    
    //add active class to breadcrumb
    document.getElementById(breadcrumbID).className += " breadcrumb-active";
}

function openFilter(filterID) {
    //hide all filter tabs
    var tabs = document.getElementsByClassName("product-display");
    for (var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }
    //show filter that was selected
    var filter = document.getElementById(filterID).value;
    var tab = document.getElementById(filter);
    tab.style.display = "flex";
}

function populateProductChoices(vegetarian, glutenFree, lactoseFree, organic) {
    
    //values of the customers preference checkboxes
    var isVegetarian = document.getElementById(vegetarian).checked;
    var isGlutenFree = document.getElementById(glutenFree).checked;
    var isLactoseFree = document.getElementById(lactoseFree).checked;
    var isOrganic = document.getElementById(organic).checked;

    //get all product displays
    var displayProduce = document.getElementById("product-display-produce");
    var displayGrain = document.getElementById("product-display-grain");
    var displayProtein = document.getElementById("product-display-protein");
    var displayDairy = document.getElementById("product-display-dairy");

    //clear the current displays
    displayProduce.innerHTML = "";
    displayGrain.innerHTML = "";
    displayProtein.innerHTML = "";
    displayDairy.innerHTML = "";
    
    //retrieve a restricted option list based on customers preferences
    var optionArray = restrictListProducts(products, isVegetarian, isGlutenFree, isLactoseFree, isOrganic);

    //for each product in the restricted list add checkbox to it's proper product display
    for (let i = 0; i < optionArray.length; i++) {
        let product = optionArray[i];

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.id = i;
        checkbox.value= product.name;
        checkbox.style.display = "none";
        //display.appendChild(checkbox);
        if (product.category == "produce") {
            displayProduce.appendChild(checkbox);
        } else if (product.category == "grain") {
            displayGrain.appendChild(checkbox);  
        } else if (product.category == "protein") {
            displayProtein.appendChild(checkbox);
        } else if (product.category == "dairy") {
            displayDairy.appendChild(checkbox);
        }

        //create div
        let div = document.createElement("div");
        div.id = "product-" + i;
        div.classList.add("product-card");

        //create image
        let image = document.createElement("img");
        image.src = "../../images/broccoli.jpg";
        image.src = product.image;

        //create text
        let text = document.createElement("p");
        text.innerHTML = product.name + " $" + product.price;

        //add image and text to the div
        div.appendChild(image);
        div.appendChild(text);
    
        let label = document.createElement("label");
        label.htmlFor = i;
        label.onclick = function(e) {setChecked(div.id)};
        label.appendChild(div);
        
        if (product.category == "produce") {
            displayProduce.appendChild(label);
            displayProduce.appendChild(document.createElement("br"));
        } else if (product.category == "grain") {
            displayGrain.appendChild(label); 
            displayGrain.appendChild(document.createElement("br"));  
        } else if (product.category == "protein") {
            displayProtein.appendChild(label);
            displayProtein.appendChild(document.createElement("br"));
        } else if (product.category == "dairy") {
            displayDairy.appendChild(label);
            displayDairy.appendChild(document.createElement("br"));
        }
    }
}

function selectedItems() {
    var prod = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById("cart-display");
    c.innerHTML = "";

    //build list of selected items
    var para = document.createElement("P");
    for (var i = 0; i < prod.length; i++) {
        if (prod[i].checked) {
            para.appendChild(document.createTextNode(prod[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(prod[i].value);
        }
    }

    // add paragraph and price total to cart display
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is " + "$" + getTotalPrice(chosenProducts)));
    c.appendChild(document.createElement("br"));
    c.appendChild(document.createElement("br"));

    //update cart size
    var x = document.getElementById("cart-size");
    var size = chosenProducts.length;
    x.innerHTML = size;
}

function setChecked(cardID){
    var card = document.getElementById(cardID);
    //add or remove active class based on if the card had it or not
    if (card.classList.contains("product-card-active")) {
        card.classList.remove("product-card-active");
    } else {
        card.classList.add("product-card-active");
    }
}