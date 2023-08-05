import './ImagePreview.css'
import { useState } from 'react';
import ImageGalleryModal from './ImageGalleryModal';
import { AspectRatio, Grid } from '@mui/joy';
const ImagePreview = ({ images }) => {
    const [openModal, setOpenModal] = useState(false);
    const items = [];
    images.forEach((element, index) => {
        if (index < 5)
            items.push(
                <Grid xs={3}>
                    <AspectRatio ratio={1} >
                        <img className='previewImg' src={element.src} alt="" onClick={(e) => { setOpenModal(true); }} />
                    </AspectRatio>
                </Grid>
            );
    });
    return (
        <Grid container columns={15} spacing={1}>
            <Grid xs={15}>
                <AspectRatio ratio={1} >
                    <img className='previewImg' src={images[0].src} alt='' />
                </AspectRatio>
            </Grid>
            {items}
            {openModal && <ImageGalleryModal setOpenModal={setOpenModal} images={images} />}
        </Grid>
    )
}

export default ImagePreview;