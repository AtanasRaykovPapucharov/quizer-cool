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
                АНГЛИЙСКИ ЕЗИК
            </h2>
            <div className='container-resp-col'>
                <div className='flex-item-1'>
                    <h3 className='center'>A1</h3>
                    <h3 className='center'>A2</h3>
                </div>

                <div className='flex-item-1'>
                    <h3 className='center'>B1</h3>
                    <h3 className='center'>B2</h3>
                </div>

                <div className='flex-item-1'>
                    <h3 className='center'>C1</h3>
                    <h3 className='center'>C2</h3>
                </div>
            </div>
        </div>
    )
}
