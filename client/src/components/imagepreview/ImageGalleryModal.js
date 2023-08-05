import React from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGalleryModal.css'

function ImageGaleryModal({setOpenModal, images}) {
  const imagesArr = images.reduce((total, currentValue, currentIndex)=>{
    total.push({original: currentValue.src, thumbnail: currentValue.src});
    return total;
  }, []);
  return (
    <div className='modal-wrapper' onClick={(e) => {e.stopPropagation(); setOpenModal(false);}}>
        <div className='gallery-wrapper' onClick={(e)=>e.stopPropagation()}>
            <ImageGallery items={imagesArr} />
        </div>
    </div>
  );
}

export default ImageGaleryModal