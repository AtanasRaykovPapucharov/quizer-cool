// import Image from 'next/image'

import JsonTree from '../../components/JsonTree'
import { CSSProperties, useState } from 'react'
import MathData1 from '../../data/math-4.json'
import MathData2 from '../../data/math-7.json'
import MathData3 from '../../data/math-10.json'

const styled: CSSProperties = {
    paddingRight: "8px"
}
 
export default function MathFour() {
    // const [point, setPoint] = useState('')

    return (
        <div>
            <h2 className='center'>МАТЕМАТИКА</h2>
            <div className='container-resp-col'>
                <div className='flex-item-1' style={styled}>
                    <h3 className='center'>1 част</h3>
                    {JsonTree(MathData1)}
                </div>
                <div className='flex-item-1' style={styled}>
                    <h3 className='center'>2 част</h3>
                    {JsonTree(MathData2)}
                </div>
                <div className='flex-item-1'>
                    <h3 className='center'>3 част</h3>
                    {JsonTree(MathData3)}
                </div>
            </div>
        </div>
    )
}