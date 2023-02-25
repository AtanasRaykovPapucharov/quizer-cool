import type { NextComponentType } from 'next'
import { useState } from 'react'
import { GrammarType, GrammarTypes } from '../../types/GrammarType'
import ArrowRight from '../../assets/right-arrow.png'
import ArrowLeft from '../../assets/left-arrow.png'

const GrammarEdit: React.FC<GrammarType[]> = (grammar: GrammarType[]) => {
  const [grammarNumber, setGrammarNumber] = useState<number>(0)
  const [wrongList, setWrongList] = useState<string[][] | null>(null)
  const [correctList, setCorrectList] = useState<string[][] | null>(null)
  
  return (
    <div className='container-flex-row'>
        {grammar.map(() => {
          return <p></p>
        })}
    </div>
  )
}

export default GrammarEdit


