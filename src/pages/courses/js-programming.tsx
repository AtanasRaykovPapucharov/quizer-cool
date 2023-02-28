import Image from 'next/image'

import {useAppSelector} from '../../redux/hooks/useAppSelector'

import JsonTree from '../../components/JsonTree'
import data1 from '../../data/programming-fundamentals.json'
import data2 from '../../data/programming-advanced.json'
import basic from '../../data/basic.json'
import { CSSProperties } from 'react'

const styles: CSSProperties = {
    width: "99%",
    color: 'rgb(189,58,72)'
}

const jsLoader = () => {
    return `https://res.cloudinary.com/hapiherb/image/upload/v1675022944/apps/js_aabroh.png`
}

export default function JsFundamentals() {
    const route = useAppSelector(state => state.route)

    return (
        <div>
            <h2 className='center'>
                {/* <Image
                    className='logo animate__animated animate__swing' 
                    src='logo.png'
                    alt='logo'
                    width={50} 
                    height={50}
                    loader={jsLoader}
                    priority
                />
                &nbsp;&nbsp;&nbsp;  */}
                ПРОГРАМИРАНЕ
            </h2>
            <h3 style={styles} className="center">{basic.info}</h3>
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
                </div>
            </div>
        </div>
    )
}
