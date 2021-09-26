import 'react-responsive-carousel/lib/styles/carousel.min.css'

import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ProjectComponent = ({ size, folderName, imageName }) => (
  <Carousel showIndicators={false}>
    {imagesArray(size, folderName, imageName).map((item) => (
      <div key={item.id}>
        <img src={item.src} alt={item.id} />
      </div>
    ))}
  </Carousel>
)

const imagesArray = (size, folderName, imageName) => {
  const array = []
  for (let count = 1; count < size + 1; count++) {
    const id = padToN(size.toString().length, count)
    array.push({ src: require(`./../../assets/${folderName}/${imageName}${id}.png`), id })
  }
  return array
}

const padToN = (n, number) => (number <= 999 ? `${'0'.repeat(n - 1)}${number}`.slice(-n) : number)

export default ProjectComponent
