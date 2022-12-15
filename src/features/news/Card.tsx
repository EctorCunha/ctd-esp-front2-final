import React from 'react'
import { ButtonCardNews, CardNewsContainer, DateCardNews, DescriptionCardNews, ImageCardNews, TitleCardNews } from './styled'
import { INewsProps } from './types'


export function Card({ image, title, date, descriptionCurto, handleBtn }: INewsProps) {
  return (
    <CardNewsContainer>
      <ImageCardNews src={image} />
      <TitleCardNews>{title}</TitleCardNews>
      <DateCardNews>{date}</DateCardNews>
      <DescriptionCardNews>{descriptionCurto}</DescriptionCardNews>
      <ButtonCardNews onClick={handleBtn}>Veja mais</ButtonCardNews>
    </CardNewsContainer>
  )
}