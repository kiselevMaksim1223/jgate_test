import React, {FC} from 'react'
import s from '../../styles/button.module.scss'

type ButtonType = {
  title: string
  variant: 'yellow' | 'transparent'
}

export const Button:FC<ButtonType> = ({title, variant}) => {
  return (
    <button className={`${s.button} ${variant === 'yellow' ? s.buttonYellow : s.buttonTransparent}`}>{title}</button>
  );
};

