import { CSSProperties } from 'react'

export enum Colors {
    WHITE = '#ffffff',
    GREEN = '#7c7c',
    PINK = 'rgb(244, 162, 50, 0.5)'
}

export const HR: CSSProperties = { width: '90%', marginLeft: '2px' }

export const MAIN: CSSProperties = { 
    marginTop: '-30px',
    paddingLeft: '7px' 
}

export const ASIDE: CSSProperties = {
    // backgroundColor: Colors.PINK,
    paddingLeft: '10px',
    margin: '3px 0 5px 0',
    textAlign: 'right'
}

export const TITLE: CSSProperties = {
    textShadow: '1px 1px silver'
}

export const HEADER: CSSProperties = {
    width: '345px'
}

export const MAP: CSSProperties = {
    position: 'relative',
    top: '-20px'
}

export const BG: CSSProperties = {
    position: 'absolute',
    width: '345px',
    height: '240px'
}

export const SVG: CSSProperties = {
    position: 'absolute',
    top: '12px',
    left: '-100px',
    opacity: '.7'
}