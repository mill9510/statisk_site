//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
//find id

const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

//const productid = 123456;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#imgProduct").src = imagePath;
  document.querySelector("#color").textContent = produkt.basecolour;
  document.querySelector("#number").textContent = produkt.id;
}

hentData();
