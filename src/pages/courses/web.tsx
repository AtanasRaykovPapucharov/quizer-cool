import Image from 'next/image'

import {useAppSelector} from '../../redux/hooks/useAppSelector'

import JsonTree from '../../components/JsonTree'
import data1 from '../../data/programming-fundamentals.json'
import data2 from '../../data/programming-advanced.json'
import data3 from '../../data/programming-oop.json'
import basic from '../../data/basic.json'
import { CSSProperties } from 'react'

const styles: CSSProperties = {
    width: "99%",
    color: 'rgb(189,58,72)',
    marginTop: '-33px'
}

const jsLoader = () => {
    return `https://res.cloudinary.com/hapiherb/image/upload/v1675022944/apps/js_aabroh.png`
}

export default function JsWeb() {
    const route = useAppSelector(state => state.route)

    return (
        <div>
            <h2 className='center'>
                УЕБ ТЕХНОЛОГИИ
            </h2>
            <h4 style={styles} className="center"><em>{basic.info}</em></h4>
            <div className='flex-item-2'>
            </div>
            <div className='container-resp-col'>
                <div className='flex-item-1'>
                    <h3 className='center'>1. Basics</h3>
                    <h3 className='center'>HTML</h3>
                    <h3 className='center'>CSS</h3>
                    <h3 className='center'>Java Script</h3>
                    <h3 className='center'>DOM JS</h3>
                </div>

                <div className='flex-item-1'>
                    <h3 className='center'>2. Advanced</h3>
                    <h3 className='center'>SASS</h3>
                    <h3 className='center'>JS Application</h3>
                    <h3 className='center'>React JS</h3>
                    <h3 className='center'>Next JS</h3>
                </div>
            </div>
        </div>
    )
}
