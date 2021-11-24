import React from 'react'
import DinoSvg from './dino.inline.svg'
import styled from '@emotion/styled'
import { ModalContent, ModalTitle } from '../Modal'

const AnimateDino = styled.div`
  #prefix__Layer_17 {
    transform: translate(0px);
    animation: march 45s ease-in-out infinite;
  }
  @keyframes march {
    0% {
      transform: translate(90%);
    }
    50% {
      transform: translate(0%);
    }
    100% {
      transform: translate(-90%);
    }
  }

  #prefix__Layer_12 path {
    transform-origin: 60% 15%;
    transform: scale(100%, 100%);
    animation: blink 10s ease-in-out infinite;
  }
  #prefix__Layer_13 path {
    transform-origin: 60% 15%;
    transform: scale(100%, 100%);
    animation: blink 10s ease-in-out infinite;
  }
  @keyframes blink {
    0% {
      transform: scale(100%, 100%);
    }
    23% {
      transform: scale(100%, 100%);
    }
    25% {
      transform: scale(10%, 100%);
    }
    28% {
      transform: scale(100%, 100%);
    }
    73% {
      transform: scale(100%, 100%);
    }
    75% {
      transform: scale(10%, 100%);
    }
    77% {
      transform: scale(100%, 100%);
    }
    79% {
      transform: scale(10%, 100%);
    }
    82% {
      transform: scale(100%, 100%);
    }
    100% {
      transform: scale(100%, 100%);
    }
  }

  #prefix__Layer_5 path:nth-of-type(1) {
    transform-origin: 120px 74px;
    animation: sway 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(2) {
    transform-origin: 110px 94px;
    animation: sway 2s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(3) {
    transform-origin: 108px 125px;
    animation: sway 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(4) {
    transform-origin: 87px 74px;
    animation: sway 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(5) {
    transform-origin: 87px 74px;
    animation: sway 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(6) {
    transform-origin: 87px 74px;
    animation: sway 4s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(7) {
    transform-origin: 87px 74px;
    animation: sway 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(8) {
    transform-origin: 87px 74px;
    animation: sway 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(9) {
    transform-origin: 87px 74px;
    animation: sway 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(10) {
    transform-origin: 87px 74px;
    animation: sway 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(11) {
    transform-origin: 87px 74px;
    animation: sway 4s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_5 path:nth-of-type(12) {
    transform-origin: 87px 74px;
    animation: sway 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }

  @keyframes sway {
    0% {
      transform: skew(1deg);
    }
    50% {
      transform: skew(-1deg);
    }
    100% {
      transform: skew(1deg);
    }
  }

  #prefix__Layer_7 {
    animation: bush_sway_3 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_8 {
    animation: bush_sway_2 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_6 {
    animation: bush_sway_1 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  #prefix__Layer_9 {
    animation: bush_sway_1 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }
  @keyframes bush_sway_1 {
    0% {
      transform: skew(1deg, 0deg);
    }
    50% {
      transform: skew(-1deg, 0deg);
    }
    100% {
      transform: skew(1deg, 0deg);
    }
  }
  @keyframes bush_sway_2 {
    0% {
      transform: skew(0.5deg, 0deg);
    }
    50% {
      transform: skew(-0.5deg, 0deg);
    }
    100% {
      transform: skew(0.5deg, 0deg);
    }
  }
  @keyframes bush_sway_3 {
    0% {
      transform: skew(0.25deg, 0deg);
    }
    50% {
      transform: skew(-0.25deg, 0deg);
    }
    100% {
      transform: skew(0.25deg, 0deg);
    }
  }
`

export default function CuteDinoModal() {
  return (
    <div>
      <ModalTitle className="rainbow-text">CuteDino.svg</ModalTitle>
      <ModalContent>
        <div>Illustration: Kristin Hoban (2021, Adobe Illustrator)</div>
        <div>Animation: Samantha Branham (2021, CSS)</div>
      </ModalContent>
      <AnimateDino>
        <DinoSvg />
      </AnimateDino>
    </div>
  )
}
