import Image from 'next/image'
import { useState, useRef, CSSProperties, useEffect } from 'react'
import axios from 'axios'
import { sortByDate } from '../../helper/sort'
import ArrowRight from '../../assets/right-arrow.png'
import ArrowLeft from '../../assets/left-arrow.png'

const grammarStyles: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '96%',
  textAlign: 'justify'
}

const inputStyles: CSSProperties = {
  border: '2px solid rgb(73, 104, 142)',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px'
}

const correctBtnStyles: CSSProperties = {
  border: '2px solid rgb(73, 104, 142)',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
  backgroundColor: 'rgb(223, 223, 223)',
  color: 'rgb(73, 104, 142)',
  fontWeight: 'bold'
}

const checkBtnStyles: CSSProperties = {
  width: '80px',
  height: '40px',
  border: '2px solid rgb(73, 104, 142)',
  borderRadius: '10px',
  backgroundColor: 'rgb(223, 223, 223)',
  color: 'rgb(73, 104, 142)',
  fontWeight: 'bold'
}

export default function Grammar() {
  const [grammar, setGrammar] = useState<any>([])
  const [grammarNumber, setGrammarNumber] = useState<number>(0)
  const [wrongList, setWrongList] = useState<string[][] | null>(null)
  const [correctList, setCorrectList] = useState<string[][] | null>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')
  const [paragraphIndex, setParagraphIndex] = useState<number>(-1)
  const [wordIndex, setWordIndex] = useState<number>(-1)
  const [target, setTarget] = useState<{ innerText: string, style: { color: string } } | null>(null)

  useEffect(() => {
    axios
      .get(`/api/grammar`)
      .then((resp) => {
        const wrList: string[][] = []
        const coList: string[][] = []
        
        resp.data = sortByDate(resp.data)

        resp.data[grammarNumber].wrongParagraphs.forEach((paragraph: string) => {
          const paragraphList = paragraph.trim().split(' ')
          wrList.push(paragraphList)
        })

        resp.data[grammarNumber].rightParagraphs.forEach((paragraph: string) => {
          const paragraphList = paragraph.trim().split(' ')
          coList.push(paragraphList)
        })

        setGrammar(resp.data)
        setWrongList(wrList)
        setCorrectList(coList)
      })
      .catch(err => console.log(err))
  }, [grammarNumber])

  // editing
  const onEdit = (e: any) => {
    const tar = e.target
    const word = tar.innerText
    const wordInd = +tar.id.split('-')[1]
    const pInd = +tar.id.split('-')[2]

    setIsEditing(true)
    setTarget(tar)
    setWord(word.trim())

    setParagraphIndex(pInd)
    setWordIndex(wordInd)
  }

  const edit = () => {
    let newList = wrongList

    if(target) { 
      target.innerText = word + ' '
      target.style.color = 'rgb(237, 33, 37)'
      setTimeout(() => {
      target.style.color = 'black'
      }, 3000)
    }

    if(newList) newList[paragraphIndex][wordIndex] = word

    setWrongList(newList)
    setIsEditing(false)
    setWord('')
  }

  // drag and drop
  const drag = (e: any) => {
    const tar = e.target
    setWord(tar.innerText)
  }

  const allowDrop = (e: any) => {
    e.preventDefault()
    const tar = e.target
    const wordInd = +tar.id.split('-')[1]
    const pInd = +tar.id.split('-')[2]

    console.log(tar)

    setTarget(tar)
    setParagraphIndex(pInd)
    setWordIndex(wordInd)
  }

  const drop = (e: any) => {
    edit()
  }

  // checking
  const check = () => {
    let wrongs = 0

    if(wrongList !== null && correctList !== null) {
      for (let i = 0; i < wrongList.length; i++) {
        for (let j = 0; j < wrongList[i].length; j++) {
          if(wrongList[i][j].trim() !== correctList[i][j].trim() ) {
            wrongs++
            // console.log(wrongList[i][j].trim())
            // console.log(correctList[i][j].trim())
          }
        }
      }
    }

    alert(`Брой грешки: ${wrongs}`)
  }

  // Arrows
  const leftArrowClicked = () => {
    if(!isEditing) {
      let value = grammarNumber - 1
      if(value < 0) value = 0
      setGrammarNumber(value)
    }
  }
  const rightArrowClicked = () => { 
    if(!isEditing) {
      let value = grammarNumber + 1
      if(value > grammar.length - 1) value = grammar.length - 1
      setGrammarNumber(value)
    }
  }
  
  return (
    <>
    {
      grammar.length !== 0 ? 
      <main className='center'>
        <h2 className='center'>Граматикоблъсканици</h2>
        <h3 style={grammarStyles}>{grammarNumber + 1}. {grammar[grammarNumber].title}</h3>
        <div className='container-flex-row center'>
        {
          grammar[grammarNumber].dropsList && 
          grammar[grammarNumber].dropsList.map((word: string, i: number) => {
            return <span key={i} id='word' className='flex-item-1' draggable='true' onDragStart={drag}>
              {word}
            </span>
          })
        }
        </div>
        <br />
        <h5 style={grammarStyles}><em>{grammar[grammarNumber].description}</em></h5>
        <br />
        { isEditing ? <div>
          <input type='text' value={word} onChange={(e)=> setWord(e.target.value)} style={inputStyles} />
          <button onClick={edit} style={correctBtnStyles}>ПОПРАВИ</button>
        </div> : null }
        {
          grammar[grammarNumber].wrongParagraphs.map((p: any, j: number) => {
            return <p 
              id={`paragraph-${j}`} 
              key={j} 
              style={grammarStyles} 
            >
              &nbsp;&nbsp;
              {
                p.split(' ').map((word: string, k: number ) => {
                  return <span 
                    key={k} 
                    id={`word-${k}-${j}`} 
                    onClick={onEdit}
                    onDragOver={word === '(.........)' ? allowDrop : () => {}}
                    onDrop={word === '(.........)' ? drop : () => {}}
                  >
                    {word + ' '}
                  </span>
                })
              }
            </p>
          })
        }

        <br />
        <br />
        <div className='container-flex-row'>
          <div className='flex-item-1'>
            <Image 
                src={ArrowLeft} 
                alt='arrow' 
                width={60} 
                style={{float: 'right'}}
                onClick={leftArrowClicked} 
              />
          </div>
          <div className='flex-item-1 center'>
            <button onClick={check} style={checkBtnStyles}>
              ПРОВЕРИ
            </button>
          </div>
          <div className='flex-item-1'>
            <Image 
                src={ArrowRight} 
                alt='arrow' 
                width={60} 
                style={{float: 'left'}}
                onClick={rightArrowClicked}
              />
          </div>
        </div>
      </main> : 
      null
    }
    <br />
    </>
  )
}
