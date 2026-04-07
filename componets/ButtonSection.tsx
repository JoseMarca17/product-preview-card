import React from 'react'
import Image from 'next/image'
import iconCart from  '@/public/icon-cart.svg'
import '@/componets/ButtonSection.css'

const ButtonSection = () => {
  return (
    <div className="button-cart">
      <Image width={17} src={iconCart} alt={'Icono del carrito'} />
      <span className="letras-cart">Add to Cart</span>
    </div>
  )
}

export default ButtonSection