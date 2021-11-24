import * as React from 'react'
import Card, { CardImagePadded } from '../components/cards/Card'
import FaceSheet from '../components/FaceSheet'
import FloralShoppeCard from '../components/cards/FloralShoppe/index'
import CuteDinoCard from '../components/cards/CuteDino/index'
import QuasarCard from '../components/cards/EinsteinsCross/index'
import Section from '../components/cards/Section'
import '../css/main.css'
import EnsPng from '../images/ens.png'
import styled from '@emotion/styled'
import ModalProvider from '../components/cards/Modal'

const centered = {
  textAlign: 'center' as const,
}

const AppMain = styled.main`
  margin: 0 auto;
  min-width: 600px;
  max-width: 900px;
`

// markup
function IndexPage() {
  return (
    <AppMain>
      <ModalProvider>
        <title>Home Page</title>
        <FaceSheet />
        <p className="rainbow-text" style={centered}>
          Hello welcome to my web sight. Please leave a message in the guestbook and join my webring!!
        </p>
        <Section title="Sketches">
          <QuasarCard />
          <FloralShoppeCard />
          <CuteDinoCard />
        </Section>
        <Section title="Other">
          <Card href="https://app.ens.domains/name/glomp.eth/details" title="glomp.eth">
            <CardImagePadded src={EnsPng} alt="ENS Logo" />
          </Card>
          <Card href="https://app.ens.domains/name/branham.eth/details" title="branham.eth">
            <CardImagePadded src={EnsPng} alt="ENS Logo" />
          </Card>
        </Section>
      </ModalProvider>
    </AppMain>
  )
}

export default IndexPage
