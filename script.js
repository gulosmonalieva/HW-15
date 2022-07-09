async function getData() {
  let response = await fetch("data.json");
  let products = await response.json();

  products.forEach((product) => {
    let cardsWrapper = document.querySelector(".cards-wrapper");

    let card = document.createElement("div");
    card.className = "product-card";
    cardsWrapper.appendChild(card);

    let cardInner = document.createElement("div");
    cardInner.className = "product-card-inner";
    card.appendChild(cardInner);

    let img = document.createElement("img");
    img.className = "product-img";
    img.src = product.img;
    cardInner.append(img);

    let prodName = document.createElement("div");
    let title = document.createElement("h3");
    let price = document.createElement("span");
    prodName.className = "title-price-block";
    title.className = "product-name";
    price.className = "product-price";
    prodName.appendChild(title);
    prodName.appendChild(price);
    cardInner.append(prodName);
    title.innerText = product.title;
    price.innerText = product.price;

    let line = document.createElement("hr");
    let descr = document.createElement("p");
    descr.className = "product-descr";
    cardInner.append(line);
    cardInner.append(descr);
    descr.innerText = product.desc;

    const btnAll = document.querySelector(".btn-all");
    const btnLaptop = document.querySelector(".btn-laptop");
    const btnPhone = document.querySelector(".btn-smartph");
    const btnTV = document.querySelector(".btn-tv");

    btnLaptop.addEventListener("click", () => {
      if (product.category === "ноутбуки") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    btnPhone.addEventListener("click", () => {
      if (product.category === "смартфоны") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    btnTV.addEventListener("click", () => {
      if (product.category === "телевизоры") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    btnAll.addEventListener("click", () => {
      if (product.category === "") {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  });
}
getData();
