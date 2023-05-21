let cart = JSON.parse(localStorage.getItem("cart")) || [];
let categories = data.categories;
let cart_items = document.getElementById("cart_items");
let cartAmount = ()=>{
    let cartAmount = document.getElementById("cart_amount");
    if(cart.length === 0){
        cartAmount.innerHTML = "";
        cartAmount.style.display = `none`;
    }else{
        cartAmount.style.display = `block`;
        cartAmount.innerHTML = cart.map((product)=>product.item).reduce((amount, sum)=>sum + amount, 0);
    }
};

cartAmount();

let generateShoppingCart = ()=>{
    if(cart.length !== 0){
        return (cart_items.innerHTML = cart.map((product) => {
            var ime;
            for(let val of data.categories){
                for(let tmp of val.products){
                    if(tmp.id === product.id){
                        ime = tmp.name;
                    }
                }
            }
            return `
            <div id="${product.id}" class="cart_item">
                <div class="item_name">
                    <h3>${ime}</h3>
                </div>
                <div class="buttons_amount">
                    <img onclick="decrement(${product.id})" id="minus" class="minus" src="images/ikone/minus.png">
                    <div id="item_amount_cart" class="item_amount_cart">${product.item}</div>
                    <img onclick="increment(${product.id})" id="plus" class="plus" src="images/ikone/plus.png">
                </div>
            </div>`
        }).join(""));
    }else{
        cart_items.innerHTML = `<h2>praznoo</h2>`;
    }
};
generateShoppingCart();


let increment = (id) => {
    let selectedItem = id;
    let item = cart.find((product) => product.id === selectedItem.id);
    if(item === undefined){
        cart.push({id: selectedItem.id,
            item: 1});
    }else{
        item.item += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    update(selectedItem.id);
    generateShoppingCart();
};
let decrement = (id) => {
    let selectedItem = id;
    let item = cart.find((product) => product.id === selectedItem.id);
    if(item === undefined){
        return;
    }else if(item.item === 0){
        return;
    }else{
        item.item -= 1;
    }
    update(selectedItem.id);
    cart = cart.filter((product) => product.item !== 0);
    generateShoppingCart();
    localStorage.setItem("cart", JSON.stringify(cart));
    cartAmount();
};
let update = (id) => {
    let search = cart.find((product)=>product.id === id);
    document.getElementById(id).innerHTML = search.item;
    cartAmount();
};