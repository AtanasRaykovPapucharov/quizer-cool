
import { CSSProperties } from 'react'

export enum Colors {
    Border = '#c0c0c0',
    BtnStart = '#46ac46',
    BtnFinish = '#c06464',
    BtnQuestion = 'rgb(34,145,206)',
    BtnAnswer = 'rgb(31,67,137)',
    Text = 'rgb(73, 104, 142)',
    MainDark = 'rgb(244, 162, 50)',
    MainLight = 'rgba(207, 187, 207, 0.5)'
}

export const BTN_QUESTION: CSSProperties = {
    width: '34px',
    height: '25px',
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: Colors.BtnQuestion,
    color: 'white',
    fontWeight: 'bolder',
}

export const BTN_ANSWER: CSSProperties = {
    width: '42px',
    height: '40px',
    border: '2px solid silver',
    borderRadius: '20px',
    marginBottom: '15px',
    backgroundColor: Colors.BtnAnswer,
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bolder'
}

export const BTN: CSSProperties = {
    width: '90px',
    height: '30px',
    border: `1px solid ${Colors.Border}`,
    borderRadius: '15px',
    color: 'white',
    fontWeight: 'bold'
}

export const BTN_TEXT: CSSProperties = {
    width: '130px',
    height: '56px',
    border: `1px solid ${Colors.Border}`,
    borderRadius: '20px',
    backgroundColor: `${Colors.BtnStart}`,
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold'
}

export const TEXT: CSSProperties = {
    position: 'relative',
    top: '0',
    left: '0',
    borderBottom: `2px solid ${Colors.BtnAnswer}`,
    maxWidth: '900px', 
    padding: '10px',
    backgroundColor: 'white',
    color: `${Colors.Text}`,
    textAlign: 'justify'
}

export const QUIZ: CSSProperties = {
  display: 'block', 
  margin: '0 auto', 
  paddingLeft: '3px',
  width: '100%',
  textAlign: 'center'
}