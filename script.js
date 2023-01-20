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
let totalItemCount = 0;
const addbtn = document.querySelector('.add-items');
const showItemCount = document.querySelector('.show-item-count');
const cart = document.querySelector('.cart');
const cartBox = document.querySelector('.cart-box');
const totalAddItem = document.querySelector('.total-add-item');
const total = document.querySelector('.total');
const itemDetails = document.querySelector('.item-details');
const emptyMessage = document.querySelector('.empty-message');
const deleteItem = document.querySelector('#delete')

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

if(totalItemCount === 0){
    minus.disabled = true;
}

plus.addEventListener('click', () => {
    totalItemCount++;
    totalItems.innerText = `${totalItemCount}`
})

minus.addEventListener('click', () => {
    totalItemCount--;
    totalItems.innerText = `${totalItemCount}`
})



addbtn.addEventListener('click', () => {


    const itemDetails = document.createElement('div');
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
    totalAddItem.innerText = `${totalItemCount}`;

    const total = document.createElement('span');
    itemName.appendChild(total);
    total.classList.add('total');

    const deleteItem = document.createElement('img');
    itemDetails.appendChild(deleteItem);
    deleteItem.setAttribute('src', './images/icon-delete.svg');

    deleteItem.addEventListener('click', () => {
        itemDetails.remove()
    })


    showItemCount.innerText = `${totalItemCount}`;
    totalAddItem.innerText = `${totalItemCount}`;

    let totalPrice = 125.00 * totalItemCount;

    total.innerText = '$' + totalPrice + '.00';

})



cart.addEventListener('click' , () => {
    cartBox.classList.toggle('show-cart-box');

    if(totalItemCount == 0){
        itemDetails.classList.add('hide-item-details');
        emptyMessage.classList.remove('hide-empty-message'); 
    }

    else if (totalItemCount !== 0){
        emptyMessage.classList.add('hide-empty-message'); 
        itemDetails.classList.remove('hide-item-details');
    }
})




// sliding images

largeImageGallery.addEventListener('click' , () => {

lightBoxProductImages.classList.add('visible-lightbox-product-images');
})

close.addEventListener('click' , () => {
    lightBoxProductImages.classList.remove('visible-lightbox-product-images');  
    })

    console.log(lightBoxImages)

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