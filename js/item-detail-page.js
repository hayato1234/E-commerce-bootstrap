import {Item} from "./item.js"

let itemList = [];

const breadc_title = document.querySelector("#breadc-title");
const main_img = document.querySelector("#detail-main-img");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const brand = document.querySelector("#item-detail-brand-text");
const condition = document.querySelector("#item-detail-condition-text");
const model = document.querySelector("#item-detail-model-text");
const year = document.querySelector("#item-detail-year-text");
const comment = document.querySelector("#item-detail-comment-text"); 
const addCartButton = document.querySelector("#item-detail-add-cart"); 
addCartButton.addEventListener("click",addCartClicked);
const addCartBtnTxt = document.querySelector("#item-detail-add-cart-text");


function setItemList(){
    const item1 = new Item("Nikon EOS DSLR","img/camera.jpg",15,"Nikon","Great","N-EOS-442",2006,"the main screen has been replaced with brand new parts.");
    const item2 = new Item("T-fal Electric Kettle","img/elec-kettle.jpg",5,"T-fal","Good","T-K04",2017,"The filter has been replaced with a new one.");
    const item3 = new Item("Portable Air Conditioner","img/port-ac2.jpeg",80,"LG","Great","LG-AC-3800",2019,"The internal fan has been replaced. For a room up to 600 sq. ft.");
    const item4 = new Item("Vacuum Cleaner","img/vac.jpeg",120,"Dyson","Good","D-1050",2021,"The extending cord has been replaced.");
    const item5 = new Item("Tablet - iPad Air","img/ipad-air.jpeg",200,"Apple","Great","A7563",2021,"Minor scratches on the back");
    const item6 = new Item("Ultrasonic Humidifier","img/humidfier.jpeg",25,"Vicks","Great","MDYZ-C",2020,"Comes with the original box.");
    itemList.push(item1,item2,item3,item4,item5,item6);
}
setItemList();

function setUpDetailPage(){
    const qs = new URLSearchParams(window.location.search);
    const itemId = qs.get("item-id");
    const currentItem = itemList[itemId];
    breadc_title.innerHTML = currentItem.title;   
    main_img.setAttribute("src",currentItem.imgPath);
    title.innerHTML = currentItem.title; 
    price.innerHTML = "$ " + currentItem.price;
    brand.innerHTML = `Brand: <strong>${currentItem.brand}</strong>`;
    condition.innerHTML = `Condition: <strong>${currentItem.condition}</strong>`;
    model.innerHTML = `Model: <strong>${currentItem.model}</strong>`;
    year.innerHTML = `Year: <strong>${currentItem.year}</strong>`;
    comment.innerHTML = `Comment: <strong>${currentItem.comment}</strong>`;
}

setUpDetailPage();

function addCartClicked(){
    let cartBtn = this;
    cartBtn.classList.add("clicked");
    addCartBtnTxt.innerHTML = "Added";
}



