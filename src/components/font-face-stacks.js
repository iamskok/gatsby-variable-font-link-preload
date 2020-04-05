import React from 'react'
import { Global, css } from '@emotion/core'
import interVarRomanWoff2 from '../../static/fonts/inter/Inter-VarRoman-subset.woff2'
import interVarItalicWoff2 from '../../static/fonts/inter/Inter-VarItalic-subset.woff2'

const interVariable = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url(${interVarRomanWoff2}) format('woff2');
  }
`

const interVariableItalic = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: 'Italic';
    src: url(${interVarItalicWoff2}) format('woff2');
  }
`

const FontFaceStacks = () => (
  <Global
    styles={css`
      ${interVariable}
      ${interVariableItalic}
    `}
  />
)

export default FontFaceStacks