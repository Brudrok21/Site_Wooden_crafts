'use strict';




let goods = [
        {
        "title": "Watch TVV 3220 Wooden with a black tint on the dial",
		"price": 100,
		"sale": false,
		"img": "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-3-pro/img/one/huawei-watch-3-pro-kv.png",
        "category": "Watch",
        "All": "All"
        },{
        "title": "Watch TEE 1050 Leather with a black tint on the dial and with a wooden case",
        "price": 100,
        "sale": false,
        "img": "https://mobile-review.com/all/wp-content/uploads/2021/07/huawei-watch3.png",
        "category": "Watch",
        "All": "All"
        },{
        "title": "Wooden stand for full-size and over-ear headphones.",
        "price": 50,
        "sale": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big/167255267.jpg",
        "category": "Headphone stand",
        "All": "All"
        },{
        "title": "Headphones Sven SEB 12 WD Wood",
        "price": 8,
        "sale": false,
        "img": "https://i2.rozetka.ua/goods/10322719/sven_seb_12_wd_images_10322719377.jpg",
        "category": "Headphones",
        "All": "All"
        },{
        "title": "Headphones TTTL320",
        "price": 12,
        "sale": false,
        "img": "https://24gadget.ru/uploads/posts/2014-04/1398239764_lkpr-headphones.jpg ",
        "category": "Headphones",
        "All": "All"
        },{
        "title": "Wooden electric guitar, hand made",
        "price": 250,
        "sale": false,
        "img": "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg",
        "category": "Guitar",
        "All": "All"
        },{
        "title": "Blue wooden guitar",
        "price": 180,
        "sale": false,
        "img": "https://go3.imgsmail.ru/imgpreview?key=32c702a7f13b140d&mb=storage&w=540",
        "category": "Guitar",
        "All": "All"
        },{
        "title": "Mini wooden guitar, varnished",
        "price": 150,
        "sale": false,
        "img": "https://i.pinimg.com/originals/ab/45/58/ab45581eeeafb65c23da584d30bf8b61.jpg",
        "category": "Guitar",
        "All": "All"
        },{
        "title": "Wooden lacquered cabinets, tables",
        "price": 1200,
        "sale": false,
        "img": "https://leondesign.com.ua/uploads/2012/12/28/18/6060532e0486039372d6945b116ae5f127a7d28c.jpg",
        "category": "Furniture kitchen",
        "All": "All"
        },{
        "title": "Wooden lacquered cabinets, tables, with stone arch for hoods",
        "price": 2300,
        "sale": false,
        "img": "https://i.pinimg.com/originals/f9/1d/ea/f91dea6ab39cbff98948e525f3a36356.jpg",
        "category": "Furniture kitchen",
        "All": "All"
        },{
        "title": "Wooden varnished, cabinets, tables, range hood, red-brown color",
        "price": 700,
        "sale": false,
        "img": "https://i.pinimg.com/736x/8f/21/6b/8f216ba56a75d8bcc81889b7c62a15d9.jpg",
        "category": "Furniture kitchen",
        "All": "All"
        }
    ]



//Modal window menu

function ModalMenu(){
    const openMenu = document.querySelector('.openMenu'),
    closeMenu = document.querySelector('.close-menu'),
    blur = document.querySelectorAll('.container-fluid'),
    ModalWindowMenu = document.querySelector('.Modal-window-menu');

    openMenu.addEventListener('click' , function(){
        ModalWindowMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        blur.forEach(function (blurAll){
            blurAll.style.filter = 'blur(3px)';
        });

    });
    closeMenu.addEventListener('click' , function(){
        ModalWindowMenu.style.display = '';
        document.body.style.overflow = '';
        blur.forEach(function (blurAll){
            blurAll.style.filter = '';
        });
    });


    //Shop menu masket
    const openBasket = document.querySelector('.icon_basket'),
    closeBasket = document.querySelector('.close-basket'),
    ModalWindowBasket = document.querySelector('.Modal-window-basket');

    openBasket.addEventListener('click' , ()=>{
        ModalWindowBasket.style.display = 'inline-block';
        document.body.style.overflow = 'hidden';
        blur.forEach(function (blurAll){
            blurAll.style.filter = 'blur(3px)';
        });
    });

    closeBasket.addEventListener('click' , ()=>{
        ModalWindowBasket.style.display = '';
        document.body.style.overflow = '';
        blur.forEach(function (blurAll){
            blurAll.style.filter = '';
        });
    });


}




// работа с товаром и корзиной
function addCart(){
    const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');


    cards.forEach(function( card ){
        
        const btn = card.querySelector('.cart');
        btn.addEventListener('click' , function(){
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();
            
            const removeBtn = cardClone.querySelector('.cart-btn');
            removeBtn.name = 'close';
            removeBtn.addEventListener('click' , function(){
                
                cardClone.remove();
                showData();
            });
        });
    });

    function showData(){
        const cardsCart = cartWrapper.querySelectorAll('.card'),
        cardsPrice = cartWrapper.querySelectorAll('.card-price'),
        cardTotal = document.querySelector('.cart-total span');
        let sum = 0;

        countGoods.textContent = cardsCart.length;

        cardsPrice.forEach(function(cardPrice){
            
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if(cardsCart.length !== 0 ){
            cartEmpty.remove();
        }else {
            cartWrapper.appendChild(cartEmpty);
        }

    }
}

//search

function actionPage(){
    
    const searchBtn = document.querySelector('.searchBtn'),
    cards = document.querySelectorAll('.goods .card'),
    min = document.getElementById('min'),
    max= document.getElementById('max'),
    search = document.querySelector('.search-wrapper_input');


    //search
    searchBtn.addEventListener('click' , () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)){
                card.parentNode.style.display ='none';
            }else{
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}

function filtert() {
    const cards = document.querySelectorAll(".goods .card"),
      min = document.getElementById("min"),
      max = document.getElementById("max"),
      activeLi = document.querySelector('.catalog-list li.active');
      
    cards.forEach(card => {
      const cardPrice = card.querySelector(".card-price");
      const price = parseFloat(cardPrice.textContent);
  
      card.parentNode.style.display = "";
      if ((min.value && price < min.value ) || (max.value && price  >  max.value )) {
        card.parentNode.style.display = "none";
      } else if (activeLi){
        if(card.dataset.category !== activeLi.textContent){
          card.parentNode.style.display = "none";
          if (activeLi.textContent === "All"){
            card.parentNode.style.display = "";
            }
        }else {
          card.parentNode.style.display = "";
        }
      }
    });
}






 


//выводим карточки товара
function renderCards(){
    const goodsWrapper = document.querySelector('.goods');
    goods.forEach((good) =>{
        const card = document.createElement('div');
        card.className = 'div-product'
        card.innerHTML = `

        <div class="product card" data-All="${good.All}" data-category="${good.category}">
            <div class="p-img">
                <img src="${good.img}" alt="">
            </div>
            <div class="p-name">
                <h2 class="text-center category" >${good.category}</h2>
                <p class="title card-title ">${good.title}</p>
            </div>
            <div class="price">
                <strong class="s-price card-price">${good.price} $</strong>
                <ion-icon class="cart cart-btn icon-animation" name="cart"></ion-icon>
            </div>
        </div>

        `;
        goodsWrapper.appendChild(card);
    });
}

//Каталог
function renderCatalog(){
    const cards = document.querySelectorAll('.goods .card'),
    catalogList = document.querySelector('.catalog-list'),
    catalogDiv = document.querySelector('.catalog-div'),
    catalogBtn = document.querySelector('.catalog-btn'),
    categories = new Set()
    cards.forEach((card) =>{
        categories.add(card.dataset.category);

    });
    categories.forEach((item) =>{
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogDiv.addEventListener('click' , (event) =>{
        if (event.target.tagName === 'LI'){
            allLi.forEach((elem)  =>{
              if(elem === event.target){
                elem.classList.add('active');
              } else{
                elem.classList.remove('active');
              }
            });
            filtert();
        }
    });

    catalogBtn.addEventListener('click' , ()=>{
        if(catalogDiv.style.display){
            catalogDiv.style.display = "";
        }else{
            catalogDiv.style.display = "none";
        }
    });
}



 
    renderCards();

    addCart();

    actionPage();
    ModalMenu();
    renderCatalog();
 