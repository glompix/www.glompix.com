import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

interface ModalContainerProps {
  visible: boolean
}
interface ModalProviderProps {
  children?: React.ReactNode
}
interface ModalContextValue {
  content: React.ReactNode
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  showContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
  visible: boolean
}

const ModalChrome = styled.div`
  margin: 0 auto;
  min-width: 600px;
  max-width: 900px;
  opacity: 1;
  border-radius: 10%
  background: #f00;

  & img,video {
    max-width: 100%;
  }
`

export const ModalTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`
export const ModalContent = styled.div`
  margin: 1em 0;
`
export const ModalImage = styled.img`
  display: block;
  margin: 0 auto;
`
export const ModalIframe = styled.iframe`
  display: block;
  margin: 0 auto;
  border: none;
  width: 100%;
  min-height: 600px;
  height: 700px;
  bottom: 30px;
`

const ModalContainer = styled.div(
  ({ visible }: ModalContainerProps) => `
  position: fixed;
  z-index: 100000000001;
  background-color: #333;
  min-width: 600px;
  min-height: 600px;
  width: 50%;
  left: 50%;
  margin-left: -25%;
  top: 50%;
  margin-top: -550px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 0 42px 8px #ffffff99;
  opacity: ${visible ? 1 : 0};
  ${visible || 'pointer-events: none;'}
  transform: scale(${visible ? 1.0 : 0.0});
  transition: opacity 0.3s cubic-bezier(0.32, 0.01, 0.29, 0.98);
  transition: transform 0.3s cubic-bezier(0.32, 0.01, 0.29, 0.98);
`
)

const ModalOverlay = styled.div(
  ({ visible }: ModalContainerProps) => `
  position: fixed;
  z-index: 100000000000;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
  margin: 0;
  padding: 0;
  opacity: ${visible ? 0.8 : 0.0};
  ${visible || 'pointer-events: none;'}
  transition: opacity 0.3s cubic-bezier(0.32, 0.01, 0.29, 0.98);
`
)

export const ModalContext = React.createContext<ModalContextValue>({
  content: null,
  setContent: () => {},
  setVisible: () => {},
  showContent: () => {},
  visible: false,
})

export default function ModalProvider({ children }: ModalProviderProps) {
  const [content, setContent] = useState<React.ReactNode>()
  const [visible, setVisible] = useState<boolean>(false)
  const showContent = useCallback((content) => {
    setContent(content)
    setTimeout(() => setVisible(true), 10)
  }, [])
  const value = { content, setContent, setVisible, showContent, visible }
  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalOverlay visible={visible} onClick={() => setVisible(false)} />
      <ModalContainer visible={visible}>
        <ModalChrome>{content}</ModalChrome>
      </ModalContainer>
    </ModalContext.Provider>
  )
}
