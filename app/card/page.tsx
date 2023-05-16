import React from "react";
import {CardComponent} from '@/components/Card/card-component'
import s from '../../styles/card-page.module.scss'

export default function Card() {
  return (
    <section className={s.container}>
      <CardComponent/>
    </section>
  )
}