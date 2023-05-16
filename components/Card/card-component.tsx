"use client"

import React, {useState} from 'react'
import s from '../../styles/card-component.module.scss'
import {Button} from "@/components/Button/button"
import Image, {StaticImageData} from "next/image"
import redHeadphone from '../../assets/red.jpg'
import blueHeadphone from '../../assets/blue.jpg'
import yellowHeadphone from '../../assets/yellow.jpg'
import Link from "next/link"

type dataType = {
  id: number
  img: StaticImageData
  color: string
}
//data for card product
const data: dataType[] = [
  {id: 1, img: redHeadphone, color: '#c10e0e'},
  {id: 2, img: blueHeadphone, color: '#5050c9'},
  {id: 3, img: yellowHeadphone, color: '#cfcf32'},
]

export const CardComponent = () => {
  const [id, setId] = useState<number>(1)
  const currImg = data.filter(item => item.id === id)[0] //get current image depending on the color

  const onClickImg = (id: number) => {
    setId(id)
  }

  return (
    <article className={s.productItem}>
      <figure className={s.img}>
        <Image src={currImg.img} alt={'Headphone img'} width={258} height={258}/>
      </figure>
      <h2 className={s.price}>$ 100</h2>
      <h3 className={s.title}>Zebronics head phone</h3>
      <p className={s.description}>
        A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.
      </p>
      <p className={s.titleColorsBlock}>Choose your colour</p>
      <section>
        <h3 className={s.colorsBlock}>
          {data.map(o =>
            <div
              key={o.id}
              style={{background: `${o.color}`}}
              className={`${s.colorItem} ${id === o.id ? s.active : ''}`}
              onClick={() => onClickImg(o.id)}>
            </div>)
          }
        </h3>
      </section>
      <section>
        <div className={s.buttonBlock}>
          <Button title={'Add to card'} variant={"yellow"}></Button>
          <Button title={'Buy now'} variant={"transparent"}></Button>
        </div>
        <div className={s.link}>
          <Link href={'/'}>Read reviews</Link>
        </div>
      </section>
    </article>
  )
}
