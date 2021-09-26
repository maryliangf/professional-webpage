import 'react-responsive-carousel/lib/styles/carousel.min.css'

import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ProjectComponent = ({ size, folderName, imageName }) => (
  <Carousel showIndicators={false}>
    {imagesArray(size, folderName, imageName).map((item) => {
      return (
        <div key={item.id}>
          <img src={process.env.PUBLIC_URL + item.src} alt={item.id} />
        </div>
      )
    })}
  </Carousel>
)

type ImageType = {
  src: string
  id: string
}

const imagesArray = (size, folderName, imageName) => {
  const array: ImageType[] = []
  for (let count = 1; count < size + 1; count++) {
    const id = padToN(size.toString().length, count)
    const name = `${imageName}${id}.png`
    array.push({ src: `/${folderName}/${name}`, id })
  }
  return array
}

const padToN = (n: number, number: number) =>
  number <= 999 ? `${'0'.repeat(n - 1)}${number}`.slice(-n) : number.toString()

export default ProjectComponent
