import React from 'react'
import ThumbPng from './thumb.png'
import Card, { CardImage } from '../Card'
import CuteDinoModal from './modal'

interface CuteDinoCardProps {}

export default function CuteDinoCard({}: CuteDinoCardProps) {
  return (
    <Card title="Cute Dino" ModalContent={CuteDinoModal}>
      <CardImage src={ThumbPng} />
    </Card>
  )
}
