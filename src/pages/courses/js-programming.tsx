import basic from '../../data/basic.json'
import { CSSProperties } from 'react'

const styles: CSSProperties = {
    width: "99%",
    color: 'rgb(189,58,72)',
    marginTop: '-33px'
}

export default function JsFundamentals() {

    return (
        <div>
            <h2 className='center'>
                Курсове по ПРОГРАМИРАНЕ
            </h2>
            <h4 style={styles} className="center"><em>{basic.info}</em></h4>
            <div className='container-resp-col'>
                <div className='flex-item-1'>
                </div>

                <div className='flex-item-1'>
                    <h1 className="center">Няма активни</h1>
                </div>

                <div className='flex-item-1'>
                </div>
            </div>
        </div>
    )
}
