import { CSSProperties, useState } from 'react'

const styled: CSSProperties = {
    paddingRight: "8px"
}
 
export default function MathFour() {

    return (
        <div>
            <h2 className='center'>Курсове по МАТЕМАТИКА</h2>
            <div className='container-resp-col'>
                <div className='flex-item-1' style={styled}>
                    
                </div>
                <div className='flex-item-1' style={styled}>
                    <h1 className="center">Няма активни</h1>
                </div>
                <div className='flex-item-1'>
                    
                </div>
            </div>
        </div>
    )
}
