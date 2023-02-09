// for pop up
const close = document.querySelector('#close');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const lightBoxProductImages = document.querySelector('.lightbox-product-images');
const lightBoxLargeImageGallery = document.querySelector('.lightbox-large-image-gallery');
const lightBoxImages = document.querySelectorAll('.lightbox-images')
const lightBoxThumbnail = document.querySelectorAll('.lightbox-thumbnail');
const largeImageGallery = document.querySelector('.large-image-gallery');
const thumbnails = document.querySelectorAll('.thumbnail');



// cart items
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const totalItems = document.querySelector('.total-items');
const addbtn = document.querySelector('.add-items');
const showItemCount = document.querySelector('.show-item-count');
const cart = document.querySelector('.cart');
const cartBox = document.querySelector('.cart-box');
const totalAddItem = document.querySelector('.total-add-item');
const total = document.querySelector('.total');
const itemDetails = document.querySelector('.item-details');
const deleteItem = document.querySelector('#delete')
let itemQuantity =  +totalItems.innerText;


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
       if(thumbnail.id === 'img1'){
            largeImageGallery.style.transform = `translate(0rem)`;
       }

       else if(thumbnail.id === 'img2'){
        largeImageGallery.style.transform = `translate(-30rem)`;
       }

       else if(thumbnail.id === 'img3'){
        largeImageGallery.style.transform = `translate(-60rem)`;
       }

       else{
        largeImageGallery.style.transform = `translate(-90rem)`;
       }
    })
})


// cart items 

plus.addEventListener('click', () => {
    itemQuantity++;
    totalItems.innerText = `${itemQuantity}`;  
})



minus.addEventListener('click', () => {
    itemQuantity = itemQuantity < 1 ? 1 : itemQuantity;
    if(itemQuantity === 1){
        return null;
    }
    itemQuantity--;
    totalItems.innerText = `${itemQuantity}`;
})

let cartArray = [];
console.log(cartArray.length)

function Item(name,quantity) {
    this.name = name,
    this.quantity = quantity
  }

  const emptyMessage = document.createElement('p');
    cartBox.appendChild(emptyMessage);


addbtn.addEventListener('click', () => {


    let item = new Item('Fall Limited Edition Sneakers',itemQuantity)
    cartArray.push(item); 
    const itemDetails = document.createElement('div');
    console.log(cartArray)
    cartBox.appendChild(itemDetails);
    itemDetails.classList.add('item-details');


    const itemPic = document.createElement('img');
    itemDetails.appendChild(itemPic)
    itemPic.setAttribute('src', '/images/image-product-1-thumbnail.jpg');
    itemPic.classList.add('cart-img');

    const itemName = document.createElement('p');
    itemDetails.appendChild(itemName);
    itemName.classList.add('item-name');
    itemName.innerText += `all Limited Edition Sneakers $125.00 x `;

    const totalAddItem = document.createElement('span');
    itemName.appendChild(totalAddItem);
    totalAddItem.classList.add('total-add-item');
    totalAddItem.innerText = `${itemQuantity}`;

    const total = document.createElement('span');
    itemName.appendChild(total);
    total.classList.add('total');

    const deleteItem = document.createElement('img');
    itemDetails.appendChild(deleteItem);
    deleteItem.setAttribute('src', './images/icon-delete.svg');
    deleteItem.classList.add('delete');


    // delete item from cartArray and show empty message if cartArray is empty.

    deleteItem.addEventListener('click', () => {
    itemDetails.remove();
    cartArray.pop(this.item); 
    console.log(cartArray);
    console.log(cartArray.length)
    showItemCount.innerText = `${cartArray.length}`;
    if(cartArray.length === 0){
        emptyMessage.innerText = `Your cart is empty.`;
        cart.addEventListener('click' , () => {
            emptyMessage.innerText = `Your cart is empty.`;
        })
    }
    })


    showItemCount.innerText = `${cartArray.length}`;
    totalAddItem.innerText = `${itemQuantity}`;

    let totalPrice = 125.00 * itemQuantity;

    total.innerText = '$' + totalPrice + '.00';

    console.log(cartArray.length)

    if(cartArray.length > 0){
        cart.addEventListener('click' , () => {
        emptyMessage.innerText = ``;
    })
    }
})

// addbtn eventlistner ends here!



cart.addEventListener('click' , () => {
    cartBox.classList.toggle('show-cart-box');

    // show empty card when user first click on cart icon.
        emptyMessage.innerText = `Your cart is empty.`;
        emptyMessage.classList.add('empty-message');
})




// sliding images

largeImageGallery.addEventListener('click' , () => {

lightBoxProductImages.classList.add('visible-lightbox-product-images');
})

close.addEventListener('click' , () => {
    lightBoxProductImages.classList.remove('visible-lightbox-product-images');  
    })

    let index = 0;


function changeImage(){

    if(index > lightBoxImages.length - 1)
    {
        index = 0;
    }

    else if (index < 0)
    {
        index = lightBoxImages.length - 1 
    }

    lightBoxLargeImageGallery.style.transform = `translate(${-index * 35}rem)`;


}

next.addEventListener('click', () => {
    index++
    changeImage()
})    

previous.addEventListener('click', () => {
    index--
    changeImage()
}) 


lightBoxThumbnail.forEach(lightboxthumbnail => {
    lightboxthumbnail.addEventListener('click', () => {
       if(lightboxthumbnail.id === 'img1'){
            lightBoxLargeImageGallery.style.transform = `translate(0rem)`;
       }

       else if(lightboxthumbnail.id === 'img2'){
        lightBoxLargeImageGallery.style.transform = `translate(-35rem)`;
       }

       else if(lightboxthumbnail.id === 'img3'){
        lightBoxLargeImageGallery.style.transform = `translate(-70rem)`;
       }

       else{
        lightBoxLargeImageGallery.style.transform = `translate(-105rem)`;
       }
    })
})