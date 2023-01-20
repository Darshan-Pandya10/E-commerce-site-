const largeImageGallery = document.querySelector('.large-image-gallery');
const thumbnails = document.querySelectorAll('.thumbnail');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const totalItems = document.querySelector('.total-items');

// for pop up
const close = document.querySelector('#close');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const lightBoxProductImages = document.querySelector('.lightbox-product-images');
const lightBoxLargeImageGallery = document.querySelector('.lightbox-large-image-gallery');
const lightBoxImages = document.querySelectorAll('.lightbox-images')
const lightBoxThumbnail = document.querySelectorAll('.lightbox-thumbnail')

let totalItemCount = 0;



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


plus.addEventListener('click', () => {
    totalItemCount++;
    totalItems.innerText = `${totalItemCount}`
})

minus.addEventListener('click', () => {
    totalItemCount--;
    totalItems.innerText = `${totalItemCount}`
})

if(totalItemCount === 0){
    minus.disabled = true;
}

console.log(largeImageGallery)

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