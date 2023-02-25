import { GrammarType } from '../../types/GrammarType'
import { useState } from 'react'
import ArrowRight from '../../assets/right-arrow.png'
import ArrowLeft from '../../assets/left-arrow.png'

const GrammarDragAndDrop: React.FC<GrammarType[]> = (grammar: GrammarType[]) => {
  const [grammarNumber, setGrammarNumber] = useState<number>(0)
  const [wrongList, setWrongList] = useState<string[][] | null>(null)
  const [correctList, setCorrectList] = useState<string[][] | null>(null)
  
  return (
    <div className='container-flex-row'>
        {
            grammar.map(() => {
                return <p></p>
            })
        }
    </div>
  )
}

export default GrammarDragAndDrop


