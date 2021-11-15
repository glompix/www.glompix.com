import * as React from 'react'
import FaceSheet from '../components/FaceSheet'
// import LinkCard from '../components/LinkCard'
import '../css/main.css'

const centered = {
  textAlign: 'center',
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <FaceSheet />
      <p className="rainbow-text" style={centered}>
        Hello welcome to my web sight. Please leave a message in the guestbook and join my webring!!
      </p>
      {/* <LinkCard description="Send me Ethereum, as a treat." title="glomp.eth" />
      <LinkCard description="Send me Ethereum, as a treat." title="glomp.eth" />
      <LinkCard description="Send me Ethereum, as a treat." title="glomp.eth" /> */}
    </main>
  )
}

export default IndexPage
