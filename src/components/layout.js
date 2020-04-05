import React from 'react'
import FontFaceStacks from './font-face-stacks'

const Layout = ({ children }) => (
  <>
    <FontFaceStacks />
    <main>
      {children}
    </main>
  </>
)

export default Layout