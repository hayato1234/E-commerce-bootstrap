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
})


const card_item_deck_container = document.querySelector("#card-deck-container");

let itemList = [];

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
    
    const newItemFooter = document.createElement("div");
    newItemFooter.classList.add("card-footer");
    newItemCard.appendChild(newItemFooter);
    
    const newItemTitle = document.createElement("h5");
    newItemTitle.innerText = itemList[index].title;
    newItemFooter.appendChild(newItemTitle);
    
    const newItemBrand = document.createElement("p");
    newItemBrand.innerText = itemList[index].brand;
    newItemFooter.appendChild(newItemBrand);

    // const newItemLink = document.createElement("a");
    // newItemLink.setAttribute("href","#");
    // newItemLink.classList.add("stretched-link");
    // newItemCard.appendChild(newItemLink); 

    // newItemCard.addEventListener("click",itemClicked)
    
    cardGroup.appendChild(newItemCard);
    // newItemCard.addEventListener("click",itemClicked());
}

function itemClicked(){
    const index = event.currentTarget.getAttribute("data-item-id");
    const urlParas = new URLSearchParams();
    urlParas.append("item-id",index)
    window.location.href = "item-detail.html?"+urlParas.toString();
}
