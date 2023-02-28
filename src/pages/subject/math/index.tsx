
import MathData from '../../../data/math.json'
import JsonTree from '../../../components/JsonTree'

export default function Math() {

    return (
        <div>
            <h2 className="center">Математика</h2>
            <h3>Програма</h3>
            <div className='container-resp-col'>
                <div className='flex-item-1'>{JsonTree(MathData.One)}</div>
                <div className='flex-item-1'>{JsonTree(MathData.Two)}</div>
            </div>
        </div>
    )
}
