import React, { useContext } from 'react'
import ThumbPng from './thumb.png'
import Card, { CardImagePadded } from '../Card'
import { ModalContent, ModalImage, ModalTitle } from '../Modal'

interface EinsteinsCrossProps {}

function EinsteinsCrossModal() {
  return (
    <div>
      <ModalTitle className="rainbow-text">Einstein's Cross.svg</ModalTitle>
      <ModalContent>
        <p>My favorite Quasar in the universe.</p>
        <div>Samantha Branham (2021)</div>
      </ModalContent>
      <ModalImage src={ThumbPng} />
    </div>
  )
}

export default function EinsteinsCrossSection({}: EinsteinsCrossProps) {
  return (
    <Card title="Einstein's Cross" ModalContent={EinsteinsCrossModal}>
      <CardImagePadded src={ThumbPng} />
    </Card>
  )
}
