//https://kea-alt-del.dk/t7/api/products

console.log("hej");

//1 grab data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products");
  const data = await response.json();
  //console.log(data);

  //2 loop //3 for hver
  data.forEach(visProdukt);
}

getData();

function visProdukt(produkt) {
  console.log(produkt);

  //4 fange template
  const template = document.querySelector("#smallProductTemplate").content;

  //5 clone
  const clone = template.cloneNode(true);

  //6 skifte data
  clone.querySelector("h3").textContent = produkt.productdisplayname;
  clone.querySelector(".subtle").textContent = produkt.articletype;
  clone.querySelector(".price").textContent = produkt.price;
  clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  clone.querySelector("a").href = "produkt.html?id=" + produkt.id;

  if (produkt.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    clone.querySelector("article").classList.add("onSale");
  }

  //7 append
  document.querySelector("main").appendChild(clone);
}
