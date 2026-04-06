
import Image from 'next/image'
import Detalles from './Detalles'
import SeccionPrecios from './SeccionPrecios'

import imagen from '@/public/image-product-mobile.jpg'

const ProductCard = () => {
    return (
        <div>
            <Image width={350} src={imagen} alt={'imagen del producto'} />
            <Detalles />
            <SeccionPrecios />

        </div>
    )
}

export default ProductCard