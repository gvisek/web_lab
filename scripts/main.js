
let main = document.getElementById("main");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let categories = data.categories;
let jela_rostilj = categories.find(x => {
    return x.name==="jela s rostilja";
});

let drawMain = () => {
    let naslov = document.getElementById("naslov");
    naslov.innerHTML = `<h2 id="naslov">Jela s roštilja<h2/>`;
    (main.innerHTML = jela_rostilj.products.map((x) => {
        let search = cart.find((product) => product.id === x.id) || [];
       return `
        <div class="item">
                <div class="item_slika">
                    <img src="${x.image}" alt="" width="200px" height="200px"> 
                    <img onclick="increment(${x.id})" class="shopping_bag" src="images/ikone/shopping-bag.png" alt="bag_icon" width="50px" height="50px">
                    <div id="${x.id}" class="item_amount" style="${search.item === undefined ? `display:none` : `display:block`}">
                        ${search.item === undefined ? "" : search.item}
                    </div>
                </div>
                <div class="naziv">
                    ${x.name}<br/>
                    Jela s roštilja
                </div>
        </div>`;
    }).join(""));
    
};
drawMain();

let drawCategory = (categorie) => {
    main.innerHTML = "";
    let category = categories.find(x => {
        if(categorie === "jela_rostilj"){
            return x.name === "jela s rostilja";
        }else if(categorie === "riba"){
            return x.name === "riba";
        }else if(categorie === "pizze"){
            return x.name === "pizze";
        }else if(categorie === "prilozi"){
            return x.name === "prilozi";
        }else if(categorie === "salate"){
            return x.name === "salate";
        }else if(categorie === "deserti"){
            return x.name === "deserti";
        }else if(categorie === "bezalkoholna_pica"){
            return x.name === "bezalkoholna_pica";
        }else if(categorie === "alkoholna_pica"){
            return x.name === "alkoholna_pica";
        }else if(categorie === "pivo"){
            return x.name === "piva";
        }else{
            return x.name === "topli napitci";
        }
    });
    var nameCategory = findCategoryName(categorie);
    main.innerHTML = category.products.map((product) => {
        let search = cart.find((x) => product.id === x.id) || [];
        return `
        <div class="item">
                <div class="item_slika">
                    <img src="${product.image}" alt="" width="200px" height="200px">
                    <img onclick="increment(${product.id})" class="shopping_bag" src="images/ikone/shopping-bag.png" alt="bag_icon" width="50px" height="50px"> 
                    <div id="${product.id}" class="item_amount" style="${search.item === undefined ? `display:none` : `display:block`}">
                    ${search.item === undefined ? "" : search.item}
                    </div>
                </div>
                <div class="naziv">
                    ${product.name}<br/>
                    ${nameCategory}
                </div>
        </div>`;
    }).join("");
    let naslov = document.getElementById("naslov");
    naslov.innerHTML = `<h2 id="naslov">${nameCategory}<h2/>`;
}


let increment = (id) => {
    let selectedItem = id;
    let item = cart.find((product) => product.id === selectedItem.id);
    if(item === undefined){
        cart.push({id: selectedItem.id, item: 1});
    }else{
        item.item += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    update(selectedItem.id);
};
let update = (id) => {
    let search = cart.find((product)=>product.id === id);
    document.getElementById(id).innerHTML = search.item;
    document.getElementById(id).style.display = `block`;
    cartAmount();
};
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

let findCategoryName = (categorie) => {
    if(categorie === "jela_rostilj"){
        return "Jela s roštilja";
    }else if(categorie === "riba"){
        return "Riba";
    }else if(categorie === "pizze"){
        return "Pizze";
    }else if(categorie === "prilozi"){
        return "Prilozi";
    }else if(categorie === "salate"){
        return "Salate";
    }else if(categorie === "deserti"){
        return "Deserti";
    }else if(categorie === "bezalkoholna_pica"){
        return "Bezalkoholna pića";
    }else if(categorie === "alkoholna_pica"){
        return "Alkoholna piĆa";
    }else if(categorie === "pivo"){
        return "Piva";
    }else{
        return "Topli napitci";
    }
}