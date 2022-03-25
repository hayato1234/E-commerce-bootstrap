import {Item} from "./item.js"

$(function(){
    $("#loginButton").on("click",function(){
        $("#loginModal").modal("show");
    })
    $('#loginPassword').on("change",function(){
        if($('#loginEmail').val() != ''){
            $('#loginBtn').attr('disabled', false);
        } else{
            $('#loginBtn').attr('disabled', true);
        }
    })
    $("#placeOrderBtn").on("click",function(){
        alert("Placed your order!");
        window.location.href = "index.html";
    })
})


const card_item_deck_container = document.querySelector("#card-deck-container");

let itemList = [];

let lang = document.querySelector("html").getAttribute("lang");

function setItemList(){
    if(lang==="en"){
        const item1 = new Item("Nikon EOS DSLR","img/camera.jpg",15,"Nikon","Great","N-EOS-442",2006,"the main screen has been replaced with brand new parts.");
        const item2 = new Item("T-fal Electric Kettle","img/elec-kettle.jpg",5,"T-fal","Good","T-K04",2017,"The filter has been replaced with a new one.");
        const item3 = new Item("Portable Air Conditioner","img/port-ac2.jpeg",80,"LG","Great","LG-AC-3800",2019,"The internal fan has been replaced. For a room up to 600 sq. ft.");
        const item4 = new Item("Vacuum Cleaner","img/vac.jpeg",120,"Dyson","Good","D-1050",2021,"The extending cord has been replaced.");
        const item5 = new Item("Tablet - iPad Air","img/ipad-air.jpeg",200,"Apple","Great","A7563",2021,"Minor scratches on the back");
        const item6 = new Item("Ultrasonic Humidifier","img/humidfier.jpeg",25,"Vicks","Great","MDYZ-C",2020,"Comes with the original box.");
        itemList.push(item1,item2,item3,item4,item5,item6);
    }else if(lang="jp"){
        const item1 = new Item("Nikon EOS DSLR","../img/camera.jpg",15,"ニコン","とても良い","N-EOS-442",2006,"液晶画面は新品のものに交換されています。");
        const item2 = new Item("T-fal 電気ケトル","../img/elec-kettle.jpg",5,"T-fal","良い","T-K04",2017,"フィルターは新品のものに交換されています。");
        const item3 = new Item("ポータブルエアコンディショナー","../img/port-ac2.jpeg",80,"LG","とても良い","LG-AC-3800",2019,"ファンが交換されています。17畳の広さのお部屋まで対応しています。");
        const item4 = new Item("サイクロン式掃除機","../img/vac.jpeg",120,"Dyson","良い","D-1050",2021,"電源コードが交換されています");
        const item5 = new Item("タブレト - iPad Air","../img/ipad-air.jpeg",200,"Apple","とても良い","A7563",2021,"背面に細かな傷があります。");
        const item6 = new Item("超音波式加湿器","../img/humidfier.jpeg",25,"Vicks","とても良い","MDYZ-C",2020,"オリジナルの箱に入っています。");
        itemList.push(item1,item2,item3,item4,item5,item6);
    }
}

setItemList();

//make item card deck
function setUpItemCards(){
    for(let i=0;i<itemList.length;i=i+3){
        //create a deck for every 3 items
        const newCardGroup = document.createElement("div");
        newCardGroup.classList.add("card-deck","mb-4");
        card_item_deck_container.appendChild(newCardGroup);
        for(let j=0+i;j<(i+3);j++){
            if(j<itemList.length){
                createCard(j,newCardGroup);
            }else{
                break;
            }
        }
    }
}

if(card_item_deck_container!=null){
    setUpItemCards();
}


function createCard(index,cardGroup){
    const newItemCard =  document.createElement("div");
    newItemCard.classList.add("card","border-success");
    newItemCard.setAttribute("role","button");
    newItemCard.setAttribute("data-item-id",index);
    newItemCard.addEventListener("click",itemClicked);
    newItemCard.addEventListener("mouseover",cardHover);
    newItemCard.addEventListener("mouseleave",cardHoverOut);
    
    const newItemBody = document.createElement("div");
    newItemBody.classList.add("card-body");
    newItemCard.appendChild(newItemBody);
    
    const newItemImg = document.createElement("img");
    newItemImg.setAttribute("src",itemList[index].imgPath);
    newItemImg.classList.add("d-flex", "img-fluid");
    newItemBody.appendChild(newItemImg);
    
    const newItemImgOverlay = document.createElement("div");
    newItemImgOverlay.classList.add("card-img-overlay");
    newItemBody.appendChild(newItemImgOverlay);
    
    const newItemPrice = document.createElement("h4");
    newItemPrice.innerText= "$"+itemList[index].price;
    newItemPrice.classList.add("item-list-price","mr-1");
    newItemImgOverlay.appendChild(newItemPrice);

    const favHolder = document.createElement("a");
    favHolder.setAttribute("role","button");
    // favHolder.setAttribute("style","display:none");
    favHolder.addEventListener("mouseover",function(){
        newItemCard.removeEventListener("click",itemClicked);
    });
    favHolder.addEventListener("mouseleave",function(){
        newItemCard.addEventListener("click",itemClicked);
    });
    favHolder.addEventListener("click",favToggle);
    const favIcon = document.createElement("i");
    favIcon.classList.add("fa","fa-heart-o");
    favIcon.setAttribute("style","font-size: 2rem; color: pink");
    favHolder.appendChild(favIcon);
    newItemImgOverlay.appendChild(favHolder);
    
    const newItemFooter = document.createElement("div");
    newItemFooter.classList.add("card-footer");
    newItemCard.appendChild(newItemFooter);
    
    const newItemTitle = document.createElement("h5");
    newItemTitle.innerText = itemList[index].title;
    newItemFooter.appendChild(newItemTitle);
    
    const newItemBrand = document.createElement("p");
    newItemBrand.innerText = itemList[index].brand;
    newItemFooter.appendChild(newItemBrand);
    
    cardGroup.appendChild(newItemCard);
}


// Begin: card list functions 
function cardHover(){
    const imgElement = this.firstElementChild.firstElementChild;
    imgElement.classList.add("hovering");
    // console.log(imgElement);
}

function cardHoverOut(){
    const imgElement = this.firstElementChild.firstElementChild;
    imgElement.classList.remove("hovering");
}

function itemClicked(){
    const index = event.currentTarget.getAttribute("data-item-id");
    const urlParas = new URLSearchParams();
    urlParas.append("item-id",index);
    window.location.href = "item-detail.html?"+urlParas.toString();
}

function favToggle(){
    if(this.firstElementChild.classList.contains("fa-heart-o")){
        this.firstElementChild.classList.remove("fa-heart-o");
        this.firstElementChild.classList.add("fa-heart");
    }else{
        this.firstElementChild.classList.remove("fa-heart");
        this.firstElementChild.classList.add("fa-heart-o");
    }
}
// End: card list functions 


function placeOrder(){
    alert("Order placed!");
}
