import Image from 'next/image'
import {getImageProps} from 'next/image'
import Detalles from './Detalles'
import SeccionPrecios from './SeccionPrecios'
import '@/componets/ProductCard.css'
import ButtonSection from './ButtonSection'

import imagen from '@/public/image-product-mobile.jpg'
import imagenDesktop from '@/public/image-product-desktop.jpg'


const ProductCard = () => {
    const common = {alt: 'Imagen del producto', fill: true}
    const {props: {srcSet: desktop}} = getImageProps({...common, src: imagenDesktop});
    const {props: {srcSet: mobile, ...rest}} = getImageProps({...common, src: imagen});
    return (
        <div className="product-card">
            <picture className='image-desktop'>
                <source media="(max-width: 1023px)" srcSet={mobile} />
                <source media="(min-width: 1024px)" srcSet={desktop} />
                <img {...rest} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </picture>
            <div className="content-container">
                <Detalles />
                <SeccionPrecios />
                <ButtonSection />
            </div>
        </div>
    )
}

export default ProductCard