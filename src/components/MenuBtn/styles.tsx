import { CSSProperties } from 'react'

export const MenuBtnCss: CSSProperties = {
  cursor: 'pointer',
  maxWidth: '30px',
  float: 'right',
  paddingRight: '3px'
}

export const ProfileBtnCss: CSSProperties = {
  textAlign: 'right'
}

export const CommonCss: CSSProperties = {
  width: '30px',
  height: '5px',
  backgroundColor: 'rgb(22,46,90)',
  margin: '6px 0 0 0',
  transition: '0.4s',
}

export const MenuBarOneCss: CSSProperties = {
  ...CommonCss,
  transform: 'translate(0, 11px) rotate(-45deg)'
}

export const MenuBarTwoCss: CSSProperties = {
  ...CommonCss,
  opacity: '0'
}

export const MenuBarThreeCss: CSSProperties = {
  ...CommonCss,
  transform: 'translate(0, -11px) rotate(45deg)'
}
