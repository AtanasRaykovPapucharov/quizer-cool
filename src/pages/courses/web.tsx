import basic from '../../data/basic.json'
import data1 from '../../data/programs/web/web-basics.json'
import data2 from '../../data/programs/web/web-advanced.json'
import data3 from '../../data/programs/web/web-tech.json'
import { CSSProperties } from 'react'
import JsonTree from '@/components/JsonTree'

const styles: CSSProperties = {
    width: "99%",
    color: 'rgb(189,58,72)',
    marginTop: '-33px'
}

export default function JsWeb() {

    return (
        <div>
            <h2 className='center'>
                УЕБ ТЕХНОЛОГИИ
            </h2>
            <h4 style={styles} className="center"><em>{basic.info}</em></h4>
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
                    <h3 className='center'>3. Technologies</h3>
                    {JsonTree(data3)}
                </div>
            </div>
        </div>
    )
}
