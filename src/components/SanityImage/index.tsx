import Image from 'next/image'
import { useNextSanityImage } from "next-sanity-image"
import client from "../../utils/sanity-client"
import { CSSProperties } from 'react'

type SanityImageType = {
  image: any,
  alt: string,
  width: number,
  height: number | undefined,
  style?: CSSProperties
}

const SanityImage = ( { image, alt, width, height, style }: SanityImageType) => {
  const imageProps: any = useNextSanityImage(client, image) 

  return (
    <Image 
      {...imageProps}
      alt={alt}
      width={width}
      height={height ? height : 70} 
      style={style}
      priority
    />
  )
}

export default SanityImage


