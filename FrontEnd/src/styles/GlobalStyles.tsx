import React from 'react'
import { Global } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = {
  html: tw`w-full h-full`,
  body: {
    ...tw`antialiased w-full h-full`,
  },
  root: tw`w-full h-full`,
}

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
