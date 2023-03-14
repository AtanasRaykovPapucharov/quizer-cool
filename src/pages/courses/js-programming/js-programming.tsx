import Image from 'next/image'

import {useAppSelector} from '../../../redux/hooks/useAppSelector'

import JsonTree from '../../../components/JsonTree'
import data1 from '../../../data/programming-fundamentals.json'
import data2 from '../../../data/programming-advanced.json'
import data3 from '../../../data/programming-oop.json'
import basic from '../../../data/basic.json'
import { CSSProperties } from 'react'

const styles: CSSProperties = {
    width: "99%",
    color: 'rgb(189,58,72)',
    marginTop: '-33px'
}

const jsLoader = () => {
    return `https://res.cloudinary.com/hapiherb/image/upload/v1675022944/apps/js_aabroh.png`
}

export default function JsFundamentals() {
    const route = useAppSelector(state => state.route)

    return (
        <div>
            <h2 className='center'>
                ПРОГРАМИРАНЕ
            </h2>
            <h4 style={styles} className="center"><em>{basic.info}</em></h4>
            <h2 className='center'>Java Script</h2>
            <div className='container-resp-col'>
                <div className='flex-item-1'>
                    <h3 className='center'>1. Basics</h3>
                    {JsonTree(data1)}
                </div>

                <div className='flex-item-1'>
                    <h3 className='center'>2. Advanced</h3>
                    {JsonTree(data2)}
                </div>

                <div className='flex-item-1'>
                    <h3 className='center'>3. OOP</h3>
                    {JsonTree(data3)}
                </div>
            </div>
        </div>
    )
}
